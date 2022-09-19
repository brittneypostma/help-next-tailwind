import React from "react";
import Script from "next/script"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCode, faComment, faFileAlt, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import PageTemplate from "../templates/PageTemplate/PageTemplate";
import NavigationButton from "../components/NavigationButton/NavigationButton";
import Background from "../components/Background/Background";
import { FetchPageContent } from "../CMS/pages";
import { ParseContentItem } from "../CMS/content";



export default class HomePage extends React.Component
{

    GetNavButtonTitle(Title, Icon)
    {

        return (<>
            <span className="text-eucalyptus font-medium whitespace-pre">page </span>
            <span className="text-cookies-and-cream font-bold whitespace-pre">{Title}</span>
            <span className="text-gainsboro font-bold whitespace-pre">(</span>
            <span className="relative w-fit h-fit aspect-square text-carolina-blue">
                <FontAwesomeIcon icon={Icon}/>
            </span>
            <span className="text-gainsboro font-bold whitespace-pre">);</span>
        </>);

    }

    render()
    {

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

        const AboutButtonTitle = this.GetNavButtonTitle("About", faUser);
        const ProjectsButtonTitle = this.GetNavButtonTitle("Projects", faCode);
        const ContactButtonTitle = this.GetNavButtonTitle("Contact", faComment);

        return(
            <>

                <Script>
                    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
                </Script>
            
                <PageTemplate
                    Header={{
                        RenderTitle: ()=>{ return Title; },
                        RenderSubtitle: ()=>{ return Subtitle; }
                    }}
                    RenderBackground=
                    {
                        this.props.PageBackground ?
                        ()=>{
                            return(
                                <Background
                                    BackgroundContent={this.props.PageBackground}
                                />
                            );
                        }:
                        null
                    }
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
                                <div className="text-gainsboro-800">&#123;</div>
                                <div>
                                    <span className="text-carolina-blue-700">public</span>
                                    <span className="text-gainsboro-800">:</span>
                                </div>
                            </div>
                            <div id="Navigation"
                                className="relative flex flex-col space-y-2 box-border w-max h-fit max-w-full max-h-full"
                            >
                                <NavigationButton
                                    RenderTitle={()=>{ return AboutButtonTitle; }}
                                    Subtitle="Go to function definition "
                                    Href="/about"
                                />
                                <NavigationButton
                                    RenderTitle={()=>{ return ProjectsButtonTitle; }}
                                    Subtitle="Go to function definition "
                                    Href="/projects"
                                />
                                <NavigationButton
                                    RenderTitle={()=>{ return ContactButtonTitle; }}
                                    Subtitle="Go to function definition "
                                    Href="/contact"
                                />
                            </div>
                            <div id="Content-Footer"
                                className="relative block mt-4"
                            >
                                <div className="text-gainsboro-800 font-medium">&#125;;</div>
                            </div>
                        </div>
                    </div>
                </PageTemplate>

            </>
        );
    }

}



export async function getStaticProps(context)
{

    const page = FetchPageContent("Home");
    
    return { props: {
        PageBackground: page?.background ?? null
    }};

}