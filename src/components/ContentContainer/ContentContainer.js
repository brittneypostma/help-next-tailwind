import React from "react";


export default class ContentContainer extends React.Component
{

    constructor(props)
    {
        super(props);
    }

    render()
    {

        return(
            <div
                className={"relative flex flex-col box-border w-full h-fit overflow-hidden bg-eerie-black rounded-lg " + (this.props.className ?? "")}
            >
                {this.props.children}
            </div>
        )

    }

}