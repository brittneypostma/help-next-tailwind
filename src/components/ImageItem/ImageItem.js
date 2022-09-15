import React from "react";
import Image from "next/image";
import BodyItem from "../BodyItem/BodyItem";



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
        switch(this.props.ImageAspectRatio)
        {
            case "1/1":
                return "aspect-1/1";
            case "2/1":
                return "aspect-2/1";
            case "3/2":
                return "aspect-3/2";
            case "4/3":
                return "aspect-4/3";
            case "5/4":
                return "aspect-5/4";
            case "16/9":
                return "aspect-16/9";
            case "1/2":
                return "aspect-1/2";
            case "2/3":
                return "aspect-2/3";
            case "3/4":
                return "aspect-3/4";
            case "4/5":
                return "aspect-4/5";
            case "9/16":
                return "aspect-9/16";
            default:
                return "4/3";
        }
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
                Width={this.props.BackgroundItem ? "portrait:w-fit landscape:w-full" : null}
                Height={this.props.BackgroundItem ? "portrait:h-full landscape:h-fit" : null}
                AspectRatio={this.props.BackgroundItem ? this.ParseImageAspectRatio() : null}
                Styles={this.props.BackgroundItem ? "rounded-none" : "my-1 sm:my-1.5"}
            >
                <div
                    className={"relative block w-full " + this.ParseImageAspectRatio() }
                >
                    <Image
                        className={this.ParseImageFit()}
                        src={this.props.ImageSource}
                        alt={this.props.ImageAlt ?? ""}
                        width={this.props.ImageWidth ?? null}
                        height={this.props.ImageHeight ?? null}
                        layout={this.props.ImageLayout ?? null}
                    />
                </div>
            </BodyItem>
        );

    }

}