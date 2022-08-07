import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFileAlt, faArrowRight } from "@fortawesome/free-solid-svg-icons";



export default class NavigationButton extends React.Component
{

    render()
    {

        return(
            <Link href={encodeURI(this.props.Href ?? "/")}>
                <div
                    className="group relative flex flex-col box-border w-full h-fit px-4 py-2 bg-eerie-black rounded-lg"
                >
                    <div
                        className="relative inline-block text-lg"
                    >
                        {this.props.RenderTitle ? this.props.RenderTitle() : null}
                    </div>
                    <div
                        className="relative inline-block text-quick-silver any-hover:group-hover:text-gainsboro no-hover:text-gainsboro  text-xs"
                    >
                        <span className="font-normal whitespace-pre">{this.props.Subtitle}</span>
                        <span className="relative w-fit h-fit aspect-square">
                            <FontAwesomeIcon icon={faArrowRight}/>
                        </span>
                    </div>  
                </div>
            </Link>
        );

    }

}