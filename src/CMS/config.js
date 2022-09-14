import * as FontAwesomeIcons from "react-icons/fa";
import Icons from "../components/CustomIcon/Icons";

const downloadsMediaFolder = "/public/media/downloads/";
const downloadsPublicFolder = "/media/downloads/";

export const pageDirectory = "content/pages/";
const pageImageMediaFolder = "/public/media/pages/{{slug}}/images";
const pageImagePublicFolder = "/media/pages/{{slug}}/images";
const pageVideoMediaFolder = "/public/media/pages/{{slug}}/videos";
const pageVideoPublicFolder = "/media/pages/{{slug}}/videos";

export const projectDirectory = "content/projects/";
const projectImageMediaFolder = "/public/media/projects/{{fields.year}}/{{slug}}/images/";
const projectImagePublicFolder = "/media/projects/{{fields.year}}/{{slug}}/images/";
const projectVideoMediaFolder = "/public/media/projects/{{fields.year}}/{{slug}}/videos/";
const projectVideoPublicFolder = "/media/projects/{{fields.year}}/{{slug}}/videos/";



function TextSizeOption(configLabel)
{
    return({
        name: "size",
        label: configLabel,
        widget: "select",
        options: 
        [
            {label: "Extra Small", value: "xs"},
            {label: "Small", value: "sm"},
            {label: "Normal", value: "base"},
            {label: "Large", value: "lg"},
            {label: "Extra Large", value: "xl"}
        ]
    });

}

function TextWeightOption(configLabel)
{
    return({
        name: "weight",
        label: configLabel,
        widget: "select",
        options:
        [
            {label: "Extra Light", value: "extralight"},
            {label: "Light", value: "light"},
            {label: "Normal", value: "normal"},
            {label: "Medium", value: "medium"},
            {label: "Semi Bold", value: "semibold"},
            {label: "Bold", value: "bold"},
            {label: "Extra Bold", value: "extrabold"},
            {label: "Black", value: "black"}
        ]
    });
}

function TextAlignmentOption(configLabel)
{
    return({
        name: "alignment",
        label: configLabel,
        widget: "select",
        options:
        [
            "left",
            "right",
            "center",
            "justify"
        ],
        default: "center"
    });
}



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
        TextSizeOption("Header Size"),
        TextWeightOption("Header Weight"),
        TextAlignmentOption("Header Alignment")
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
            name: "content",
            label: "Text",
            widget: "text"
        },
        TextSizeOption("Text Size"),
        TextWeightOption("Text Weight"),
        TextAlignmentOption("Text Alignment")
    ]
}

const dividerObjectConfig =
{
    name: "divider",
    label: "Divider",
    widget: "object",
    fields: 
    [
        {
            name: "thickness",
            label: "Line Thickness",
            widget: "select",
            options:
            [
                "px",
                "0.5",
                "1",
                "1.5",
                "2",
                "2.5",
                "3",
                "3.5",
                "4",
                "5",
                "6",
                "7",
                "8"
            ],
            default: "1"
        },
        {
            name: "text",
            label: "Text",
            widget: "object",
            required: false,
            collapsed: true,
            fields:
            [
                {
                    name: "content",
                    label: "Text",
                    widget: "string",
                    required: false
                },
                TextSizeOption("Text Size"),
                TextWeightOption("Text Weight"),
                TextAlignmentOption("Text Alignment")
            ]
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
        IconObjectConfig("Button Icon", false),
        {
            name: "iconAlignment",
            label: "Icon Alignment",
            widget: "select",
            options:
            [
                "left",
                "right"
            ],
            default: "left"
        },
        {
            name: "iconAttached",
            label: "Attach Icon",
            widget: "boolean",
            default: true,
            hint: "Determines if the icon is attached to the title or if it is statically placed left or right."
        },
        {
            name: "title",
            label: "Title",
            widget: "string"
        },
        TextSizeOption("Title Size"),
        TextWeightOption("Title Weight"),
        TextAlignmentOption("Title Alignment"),
        {
            name: "width",
            label: "Button Width",
            widget: "select",
            options:
            [
                "fit-content",
                "full"
            ],
            default: "fit-content"
        },
        {
            name: "action",
            label: "Button Action",
            widget: "list",
            min: 1,
            max: 1,
            types:
            [
                {
                    name: "download",
                    label: "Download Action",
                    widget: "object",
                    fields:
                    [
                        {
                            name: "target",
                            label: "Download Target",
                            widget: "file",
                            allow_multiple: true,
                            media_folder: downloadsMediaFolder,
                            // public_folder: downloadsPublicFolder
                        }
                    ]
                },
                {
                    name: "redirect",
                    label: "Redirect Action",
                    widget: "object",
                    fields:
                    [
                        {
                            name: "target",
                            label: "Redirect Target",
                            widget: "string",
                            pattern: 
                            [ 
                                RegExp("^(?:http:\\/\\/|https:\\/\\/|\\/){1}(?:[\\/?#@:\\[\\]=!\\$&()\\*+,;A-Za-z0-9-_~\\.]+)*"), 
                                "The target has to be a relative or absolute url"
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}

const flexLayoutObjectConfig = 
{
    name: "flexLayout",
    label: "Flex Layout",
    widget: "object",
    fields:
    [
        {
            name: "direction",
            label: "Flex Direction",
            widget: "select",
            options:
            [
                "row",
                "column",
                "row-reverse",
                "column-reverse"
            ],
            default: "row"
        },
        {
            name: "wrap",
            label: "Flex Wrapping",
            widget: "select",
            options:
            [
                "no-wrap",
                "wrap",
                "wrap-reverse"
            ],
            default: "no-wrap"
        },
        {
            name: "align",
            label: "Flex Item Align",
            widget: "select",
            options:
            [
                "start",
                "center",
                "end",
                "stretch",
                "baseline"
            ],
            default: "start",
            hint: "Alignment of the items along the cross axis"
        },
        {
            name: "justify",
            label: "Flex Item Justify",
            widget: "select",
            options:
            [
                "start",
                "center",
                "end",
                "space-between",
                "space-around",
                "space-evenly"
            ],
            default: "start",
            hint: "Alignment of the items along the main axis"
        },
        {
            name: "content",
            label: "Flex Content",
            widget: "list",
            min: 1,
            types:
            [
                headerObjectConfig,
                textBlockObjectConfig,
                dividerObjectConfig,
                ImageObjectConfig("Image", projectImageMediaFolder, projectImagePublicFolder),
                VideoObjectConfig("Video", projectVideoMediaFolder, projectVideoPublicFolder),
                SlideShowObjectConfig("Slideshow", 
                    projectImageMediaFolder, 
                    projectVideoMediaFolder,
                    projectImagePublicFolder,
                    projectVideoPublicFolder),
                buttonObjectConfig
            ]
        }
    ]
}



function IconObjectConfig(configLabel, optional)
{

    return({
        name: "icon",
        label: configLabel,
        widget: "object",
        required: optional ?? true,
        fields:
        [
            {
                name: "iconType",
                label: "Icon",
                widget: "list",
                min: 1,
                max: 1,
                types:
                [
                    {
                        name: "fontawesome",
                        label: "Fontawesome Icon",
                        widget: "object",
                        fields:
                        [
                            {
                                name: "iconName",
                                label: "Icon Name",
                                widget: "select",
                                options: Object.keys(FontAwesomeIcons)
                            }
                        ]
                    },
                    {
                        name: "custom",
                        label: "Custom Icon",
                        widget: "object",
                        fields:
                        [
                            {
                                name: "iconName",
                                label: "Icon Name",
                                widget: "select",
                                options: Object.keys(Icons)
                            },
                            {
                                name: "iconColor",
                                label: "Icon Color",
                                widget: "select",
                                options: 
                                [
                                    "current",
                                    "icon"
                                ],
                                default: "icon"
                            }
                        ]
                    }
                ]
            },
            TextSizeOption("Icon Size")
        ]

    });

}

function ImageObjectConfig(configLabel, mediaFolder, publicFolder)
{
    return(
    {
        name: "image",
        label: configLabel,
        widget: "object",
        fields:
        [
            {
                name: "image",
                label: "Image Source",
                widget: "image",
                media_folder: mediaFolder,
                // public_folder: publicFolder
            },
            {
                name: "aspectRatio",
                label: "Image Aspect-Ratio",
                widget: "select",
                options:
                [
                    "1/1",
                    "2/1",
                    "3/2",
                    "4/3",
                    "5/4",
                    "16/9",
                    "1/2",
                    "2/3",
                    "3/4",
                    "4/5",
                    "9/16"
                ],
                default: "4/3"
            },
            {
                name: "fit",
                label: "Image Fit",
                widget: "select",
                options:
                [
                    "fill",
                    "contain",
                    "cover",
                    "none",
                    "scale-down"
                ],
                default: "cover"
            },
            {
                name: "layout",
                label: "Image Layout",
                widget: "select",
                options: 
                [
                    "intrinsic",
                    "fixed",
                    "responsive",
                    "fill"
                ],
                default: "fill"
            },
            {
                name: "width",
                label: "Image Width",
                widget: "number",
                value_type: "int",
                min: 1,
                required: false
            },
            {
                name: "height",
                label: "Image Height",
                widget: "number",
                value_type: "int",
                min: 1,
                required: false
            }
        ]
    });
} 

function VideoObjectConfig(configLabel, mediaFolder, publicFolder)
{
    return({
        name: "video",
        label: configLabel,
        widget: "object",
        fields:
        [
            {
                name: "video",
                label: "Video",
                widget: "file",
                pattern: [RegExp(".+\\.(mp4|webm|ogg)"), "File has to be of type .mp4, .webm or .ogg"],
                media_folder: mediaFolder,
                // public_folder: publicFolder
            },
            {
                name: "aspectRatio",
                label: "Video Aspect-Ratio",
                widget: "select",
                options:
                [
                    "1/1",
                    "2/1",
                    "3/2",
                    "4/3",
                    "5/4",
                    "16/9",
                    "1/2",
                    "2/3",
                    "3/4",
                    "4/5",
                    "9/16"
                ],
                default: "4/3"
            },
            {
                name: "fit",
                label: "Video Fit",
                widget: "select",
                options:
                [
                    "fill",
                    "contain",
                    "cover",
                    "none",
                    "scale-down"
                ],
                default: "cover"
            },
            {
                name: "controls",
                label: "Video Controls",
                widget: "boolean",
                default: true
            },
            {
                name: "autoPlay",
                label: "Video Auto Play",
                widget: "boolean",
                default: false
            },
            {
                name: "muted",
                label: "Video Muted",
                widget: "boolean",
                default: false
            },
            {
                name: "looped",
                label: "Video Looped",
                widget: "boolean",
                default: false
            }
        ]
    });
}

function SlideShowObjectConfig(configLabel, imageMediaFolder, videoMediaFolder, imagePublicFolder, videoPublicFolder)
{

    let slideshowImage = ImageObjectConfig("Image Slide", imageMediaFolder, imagePublicFolder);
    let slideshowVideo = VideoObjectConfig("Video Slide", videoMediaFolder, videoPublicFolder);

    slideshowImage.fields.push(
        {
            name: "time",
            label: "Slide Show Time",
            widget: "number",
            value_type: "float",
            min: 0.01,
            default: 5.0,
            hint: "Time the slide is shown in seconds"
        }
    );

    slideshowVideo.fields.push(
        {
            name: "time",
            label: "Slide Show Time",
            widget: "number",
            value_type: "float",
            min: 0.01,
            default: 5.0,
            hint: "Time the slide is shown in seconds, if the video isnt playing."
        }
    );

    slideshowVideo.fields.splice(slideshowVideo.fields.findIndex((value)=>{return value.name == "looped";}), 1);



    return({
        name: "slideshow",
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
                    slideshowImage,
                    slideshowVideo
                ]
            },
            {
                name: "aspectRatio",
                label: "Slideshow Aspect-Ratio",
                widget: "select",
                options:
                [
                    "1/1",
                    "2/1",
                    "3/2",
                    "4/3",
                    "5/4",
                    "16/9",
                    "1/2",
                    "2/3",
                    "3/4",
                    "4/5",
                    "9/16"
                ],
                default: "4/3"
            },
            {
                name: "controls",
                label: "Slide Controls",
                widget: "boolean",
                default: true
            },
            {
                name: "autoPlay",
                label: "Slide Autoplay",
                widget: "boolean",
                default: true
            },
            {
                name: "direction",
                label: "Slide Direction",
                widget: "select",
                options:
                [
                    "horizontal",
                    "vertical"
                ],
                default: "vertical"
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
                name: "background",
                label: "Project Background",
                widget: "list",
                min: 1,
                max: 1,
                types:
                [
                    ImageObjectConfig("Background Image", projectImageMediaFolder, projectImagePublicFolder),
                    VideoObjectConfig("Background Video", projectVideoMediaFolder, projectVideoPublicFolder),
                    SlideShowObjectConfig("Background Slideshow",
                        projectImageMediaFolder, projectVideoMediaFolder,
                        projectImagePublicFolder, projectVideoPublicFolder)
                ]
            },
            {
                name: "body",
                label: "PageBody",
                widget: "list",
                types:
                [
                    headerObjectConfig,
                    textBlockObjectConfig,
                    dividerObjectConfig,
                    ImageObjectConfig("Image", pageImageMediaFolder, pageImagePublicFolder),
                    VideoObjectConfig("Video", pageVideoMediaFolder, pageVideoPublicFolder),
                    SlideShowObjectConfig("Slideshow", 
                        pageImageMediaFolder, 
                        pageVideoMediaFolder,
                        pageImagePublicFolder,
                        pageVideoPublicFolder),
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
                PageConfig("Contact"),
                {
                    name: "Projects",
                    label: "Projects",
                    file: pageDirectory + "Projects.json",
                    fields:
                    [
                        {
                            name: "background",
                            label: "Project Background",
                            widget: "list",
                            min: 1,
                            max: 1,
                            types:
                            [
                                ImageObjectConfig("Background Image", projectImageMediaFolder, projectImagePublicFolder),
                                VideoObjectConfig("Background Video", projectVideoMediaFolder, projectVideoPublicFolder),
                                SlideShowObjectConfig("Background Slideshow",
                                    projectImageMediaFolder, projectVideoMediaFolder,
                                    projectImagePublicFolder, projectVideoPublicFolder)
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: "projects",
            label: "Projects",
            extension: "json",
            folder: projectDirectory,
            create: true,
            path: "{{year}}/{{slug}}",
            slug: "{{slug}}",
            summary: "({{fields.details.type}}) {{fields.year}} - {{fields.title}}",
            fields:
            [
                {
                    name: "title",
                    label: "Project Title",
                    widget: "string",
                    pattern: [RegExp("[A-Za-z0-9\\ ]{2,32}"), "must be name from a-z and 0-9"]
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
                        ImageObjectConfig("Thumbnail Image", projectImageMediaFolder, projectImagePublicFolder),
                        VideoObjectConfig("Thumbnail Video", projectVideoMediaFolder, projectVideoPublicFolder),
                        SlideShowObjectConfig("Thumbnail Slideshow", 
                            projectImageMediaFolder, projectVideoMediaFolder,
                            projectImagePublicFolder, projectVideoPublicFolder)
                    ]
                },
                {
                    name: "background",
                    label: "Project Background",
                    widget: "list",
                    min: 1,
                    max: 1,
                    types:
                    [
                        ImageObjectConfig("Background Image", projectImageMediaFolder, projectImagePublicFolder),
                        VideoObjectConfig("Background Video", projectVideoMediaFolder, projectVideoPublicFolder),
                        SlideShowObjectConfig("Background Slideshow",
                            projectImageMediaFolder, projectVideoMediaFolder,
                            projectImagePublicFolder, projectVideoPublicFolder)
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
                            name: "duration",
                            label: "Project Duration",
                            widget: "string",
                            required: false
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
                            name: "tech",
                            label: "Tech & Tools",
                            widget: "string",   //TODO: change to relation widget
                            required: false
                        },
                        {
                            name: "languages",
                            label: "Languages, Frameworks, APIs, Etc.",
                            widget: "string",   //TODO: change to relation widget
                            required: false
                        }
                    ]
                },
                {
                    name: "description",
                    label: "Project Description",
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
                        dividerObjectConfig,
                        ImageObjectConfig("Image", projectImageMediaFolder, projectImagePublicFolder),
                        VideoObjectConfig("Video", projectVideoMediaFolder, projectVideoPublicFolder),
                        SlideShowObjectConfig("Slideshow", 
                            projectImageMediaFolder, 
                            projectVideoMediaFolder,
                            projectImagePublicFolder,
                            projectVideoPublicFolder),
                        buttonObjectConfig,
                        flexLayoutObjectConfig
                    ]
                }
            ]
        }
    ]

}

export default CMSConfig;