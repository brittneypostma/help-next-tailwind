import React from "react";
import * as FontAwesomeIcons from "react-icons/fa"

import BodyItem from "../BodyItem/BodyItem";
import CustomIcon from "../CustomIcon/CustomIcon"



export default class ButtonItem extends React.Component
{

    ParseButtonWidth()
    {
        switch(this.props.Width)
        {
            case "fit-content":
                return "w-fit";
            case "full":
                return "w-full";
        }
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
        switch(this.props.IconSize)
        {
            case "xs":
                return "text-xs";
            case "sm":
                return "text-sm";
            case "base":
                return "text-base";
            case "lg":
                return "text-lg";
            case "xl":
                return "text-xl";
            case "2xl":
                return "text-2xl";
            case "3xl":
                return "text-3xl";
            case "4xl":
                return "text-4xl";
            case "5xl":
                return "text-5xl";
            case "6xl":
                return "text-6xl";
            case "7xl":
                return "text-7xl";
            case "8xl":
                return "text-8xl";
            case "9xl":
                return "text-9xl";
            default:
                return "text-base";
        }
    }

    PaseIconAspectRatio()
    {
        switch(this.props.IconAspectRatio)
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

    ParseTitleSize(size)
    {
        switch(size)
        {
            case "xs":
                return "text-xs";
            case "sm":
                return "text-sm";
            case "base":
                return "text-base";
            case "lg":
                return "text-lg";
            case "xl":
                return "text-xl";
            default:
                return "text-base";
        }
    }

    ParseTitleWeight(weight)
    {
        return "font-" + weight;
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
                    "relative flex items-center justify-center w-auto h-fit " +
                    (this.props.IconAlignment == "left" ? "mr-2 " : "ml-2 ") +
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
            >
                <div
                    className="relative w-full h-fit flex flex-row flex-nowrap items-center justify-center px-4 text-gainsboro"
                >   
                    {
                        this.props.IconAlignment == "left" ?
                        <>
                            {icon}
                            {title}
                        </>:
                        <>
                            {title}
                            {icon}
                        </>
                        
                    }
                </div>
            </BodyItem>
        );
    }

}