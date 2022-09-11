import * as FontAwesomeIcons from "react-icons/fa";
import Icons from "../components/CustomIcon/Icons";

export const pageDirectory = "content/pages/";
const pageImageMediaFolder = "/public/media/pages/{{slug}}/images";
const pageVideoMediaFolder = "/public/media/pages/{{slug}}/videos";

export const projectDirectory = "content/projects/";
const projectImageMediaFolder = "/public/media/projects/{{fields.year}}/{{slug}}/images/";
const projectVideoMediaFolder = "/public/media/projects/{{fields.year}}/{{slug}}/videos/";



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
            name: "title",
            label: "Title",
            widget: "string"
        },
        TextSizeOption("Title Size"),
        TextWeightOption("Title Weight"),
        TextAlignmentOption("Title Alignment")
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
                            }
                        ]
                    }
                ]
            },
            TextSizeOption("Icon Size")
        ]

    });

}

function ImageObjectConfig(configLabel, mediaFolder)
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
                media_folder: mediaFolder
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

function VideoObjectConfig(configLabel, mediaFolder)
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
                pattern: [".+\.(mp4|webm|ogg)", "File has to be of type .mp4, .webm or .ogg"],
                media_folder: mediaFolder
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

function SlideShowObjectConfig(configLabel, imageMediaFolder, videoMediaFolder)
{

    let slideshowImage = ImageObjectConfig("Image Slide", imageMediaFolder);
    let slideshowVideo = VideoObjectConfig("Video Slide", videoMediaFolder);

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
                name: "body",
                label: "PageBody",
                widget: "list",
                types:
                [
                    headerObjectConfig,
                    textBlockObjectConfig,
                    dividerObjectConfig,
                    ImageObjectConfig("Image", pageImageMediaFolder),
                    VideoObjectConfig("Video", pageVideoMediaFolder),
                    SlideShowObjectConfig("Slideshow", pageImageMediaFolder, pageVideoMediaFolder),
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
            path: "{{year}}/{{slug}}",
            slug: "{{slug}}",
            summary: "({{fields.details.type}}) {{fields.year}} - {{fields.title}}",
            fields:
            [
                {
                    name: "title",
                    label: "Project Title",
                    widget: "string",
                    pattern: ["[A-Za-z0-9\ ]{2,32}", "must be name from a-z and 0-9"]
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
                        ImageObjectConfig("Thumbnail Image", projectImageMediaFolder),
                        VideoObjectConfig("Thumbnail Video", projectVideoMediaFolder),
                        SlideShowObjectConfig("Thumbnail Slideshow", projectImageMediaFolder, projectVideoMediaFolder)
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
                        ImageObjectConfig("Image", projectImageMediaFolder),
                        VideoObjectConfig("Video", projectVideoMediaFolder),
                        SlideShowObjectConfig("Slideshow", projectImageMediaFolder, projectVideoMediaFolder),
                        buttonObjectConfig
                    ]
                }
            ]
        }
    ]

}

export default CMSConfig;