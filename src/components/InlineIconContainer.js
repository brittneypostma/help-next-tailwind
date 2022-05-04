import React from "react";



export class InlineIconContainer extends React.Component
{

    render()
    {
        return(
            <div 
                id={this.props.id}
                className=
                {
                    "InlineIconContainer" +
                    (this.props.ClassName ? " " + this.props.ClassName : "")
                }
            >
                {this.props.children}
            </div>
        );
    }

}