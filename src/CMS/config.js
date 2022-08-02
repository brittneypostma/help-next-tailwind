export const pageDirectory = "content/pages/";
const pageImageMediaFolder = "/public/media/pages/{{slug}}/images";
const pageVideoMediaFolder = "/public/media/pages/{{slug}}/videos";

export const projectDirectory = "content/projects/";
const projectImageMediaFolder = "/public/media/projects/{{fields.year}}/{{slug}}/images/";
const projectVideoMediaFolder = "/public/media/projects/{{fields.year}}/{{slug}}/videos/";



const headerObjectConfig = 
{
    name: "header",
    label: "Header",
    widget: "object",
    fields:
    [
        {
            name: "content",
            label: "Header Content",
            widget: "string"
        },
        {
            name: "size",
            label: "Header Size",
            widget: "select",
            options: 
            [
                "Extra Small",
                "Small",
                "Medium",
                "Large",
                "Extra large"
            ],
            default: "Large"
        }
    ]
}

const textBlockObjectConfig =
{
    name: "textblock",
    label: "Text Block",
    widget: "object",
    fields: 
    [
        {
            name: "text",
            label: "Text",
            widget: "text"
        }
    ]
}

const buttonObjectConfig =
{
    name: "button",
    label: "Button",
    widget: "object",
    fields:
    [
        {
            name: "icon",
            label: "Button Icon",
            widget: "string"    //TODO: change to be able to select fa icons.
        },
        {
            name: "title",
            label: "Button Title",
            widget: "string"
        },
        //TODO: add action
    ]
}

const lineObjectConfig =
{
    name: "line",
    label: "Line",
    widget: "object",
    fields: 
    [
        {
            name: "thickness",
            label: "Line Thickness",
            widget: "number",
            value_type: "float",
            min: 0.0
        }
    ]
}



function ImageObjectConfig(configName, configLabel, mediaFolder)
{
    return(
    {
        name: configName,
        label: configLabel,
        widget: "object",
        fields:
        [
            {
                name: "image",
                label: "Image",
                widget: "image",
                media_folder: mediaFolder
            }
        ]
    });
} 

function VideoObjectConfig(configName, configLabel, mediaFolder)
{
    return({
        name: configName,
        label: configLabel,
        widget: "object",
        fields:
        [
            {
                name: "video",
                label: "Video",
                widget: "file",
                // pattern: ["", ""],
                media_folder: mediaFolder
            }
        ]
    });
}

function SlideShowObjectConfig(configName, configLabel, imageMediaFolder, videoMediaFolder)
{
    return({
        name: configName,
        label: configLabel,
        widget: "object",
        fields:
        [
            {
                name: "slides",
                label: "Slides",
                widget: "list",
                min: 2,
                types:
                [
                    ImageObjectConfig("slide_image", "Image Slide", imageMediaFolder),
                    VideoObjectConfig("slide_video", "Video Slide", videoMediaFolder)
                ]
            }
        ]
    });
}

function PageConfig(pageName)
{
    return({
        name: pageName,
        label: pageName,
        file: pageDirectory + pageName + ".json",
        fields:
        [
            {
                name: "title",
                label: "Title",
                widget: "hidden",
                default: pageName
            },
            {
                name: "body",
                label: "PageBody",
                widget: "list",
                types:
                [
                    headerObjectConfig,
                    textBlockObjectConfig,
                    lineObjectConfig,
                    ImageObjectConfig("image", "Image", pageImageMediaFolder),
                    VideoObjectConfig("video", "Video", pageVideoMediaFolder),
                    SlideShowObjectConfig("slideshow", "Slideshow", pageImageMediaFolder, pageVideoMediaFolder),
                    buttonObjectConfig
                ]
            }
        ]
    });
}



const CMSConfig =
{
    load_config_file: false,

    backend: 
    {
        name: 'git-gateway',
        branch: 'main',
    },
    local_backend: true,

    media_folder: "/public/media",
    public_folder: "/media",

    collections:
    [
        {
            name: "pages",
            label: "Pages",
            extension: "json",
            files:
            [
                PageConfig("About"),
                PageConfig("Contact")
            ]
        },
        {
            name: "projects",
            label: "Projects",
            extension: "json",
            folder: projectDirectory,
            create: true,
            path: "{{slug}}",
            slug: "{{fields.year}}/{{slug}}",
            summary: "({{fields.details.type}}) {{fields.year}} - {{slug}}",
            fields:
            [
                {
                    name: "title",
                    label: "Project Title",
                    widget: "string"
                },
                {
                    name: "year",
                    label: "Project Year",
                    widget: "datetime",
                    format: "YYYY",
                    date_format: "YYYY",
                    time_format: false
                },
                {
                    name: "category",
                    label: "Project Category",
                    widget: "select",   //TODO: change to relation widget
                    options:
                    [
                        "Featured",
                        "Other"
                    ],
                    default: "Featured"
                },
                {
                    name: "priority",
                    label: "Project Order Priority",
                    widget: "number",
                    value_type: "int",
                    default: 0,
                    min: 0,
                    hint: "Determines the order of the projects to appear in the overview." +
                          "If projects have the same priority, they will be sorted alphabetically."
                },
                {
                    name: "thumbnail",
                    label: "Project Thumbnail",
                    widget: "list",
                    min: 1,
                    max: 1,
                    types:
                    [
                        ImageObjectConfig("thumbnail_image", "Thumbnail Image", projectImageMediaFolder),
                        VideoObjectConfig("thumbnail_video", "Thumbnail Video", projectVideoMediaFolder),
                        SlideShowObjectConfig("thumbnail_slideshow", "Thumbnail Slideshow", projectImageMediaFolder, projectVideoMediaFolder)
                    ]
                },
                {
                    name: "details",
                    label: "Project Details",
                    widget: "object",
                    fields:
                    [
                        {
                            name: "type",
                            label: "Project Type",
                            widget: "select",   //TODO: change to relation widget
                            options:
                            [
                                "School Project",
                                "Personal Project",
                                "Professional Project",
                                "Other"
                            ],
                            default: "Other"
                        },
                        {
                            name: "goals",
                            label: "Project Goals",
                            widget: "string",
                            required: false
                        },
                        {
                            name: "teamsize",
                            label: "Team Size",
                            widget: "string",
                            required: false
                        },
                        {
                            name: "roles",
                            label: "Personal Roles",
                            widget: "string",
                            required: false
                        },
                        {
                            name: "techandtools",
                            label: "Tech & Tools",
                            widget: "string",   //TODO: change to relation widget
                            required: false
                        },
                        {
                            name: "languagesandframeworks",
                            label: "Languages, Frameworks, Etc.",
                            widget: "string",   //TODO: change to relation widget
                            required: false
                        }
                    ]
                },
                {
                    name: "summary",
                    label: "Project Summary",
                    widget: "text",
                    required: false,
                },
                {
                    name: "body",
                    label: "Project Body",
                    widget: "list",
                    types:
                    [
                        headerObjectConfig,
                        textBlockObjectConfig,
                        lineObjectConfig,
                        ImageObjectConfig("image", "Image", projectImageMediaFolder),
                        VideoObjectConfig("video", "Video", projectVideoMediaFolder),
                        SlideShowObjectConfig("slideshow", "Slideshow", projectImageMediaFolder, projectVideoMediaFolder),
                        buttonObjectConfig
                    ]
                }
            ]
        }
    ]

}

export default CMSConfig;