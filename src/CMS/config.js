import * as FontAwesomeIcons from "react-icons/fa";
import Icons from "../components/CustomIcon/Icons";

const downloadsMediaFolder = "/public/media/downloads/";
const downloadsPublicFolder = "/media/downloads/";

export const pageDirectory = "content/pages/";
function pageImageMediaFolder(pageName){return `/public/media/pages/${pageName}/images`;}
function pageImagePublicFolder(pageName){return `/media/pages/${pageName}/images`;}
function pageVideoMediaFolder(pageName){return `/public/media/pages/${pageName}/videos`;}
function pageVideoPublicFolder(pageName){return `/media/pages/${pageName}/videos`;}

export const projectDirectory = "content/projects/";
const projectImageMediaFolder = "/public/media/projects/{{fields.year}}/{{slug}}/images/";
const projectImagePublicFolder = "/media/projects/{{fields.year}}/{{slug}}/images/";
const projectVideoMediaFolder = "/public/media/projects/{{fields.year}}/{{slug}}/videos/";
const projectVideoPublicFolder = "/media/projects/{{fields.year}}/{{slug}}/videos/";



function TextSizeOption(configLabel, optional)
{
    return({
        name: "size",
        label: configLabel,
        widget: "select",
        required: optional ?? true,
        options: 
        [
            {label: "Extra Small", value: "xs"},
            {label: "Small", value: "sm"},
            {label: "Normal", value: "base"},
            {label: "Large", value: "lg"},
            {label: "Extra Large", value: "xl"},
            {label: "2 Extra Large", value: "2xl"},
            {label: "3 Extra Large", value: "3xl"},
            {label: "4 Extra Large", value: "4xl"},
            {label: "5 Extra Large", value: "5xl"},
            {label: "6 Extra Large", value: "6xl"},
            {label: "7 Extra Large", value: "7xl"},
            {label: "8 Extra Large", value: "8xl"},
            {label: "9 Extra Large", value: "9xl"}
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

function AspectRatioOption(configLabel, defaultRatio, optional)
{
    return({
        name: "aspectRatio",
        label: configLabel,
        widget: "select",
        required: optional ?? true,
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
        default: (defaultRatio ?? "4/3")
    });
}

function ButtonIconObjectConfig()
{
    let iconObjectConfig = IconObjectConfig("Button Icon", false);

    iconObjectConfig.fields.push(
        {
            name: "alignment",
            label: "Icon Alignment",
            widget: "select",
            required: false,
            options:
            [
                "left",
                "right"
            ],
            default: "left"
        },
        {
            name: "attached",
            label: "Attach Icon",
            widget: "boolean",
            required: false,
            default: true,
            hint: "Determines if the icon is attached to the title or if it is statically placed left or right."
        });

    return iconObjectConfig;
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
            widget: "list",
            summary: "{{fields.line.summary}}",
            min: 1,
            field:
            {
                name: "line",
                label: "Header Line",
                widget: "object",
                summary: "{{fields.content}}",
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
        ButtonIconObjectConfig(),
        {
            name: "title",
            label: "Title",
            widget: "list",
            min: 1,
            field:
            {
                name: "line",
                label: "Title Line",
                widget: "object",
                fields:
                [
                    {
                        name: "content",
                        label: "Title Text",
                        widget: "string"
                    },
                    TextSizeOption("Title Size"),
                    TextWeightOption("Title Weight"),
                    TextAlignmentOption("Title Alignment")
                ]
            }
        },
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
                                RegExp("^(?:mailto:|http:\\/\\/|https:\\/\\/|\\/){1}(?:[\\/?#@:\\[\\]=!\\$&()\\*+,;A-Za-z0-9-_~\\.]+)*"), 
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
                name: "content",
                label: "Icon Content",
                widget: "list",
                required: optional ?? true,
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
            TextSizeOption("Icon Size", optional),
            AspectRatioOption("Icon Aspect Ratio", "1/1", optional)
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
            AspectRatioOption("Image Aspect Ratio"),
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
                pattern: 
                [
                    // RegExp("(?:.+\\.(?:mp4|webm|ogg)$)|(?:https:\\/\\/www\\.youtube\\.com\\/embed\\/.+)"),
                    RegExp(".+"), 
                    "File has to be of type .mp4, .webm, .ogg or a youtube link"
                ],
                media_folder: mediaFolder,
                // public_folder: publicFolder
            },
            AspectRatioOption("Video Aspect Ratio"),
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

function PageBackgroundObjectConfig(configLabel, imageMediaFolder, videoMediaFolder, imagePublicFolder, videoPublicFolder)
{
    return({
        name: "background",
        label: configLabel,
        widget: "list",
        min: 1,
        max: 1,
        types:
        [
            ImageObjectConfig("Background Image", imageMediaFolder, imagePublicFolder),
            VideoObjectConfig("Background Video", videoMediaFolder, videoPublicFolder),
            SlideShowObjectConfig("Background Slideshow",
                imageMediaFolder, videoMediaFolder,
                imagePublicFolder, videoPublicFolder)
        ]
    });
}

function PageConfig(pageName, hasBody, extraFields)
{
    const imageMediaFolder = pageImageMediaFolder(pageName);
    const imagePublicFolder = pageImagePublicFolder(pageName);
    const videoMediaFolder = pageVideoMediaFolder(pageName);
    const videoPublicFolder = pageVideoPublicFolder(pageName);

    let PageConfig = 
        {
            name: pageName,
            label: pageName,
            file: pageDirectory + pageName + ".json",
            fields:
            [
                {
                    name: "title",
                    widget: "hidden",
                    default: pageName
                },
                PageBackgroundObjectConfig("Page Background", 
                    imageMediaFolder, videoMediaFolder, 
                    imagePublicFolder, videoPublicFolder)
            ]
        };

    extraFields?.forEach?.((value)=>
    {
        if(value.index && value.field)
        {
            PageConfig.fields.splice(value.index, 0, value.field);
        }
    });

    if(hasBody)
    {
        PageConfig.fields.push( 
            {
                name: "body",
                label: "PageBody",
                widget: "list",
                types:
                [
                    headerObjectConfig,
                    textBlockObjectConfig,
                    dividerObjectConfig,
                    ImageObjectConfig("Image", imageMediaFolder, imagePublicFolder),
                    VideoObjectConfig("Video", videoMediaFolder, videoPublicFolder),
                    SlideShowObjectConfig("Slideshow", 
                        imageMediaFolder, videoMediaFolder,
                        imagePublicFolder, videoPublicFolder),
                    buttonObjectConfig,
                    flexLayoutObjectConfig
                ]
            });
    }

    return(PageConfig);
}

function AvatarConfigObject(pageName)
{
    return(
        {
            name: "avatar",
            label: "Avatar",
            widget: "object",
            fields:
            [
                ImageObjectConfig("Avatar Content", pageImageMediaFolder(pageName), pageImagePublicFolder(pageName))
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
                PageConfig("Home",      false, [{index: 2, field: AvatarConfigObject("Home")}]),
                PageConfig("About",     true, [{index: 2, field: AvatarConfigObject("About")}]),
                PageConfig("Contact",   true),
                PageConfig("Projects",  false)
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
            summary: "({{fields.category}}) (priority: {{fields.priority}}) {{fields.year}} - {{fields.title}}",
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
                    default: "0",
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
                PageBackgroundObjectConfig("Project Background", 
                    projectImageMediaFolder, projectVideoMediaFolder, 
                    projectImageMediaFolder, projectVideoMediaFolder),
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