import React from "react";
import Image from "next/image";

import BodyItem from "../BodyItem/BodyItem";



export default class AvatarItem extends React.Component
{

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

    render()
    {
        return(
            <BodyItem
                ItemType={this.props.TypeName ?? "Avatar"}
                TypeSize={this.props.TypeSize ?? "text-2xs"}
                BracketColor={this.props.BracketColor ?? null}
            >
                <div className="relative flex flex-col items-center justify-center w-full h-fit px-4 text-xs md:text-sm">
                    {
                        this.props.ShowAssignment ?
                        <div className="relative block w-full h-fit px-2">
                            <span className="text-carolina-blue whitespace-pre">this</span>
                            <span className="text-gainsboro whitespace-pre">-{String.fromCodePoint(62)}</span>
                            <span className="text-cookies-and-cream whitespace-pre">avatar</span>
                            <span className="text-gainsboro whitespace-pre">=</span>
                        </div>:
                        null
                    }
                    <div 
                        className=
                        {
                            "relative flex aspect-square rounded-full overflow-hidden border-4 border-black-olive shadow-md shadow-black " +
                            (this.props.AvatarWidth ?? "w-full") + " " +
                            (this.props.AvatarHeight ?? "") 
                        }
                    >
                        {   
                            this.props.ImageSource ?
                            <Image
                                className={this.ParseImageFit()}
                                src={this.props.ImageSource ?? null}
                                alt={this.props.ImageAlt ?? ""}
                                width={this.props.ImageWidth ?? null}
                                height={this.props.ImageHeight ?? null}         
                                layout={this.props.ImageLayout ?? null}
                            />:
                            null
                        }
                    </div>
                </div>
            </BodyItem>
        );
    }

}