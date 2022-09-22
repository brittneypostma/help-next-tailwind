import React from "react";
import Script from "next/script"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCode, faComment } from "@fortawesome/free-solid-svg-icons";

import PageTemplate from "../templates/PageTemplate/PageTemplate";
import AvatarItem from "../components/AvatarItem/AvatarItem";
import NavigationButton from "../components/NavigationButton/NavigationButton";
import Background from "../components/Background/Background";
import { FetchPageContent } from "../CMS/pages";
import { stringify } from "postcss";



export default class HomePage extends React.Component
{

    GetNavButtonTitle(Title, Icon)
    {

        return (<>
            <span className="text-eucalyptus font-medium whitespace-pre">page </span>
            <span className="text-cookies-and-cream font-bold whitespace-pre">{Title}</span>
            <span className="text-gainsboro font-bold whitespace-pre">(</span>
            <span className="relative w-fit h-fit aspect-square text-carolina-blue md:px-0.5 lg:px-1">
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

        const AvatarTypeName=
        <>
            <span className="text-cookies-and-cream font-medium whitespace-pre">Bas_Walhout</span>
            <span className="text-gainsboro font-medium whitespace-pre">()</span>
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
                        className="relative flex justify-center items-center w-full h-full overflow-x-hidden overflow-y-auto"
                    >
                        <div
                            className="relative flex flex-col gap-y-6 box-border w-fit h-fit px-2"
                        >
                            <div id="Content-Header"
                                className="relative block font-medium"
                            >
                                <div className="text-gainsboro-800">{String.fromCodePoint(123)}</div>
                                <div>
                                    <span className="text-carolina-blue-700">public</span>
                                    <span className="text-gainsboro-800">:</span>
                                </div>
                            </div>
                            <AvatarItem
                                TypeName={AvatarTypeName}
                                TypeSize={"text-2xs md:text-xs lg:text-sm xl:text-base"}
                                BracketColor="text-gainsboro"
                                ImageSource={this.props.AvatarSource}
                                ImageWidth={this.props.AvatarWidth}
                                IageHeight={this.props.AvatarHeight}
                                ImageLayout={this.props.AvatarLayout}
                                ImageFit={this.props.AvatarFit}
                                ShowAssignment
                            />
                            <div id="Navigation"
                                className="relative flex flex-col box-border w-max h-fit max-w-full max-h-full
                                            gap-y-2 md:gap-y-2.5 lg:gap-y-3"
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
                                className="relative block"
                            >
                                <div className="text-gainsboro-800 font-medium">{String.fromCodePoint(125)};</div>
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
        PageBackground: page?.background ?? null,
        AvatarSource: page?.avatar?.image?.image?.replace('/public/media', '/media') ?? null,
        AvatarWidth: page?.avatar?.image?.width ?? null,
        AvatarHeight: page?.avatar?.image?.height ?? null,
        AvatarLayout: page?.avatar?.image?.layout ?? null,
        AvatarFit: page?.avatar?.image?.fit ?? null
    }};

}