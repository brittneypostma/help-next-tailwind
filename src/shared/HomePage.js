import React from "react";
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCode, faComment, faFileAlt, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import PageTemplate from "../components/PageTemplate/PageTemplate";
import { attributes } from '../content/home.md';



export default class HomePage extends React.Component
{

    render()
    {
        let titles = attributes.titles;

        const Title = 
        <>
            <span className="text-carolina-blue font-medium whitespace-pre">class </span>
            <span className="text-eucalyptus font-bold whitespace-pre">Bas_Walhout</span>
        </>;
        const Subtitle=
        <>
            <span className="text-gainsboro font-medium whitespace-pre">: </span>
            <span className="text-carolina-blue font-medium whitespace-pre">public </span>
            <span className="text-eucalyptus font-bold whitespace-pre">GraphicsProgrammer</span>
        </>;

        return(
            <>
            
                <PageTemplate
                    Header={{
                        RenderTitle: ()=>{ return Title; },
                        RenderSubtitle: ()=>{ return Subtitle; }
                    }}
                >
                    <div
                        className="relative flex justify-center items-center w-full h-full overflow-hidden"
                    >
                        <div
                            className="relative block box-border w-fit h-fit px-2"
                        >
                            <div id="Content-Header"
                                className="relative block mb-4 font-medium"
                            >
                                <div className="text-gainsboro">&#123;</div>
                                <div>
                                    <span className="text-carolina-blue">public</span>
                                    <span className="text-gainsboro">:</span>
                                </div>
                            </div>
                            <div id="Navigation"
                                className="relative flex flex-col space-y-2 box-border w-max h-fit max-w-full max-h-full"
                            >
                                <NavigationButton
                                    Title={"About"}
                                    Icon={faUser}
                                    Href={"/about"}
                                />
                                <NavigationButton
                                    Title={"Projects"}
                                    Icon={faCode}
                                    Href={"/projects"}
                                />
                                <NavigationButton
                                    Title={"Contact"}
                                    Icon={faComment}
                                    Href={"/contact"}
                                />
                            </div>
                            <div id="Content-Footer"
                                className="relative block mt-4"
                            >
                                <div className="text-gainsboro font-medium">&#125;;</div>
                            </div>
                        </div>
                    </div>
                </PageTemplate>

            </>
        );
    }

}



class NavigationButton extends React.Component
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
                        <span className="text-eucalyptus font-medium whitespace-pre">page </span>
                        <span className="text-cookies-and-cream font-bold whitespace-pre">{this.props.Title}</span>
                        <span className="text-gainsboro font-bold whitespace-pre">(</span>
                        <span className="relative w-fit h-fit aspect-square text-carolina-blue">
                            <FontAwesomeIcon icon={this.props.Icon ?? faFileAlt}/>
                        </span>
                        <span className="text-gainsboro font-bold whitespace-pre">);</span>
                    </div>
                    <div
                        className="relative inline-block text-quick-silver any-hover:group-hover:text-gainsboro no-hover:text-gainsboro  text-xs"
                    >
                        <span className="font-normal whitespace-pre">Go to function definition </span>
                        <span className="relative w-fit h-fit aspect-square">
                            <FontAwesomeIcon icon={faArrowRight}/>
                        </span>
                    </div>  
                </div>
            </Link>
        );

    }

}