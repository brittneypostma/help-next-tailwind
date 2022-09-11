import React from "react";

import Icons from "./Icons"


export default class CustomIcon extends React.Component
{

    render()
    {
        return(
            <div 
                className=
                {
                    "relative flex items-center justify-center " +
                    (this.props.IconColor ? "IconColor" : "") 
                }
            >
                {Icons[this.props.IconName]}
            </div>
        );
    }

}