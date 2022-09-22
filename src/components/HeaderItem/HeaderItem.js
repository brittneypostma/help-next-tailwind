import React from "react";

import BodyItem from "../BodyItem/BodyItem";
import { ParseTextSize, ParseTextAlignment, ParseFontWeight } from "../../CMS/content";



export default class HeaderItem extends React.Component
{

    constructor(props)
    {
        super(props);
    }

    ParseHeaderSize(size)
    {
        return ParseTextSize(size);
    }

    ParseHeaderAlignment(alignment)
    {
        return ParseTextAlignment(alignment);
    }

    ParseHeaderWeight(weight)
    {
        return ParseFontWeight(weight);
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
                                    "relative block w-full h-fit text-gainsboro px-4 md:px-5 lg:px-6 xl:px-7 py-1 " 
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