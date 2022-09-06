import React from "react";

import BodyItem from "../BodyItem/BodyItem";



export default class HeaderItem extends React.Component
{

    constructor(props)
    {
        super(props);
    }

    ParseHeaderSize()
    {
        switch(this.props.HeaderSize)
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

    ParseHeaderAlignment()
    {
        return "text-" + this.props.HeaderAlignment;
    }

    ParseHeaderWeight()
    {
        return "font-" + this.props.HeaderWeight;
    }

    render()
    {
        let TextSize = this.ParseHeaderSize();
        let TextWeight = this.ParseHeaderWeight();
        let TextAlignment = this.ParseHeaderAlignment();

        return(
            <BodyItem
                ItemType="Header"
                TypeSize="text-2xs"
                OpenBracketInline
            >
                <div
                    className={
                        "relative block w-full h-fit text-gainsboro " 
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