import React from "react";

import BodyItem from "../BodyItem/BodyItem";



export default class TextBlockItem extends React.Component
{

    ParseTextSize()
    {
        switch(this.props.TextSize)
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

    ParseTextAlignment()
    {
        return "text-" + this.props.TextAlignment;
    }

    ParseTextWeight()
    {
        return "font-" + this.props.TextWeight;
    }

    render()
    {
        
        let TextSize = this.ParseTextSize();
        let TextWeight = this.ParseTextWeight();
        let TextAlignment = this.ParseTextAlignment();

        return(
            <BodyItem
                ItemType="TextBlock"
                TypeSize="text-2xs"
                OpenBracketInline
            >
                <div className={
                    "relative block w-full h-fit text-gainsboro px-4 whitespace-pre-wrap "
                    + TextSize + " "
                    + TextWeight + " "
                    + TextAlignment}
                >
                    {this.props.children}
                </div>
            </BodyItem>
        );
    }

}