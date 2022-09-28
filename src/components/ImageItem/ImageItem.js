import React from "react";
import Image from "next/image";
import BodyItem from "../BodyItem/BodyItem";

import { ParseAspectRatio } from "../../CMS/content";



export default class ImageItem extends React.Component
{

    constructor(props)
    {
        super(props);
    }

    ParseImageFit()
    {
        switch(this.props.ImageFit)
        {
            case "fill":
                return "object-fill";
            case "contain":
                return "object-contain";
            case "cover":
                return "object-cover";
            case "none":
                return "object-none";
            case "scale-down":
                return "object-scale-down";
            default:
                return "object-cover";
        }
    }

    ParseImageAspectRatio()
    {
        return ParseAspectRatio(this.props.ImageAspectRatio);
    }

    render()
    {

        return(
            <BodyItem
                ItemType="Image"
                ItemName={this.props.ImageName ?? null}
                TypeSize="text-2xs"
                NameSize="text-xs"
                OpenBracketInline
                FullItemContent
                TypeNameBackgrounds
                NoTypeNames={this.props.BackgroundItem}
                Width={this.props.BackgroundItem ? "w-full" : null}
                Height={this.props.BackgroundItem ?  "h-full" : null}
                AspectRatio={this.props.BackgroundItem ? this.ParseImageAspectRatio() : null}
                Styles={this.props.BackgroundItem ? "rounded-none" : "my-1 sm:my-1.5"}
            >
                <div
                    className={"relative block w-full " + this.ParseImageAspectRatio() }
                >
                    {
                        this.props.ImageSource ?
                        <Image
                            className={this.ParseImageFit()}
                            src={this.props.ImageSource}
                            alt={this.props.ImageAlt ?? ""}
                            width={this.props.ImageWidth ?? null}
                            height={this.props.ImageHeight ?? null}
                            layout={this.props.ImageLayout ?? null}
                            priority={this.props.BackgroundItem ? true : false}
                        />:
                        null
                    }
                    
                </div>
            </BodyItem>
        );

    }

}