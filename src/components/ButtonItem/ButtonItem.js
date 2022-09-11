import React from "react";
import * as FontAwesomeIcons from "react-icons/fa"

import BodyItem from "../BodyItem/BodyItem";
import CustomIcon from "../CustomIcon/CustomIcon"



export default class ButtonItem extends React.Component
{

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
                return(<CustomIcon IconName={this.props.IconName} IconColor={true} />);
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
            default:
                return "text-base";
        }
    }

    ParseTitleSize()
    {
        switch(this.props.TitleSize)
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

    ParseTitleWeight()
    {
        return "font-" + this.props.TitleWeight;
    }

    ParseTitleAlignment()
    {
        switch(this.props.TitleAlignment)
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

    render()
    {

        const icon =
            <div
                className=
                {
                    "relative flex items-center justify-center w-fit aspect-square mx-4 " +
                    this.ParseIconSize()
                }
            >
                {this.ParseIcon()}
            </div>;

        const title =
            <div
                className=
                {
                    "relative flex items-center w-full h-fit h-max-full text-gainsboro " +
                    this.ParseTitleSize() + " " + 
                    this.ParseTitleWeight() + " " + 
                    this.ParseTitleAlignment()
                }
            >
                {this.props.Title}
            </div>

        return (
            <BodyItem
                ItemType="Button"
                ItemName={this.props.ButtonName ?? null}
                TypeSize="text-2xs"
                NameSize="text-xs"
                OpenBracketInline
            >
                <div
                    className="relative flex flex-row flex-nowrap items-center justify-center"
                >   
                    {
                        this.props.IconAlignment == "left" ?
                        <>
                            {icon}
                            {title}
                        </> :
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