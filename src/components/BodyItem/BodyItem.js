import React from "react";
import ContentContainer from "../ContentContainer/ContentContainer";



export default class BodyItem extends React.Component
{

    constructor(props)
    {
        super(props);
    }

    render()
    {

        return(
            <ContentContainer
                className={
                    "my-2 " + 
                    this.props.className}
            >
                <div
                    className="relative block w-full h-4 text-sm font-medium"
                >
                    <span
                        className="text-eucalyptus-700 whitespace-pre"
                    >{this.props.ItemType + " "}</span>
                    <span
                        className="text-base text-winter-wizard whitespace-pre"
                    >{this.props.ItemName}</span>
                    <span
                        className="text-eucalyptus-700 whitespace-pre"
                    > &#123;</span>
                </div>
                {this.props.children}
                <div
                    className="relative block w-full h-4 text-sm font-medium"
                >
                    <span
                        className="text-eucalyptus-700 whitespace-pre"
                    >&#125;</span>
                </div>
            </ContentContainer>
        );

    }

}