import React from "react";
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "@fortawesome/free-solid-svg-icons"
// import "@fortawesome/free-regular-svg-icons"
// import "@fortawesome/free-brands-svg-icons"



export default class HeaderButtonTemplate extends React.Component
{

    render()
    {

        return(
            <Link href={encodeURI(this.props.Href ?? "/")}>
                <div
                    className="relative inline-flex justify-center items-center box-border w-8 h-8 aspect-square bg-dark-charcoal rounded-full"
                >
                    <div
                        className="relative inline-flex justify-center items-center w-4 h-4 aspect-square text-smw text-gainsboro-600"
                    >
                        <FontAwesomeIcon icon={this.props.Icon}/>
                    </div>
                </div>
            </Link>
        );

    }

}