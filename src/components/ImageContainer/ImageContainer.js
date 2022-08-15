import React from "react";
import Image from "next/image";
import BodyItem from "../BodyItem/BodyItem";



export default class ImageContainer extends React.Component
{

    constructor(props)
    {
        super(props);
    }

    render()
    {

        return(
            <BodyItem
                ItemType="Image"
                ItemName={this.props.ImageName ?? null}
                TypeSize="text-xs"
                NameSize="text-xs"
                className={"relative block " + (this.props.className)}
            >
                <Image 
                    src={this.props.ImageSource}
                    alt={this.props.ImageAlt ?? ""}
                    width={this.props.ImageWidth}
                    height={this.props.ImageHeight}
                    layout={this.props.ImageLayout}
                />
            </BodyItem>
        );

    }

}