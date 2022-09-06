import React from "react";

import BodyItem from "../BodyItem/BodyItem";



export default class VideoItem extends React.Component
{

    ParseVideoFit()
    {
        switch(this.props.VideoFit)
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

    ParseVideoAspectRatio()
    {
        switch(this.props.VideoAspectRatio)
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
                ItemType="Video"
                ItemName={this.props.VideoName ?? null}
                TypeSize="text-2xs"
                NameSize="text-xs"
                OpenBracketInline
                FullItemContent
                TypeNameBackgrounds
            >
                <div
                    className={"relative block w-full " + this.ParseVideoAspectRatio() }
                >
                    <video
                        className={"relative block w-full h-full " + this.ParseVideoFit()}
                        src={this.props.VideoSource}
                        controls={this.props.VideoControls}
                        autoPlay={this.props.VideoAutoPlay}
                        muted={this.props.VideoMuted}
                        loop={this.props.VideoLooped}
                    />
                </div>
            </BodyItem>
        );


    }

}