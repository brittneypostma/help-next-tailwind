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
                    className="relative inline-flex justify-center items-center box-border w-fit h-fit aspect-square lg:aspect-auto p-2.5 bg-dark-charcoal rounded-full
                                shadow-sm shadow-black active:shadow-none text-gainsboro-500"
                >
                    <div
                        className="relative inline-flex justify-center items-center w-fit h-fit aspect-square text-sm "
                    >
                        <FontAwesomeIcon icon={this.props.Icon} className="w-4 h-4 aspect-square"/>
                    </div>
                    {
                        this.props.Title ?
                        <span className="hidden lg:inline font-medium text-sm pl-2 pr-1">
                            {this.props.Title}
                        </span>:
                        null
                    }
                </div>
            </Link>
        );

    }

}