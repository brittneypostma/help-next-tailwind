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

    IsExternalSource()
    {
        const RegexMatch = this.props.VideoSource.match(RegExp("https:\\/\\/www\\.youtube\\.com\\/embed\\/.+"));
        return (RegexMatch != null);
    }

    render()
    {

        return(
            <BodyItem
                ItemType="Video"
                ItemName={(this.props.VideoName ?? null)}
                TypeSize="text-2xs"
                NameSize="text-xs"
                OpenBracketInline
                FullItemContent
                TypeNameBackgrounds
                NoTypeNames={this.props.BackgroundItem}
                Width={this.props.BackgroundItem ? "w-full" : null}
                Height={this.props.BackgroundItem ? "h-full" : null}
                AspectRatio={this.props.BackgroundItem ? this.ParseVideoAspectRatio() : null}
                Styles={this.props.BackgroundItem ? "rounded-none" : "my-1 sm:my-1.5"}
            >
                <div
                    className={"relative block w-full " + this.ParseVideoAspectRatio() }
                >
                    {
                        this.props.VideoSource ?
                            (this.IsExternalSource() ?
                            <iframe 
                                width="100%" 
                                height="100%"
                                src={this.props.VideoSource}
                                title={this.props.VideoTitle ?? "Video"}
                                frameBorder="0" 
                                allow=
                                {
                                    "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture " + 
                                    (this.props.VideoAutoPlay ? "autoplay; " : "")
                                }
                                allowFullScreen 
                            />:
                            <video
                                className={"relative block w-full h-full " + this.ParseVideoFit()}
                                src={this.props.VideoSource}
                                controls={this.props.VideoControls}
                                autoPlay={this.props.VideoAutoPlay}
                                muted={this.props.VideoMuted}
                                loop={this.props.VideoLooped}
                            />):
                            null
                    }
                </div>
            </BodyItem>
        );

    }

}