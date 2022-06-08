import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default class InlineFAIcon extends React.Component
{

    render()
    {
        return(
            <span 
                id={this.props.id}
                className="relative inline-block w-fit h-fit aspect-square"
            >
                <FontAwesomeIcon Icon={this.props.Icon}/>
            </span>
        );
    }

}