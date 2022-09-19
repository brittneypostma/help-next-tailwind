import React from "react";
import Link from "next/link";


export default class ContentContainer extends React.Component
{

    constructor(props)
    {
        super(props);
    }

    render()
    {

        return(

            this.props.IsLink ?
            <Link
                href={this.props.HRef ?? "/"}
            >
                <div
                    className={"relative flex flex-col box-border overflow-hidden bg-eerie-black rounded-lg " + (this.props.className ?? "")}
                >
                    {this.props.children}
                </div>
            </Link>:
            this.props.HRef ?
            <a
                className={"relative flex flex-col box-border overflow-hidden bg-eerie-black rounded-lg " + (this.props.className ?? "")}
                href={this.props.HRef ?? null}
                download={this.props.Download ?? null}
            >
                {this.props.children}
            </a>:
            <div
                className={"relative flex flex-col box-border overflow-hidden bg-eerie-black rounded-lg " + (this.props.className ?? "")}
            >
                {this.props.children}
            </div>
        )

    }

}