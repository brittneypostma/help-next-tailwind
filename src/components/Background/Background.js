import React from "react";

export default class Background extends React.Component
{

    render()
    {
        return(
            <div className="relative flex flex-col items-center w-full h-full">
                {this.props.children}
            </div>)
    }

}