import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import ContentContainer from "../ContentContainer/ContentContainer";



export default class NavigationButton extends React.Component
{

    render()
    {

        return(
            <Link href={encodeURI(this.props.Href ?? "/")}>
                <div className="group">
                    <ContentContainer
                        className="px-4 py-2 shadow-md shadow-eerie-black active:shadow-sm"
                    >
                        <div
                            className="relative inline-block 
                                       text-lg md:text-xl lg:text-2xl xl:text-3xl"
                        >
                            {this.props.RenderTitle ? this.props.RenderTitle() : null}
                        </div>
                        <div
                            className="relative inline-block text-quick-silver any-hover:group-hover:text-gainsboro no-hover:text-gainsboro 
                                       text-xs md:text-base lg:text-lg xl:text-xl"
                        >
                            <span className="font-normal whitespace-pre">{this.props.Subtitle}</span>
                            <span className="relative w-fit h-fit aspect-square">
                                <FontAwesomeIcon icon={faArrowRight}/>
                            </span>
                        </div>  
                    </ContentContainer>
                </div>
            </Link>
        );

    }

}