import fs from "fs"
import path from "path"
import { pageDirectory } from "./config"


let pageCache = 
{
    pages: new Map()
}

export function FetchPageContent(pageName)
{

    const directoryPath = path.join(process.cwd(), pageDirectory);
    const pageFilePath = path.join(directoryPath, (pageName + ".json"));

    if(!pageCache.pages.has(pageName) && fs.existsSync(pageFilePath))
    {

        const pageContentsString = fs.readFileSync(pageFilePath, {encoding: 'utf-8', flag: 'r'});
        const pageContentsJson = JSON.parse(pageContentsString);

        const pageObject = 
        {

            background: pageContentsJson.background[0],
            body: pageContentsJson.body ?? null
        }

        pageCache.pages.set(pageName, pageObject);

    }
    return pageCache.pages.get(pageName);
}