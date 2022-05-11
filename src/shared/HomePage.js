import Link from "next/link";
import Head from "next/head";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLaptopCode, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { DecorationBar } from "../components/DecorationBar";
import { attributes, react as HomeContent } from '../content/home.md';



export default class HomePage extends React.Component
{

    render()
    {
        let titles = attributes.titles;

        return(
            <>

                <Head>
                    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
                </Head>

                <div id="HomePage" className="Page">
                    <DecorationBar/>
                    <div id="NavigationSection">
                        <Link href="/about">
                            <div id="About" className="NavigationPane">
                                <div className="Title">
                                    <div className="IconContainer">
                                        <FontAwesomeIcon icon={faUser} />
                                    </div>
                                    <div className="TextContainer">
                                        {titles.about}
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link href="/project">
                            <div id="Projects" className="NavigationPane">
                                <div className="Title">
                                    <div className="IconContainer">
                                        <FontAwesomeIcon icon={faLaptopCode} />
                                    </div>
                                    <div className="TextContainer">
                                        {titles.projects}
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link href="/contact">
                            <div id="Contact" className="NavigationPane">
                                <div className="Title">
                                    <div className="IconContainer">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </div>
                                    <div className="TextContainer">
                                        {titles.contact}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

            </>
        );
    }

}