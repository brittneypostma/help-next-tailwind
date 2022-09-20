import React from "react";

import BodyItem from "../BodyItem/BodyItem";



export default class HeaderItem extends React.Component
{

    constructor(props)
    {
        super(props);
    }

    ParseHeaderSize(size)
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

    ParseHeaderAlignment(alignment)
    {
        return "text-" + alignment;
    }

    ParseHeaderWeight(weight)
    {
        return "font-" + weight;
    }

    render()
    {

        return(
            <BodyItem
                ItemType="Header"
                TypeSize="text-2xs"
                OpenBracketInline
            >
                {
                    this.props.HeaderContent?.map?.((contentDesc, index)=>
                    {

                        let textSize = this.ParseHeaderSize(contentDesc.line.size);
                        let textWeight = this.ParseHeaderWeight(contentDesc.line.weight);
                        let textAlignment = this.ParseHeaderAlignment(contentDesc.line.alignment);
                        
                        return(
                            <div
                                className={
                                    "relative block w-full h-fit text-gainsboro " 
                                    + textSize + " "
                                    + textWeight + " "
                                    + textAlignment}
                                key={index}
                            >
                                {contentDesc.line.content}
                            </div>
                        );
                    })
                }
            </BodyItem>
        );

    }

}