import React from "react";
import * as FontAwesomeIcons from "react-icons/fa"

import BodyItem from "../BodyItem/BodyItem";
import CustomIcon from "../CustomIcon/CustomIcon"
import { ParseWidth, ParseTextSize, ParseAspectRatio, ParseFontWeight } from "../../CMS/content";



export default class ButtonItem extends React.Component
{

    ParseButtonWidth()
    {
        return ParseWidth(this.props.Width);
    }
    
    ParseIcon()
    {
        switch(this.props.IconType)
        {
            case "none":
                return null;
            case "fontawesome":
                if(FontAwesomeIcons[this.props.IconName])
                {
                    return(
                        <div>
                            {React.createElement(FontAwesomeIcons[this.props.IconName])}
                        </div>
                    );
                }
            case "custom":
                return(<CustomIcon IconName={this.props.IconName} IconColor={this.props.IconColor == "icon"} />);
            default:
                return null;
        }
    }

    ParseIconSize()
    {
        return ParseTextSize(this.props.IconSize);
    }

    PaseIconAspectRatio()
    {
        return ParseAspectRatio(this.props.IconAspectRatio);
    }

    ParseTitleSize(size)
    {
        return ParseTextSize(size);
    }

    ParseTitleWeight(weight)
    {
        return ParseFontWeight(weight);
    }

    ParseTitleAlignment(alignment)
    {
        switch(alignment)
        {
            case "left":
                return "justify-start text-left";
            case "right":
                return "justify-end text-right";
            case "center":
                return "justify-center text-center";
            case "justify":
                return "justify-evenly text-justify"
        }
    }

    ParseActionHRef()
    {
        switch(this.props.ActionData.type)
        {
            case "download":
                return this.props.ActionData.target;
            case "redirect":
                return this.props.ActionData.target;
        }
    }

    IsLocalRedirect()
    {
        return (this.props.ActionData.type == "redirect" && this.props.ActionData.target.startsWith('/'));
    }

    render()
    {

        const icon =
            <div
                className=
                {
                    "grow-0 shrink-0 relative flex items-center justify-center w-auto h-fit my-1 " +
                    (   this.props.IconAttached ? 
                        "" : 
                        this.props.IconAlignment == "left" ? 
                        "mr-4 md:mr-5 lg:mr-6 xl:mr-7 " :
                        "ml-4 md:ml-5 lg:ml-6 xl:ml-7 ") +
                    this.PaseIconAspectRatio() + " " + 
                    this.ParseIconSize()
                }
            >
                {this.ParseIcon()}
            </div>;

        const title =
            <div
                className=
                {
                    (this.props.IconAttached ? "w-fit " : "w-full ") +
                    "relative flex flex-col items-center h-fit w-max-full h-max-full " 
                }
            >
                {this.props.TitleContent?.map((contentDesc, index)=>
                {
                    return(
                        <div
                            className=
                            {
                                "relative flex items-center w-full h-fit " +
                                "decoration-from-font no-hover:underline group-hover:underline " +
                                this.ParseTitleSize(contentDesc.line.size) + " " + 
                                this.ParseTitleWeight(contentDesc.line.weight) + " " + 
                                this.ParseTitleAlignment(contentDesc.line.alignment)
                            }
                            key={index}
                        >
                            {contentDesc.line.content}
                        </div>);
                })}
            </div>

        const localRedirect = this.IsLocalRedirect();
        const actionHRef = this.ParseActionHRef();
        const downloadPath = this.props.ActionData.type == "download" ? actionHRef.slice(actionHRef.lastIndexOf('/') +1) : null;

        return (
            <BodyItem
                ItemType="Button"
                ItemName={this.props.ButtonName ?? null}
                TypeSize="text-2xs"
                NameSize="text-xs"
                Width={this.ParseButtonWidth()}
                OpenBracketInline
                IsGroup
                HRef={actionHRef}
                LocalHRef={localRedirect}
                Download={downloadPath}
                Styles={"shadow-md shadow-black active:shadow"}
            >
                <div
                    className=
                    {
                        "relative w-full h-fit flex flex-nowrap items-center justify-center text-gainsboro " +
                        "px-4 md:px-5 lg:px-6 xl:px-7 " +
                        (this.props.IconAttached? "gap-x-2 md:gap-x-3 lg:gap-x-4 xl:gap-x-5 " : "") +
                        (this.props.IconAlignment == "left" ? "flex-row" : "flex-row-reverse")
                    }
                >   
                    {icon}
                    {title}
                </div>
            </BodyItem>
        );
    }

}