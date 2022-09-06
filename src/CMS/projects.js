import fs from "fs"
import path from "path"

let projectsCache = 
{
    directory: null,
    contents: new Array()
};

export function FetchProjectsContent(projectDir)
{

    //If the project directory is already loaded previously, return it.
    //Should cover all use-cases currently as there should only be one project directory.
    if(projectsCache.directory == projectDir){ return projectsCache.contents; }

    const directoryPath = path.join(process.cwd(), projectDir);

    //Load the project directory contents using the NodeJS filesystem API.
    //using the 'withFileTypes' option with true ensures the function returns an array of fs.dirent objects.
    const directoryContents = fs.readdirSync(directoryPath, {encoding: 'utf-8', withFileTypes: true});
    
    let projectsContent = new Array();

    //Load all sub directories as the structure should look like: ./projects/<project year>/<project name>.json
    directoryContents.filter((directoryEntry)=>
    {
        return directoryEntry.isDirectory();
    })
    .map((subDirectory)=>{

        //Load the sub directory containing the project files.
        const subDirectoryPath = path.join(projectDir, subDirectory.name);
        const subDirectoryContents = fs.readdirSync(subDirectoryPath, {encoding: 'utf-8', withFileTypes: true});

        //Load all the project files.
        subDirectoryContents.filter((subDirectoryEntry)=>
        {
            //Filter json files.
            return (subDirectoryEntry.isFile() && subDirectoryEntry.name.endsWith(".json"));
        })
        .map((projectFile)=>
        {
            //Load project file content.
            const projectFilePath = path.join(subDirectoryPath, projectFile.name);
            const projectContentsString = fs.readFileSync(projectFilePath, {encoding: 'utf-8', flag: 'r'});

            //Parse string to JSON object.
            const projectContentsJson = JSON.parse(projectContentsString);

            //TODO: verify validity off the required properties.

            //Create object containing data in convenient format.
            const projectObject =
            {
                meta:
                {
                    year: String(projectContentsJson.year),
                    name: String(projectContentsJson.title),
                    category: String(projectContentsJson.category),
                    priority: Number.parseInt(projectContentsJson.priority),
                },
                thumbnail: projectContentsJson.thumbnail,
                description: projectContentsJson.description,
                details:
                {
                    type:       (projectContentsJson.details?.type                      ?? null),
                    duration:   (projectContentsJson.details?.duration                  ?? null),
                    goals:      (projectContentsJson.details?.goals                     ?? null),
                    teamSize:   (projectContentsJson.details?.teamsize                  ?? null),
                    roles:      (projectContentsJson.details?.roles                     ?? null),
                    tech:       (projectContentsJson.details?.tech                      ?? null),
                    languages:  (projectContentsJson.details?.languages                 ?? null)
                },
                body: projectContentsJson.body
            }
            
            projectsContent.push(projectObject);

        });

    });

    projectsCache.directory = projectDir;
    projectsCache.contents = projectsContent.sort((left, right)=>{ left.meta.priority < right.meta.priority});

    return projectsCache.contents;

}