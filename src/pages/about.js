import React from "react";
import { faComment, faHome, faUser } from "@fortawesome/free-solid-svg-icons";

import ContentPageTemplate from "../templates/ContentPageTemplate/ContentPageTemplate";
import Background from "../components/Background/Background";
import { FetchPageContent } from "../CMS/pages";
import { ParseContentItems, ParseContentItem } from "../CMS/content";
import AvatarItem from "../components/AvatarItem/AvatarItem";



export default class AboutPage extends React.Component
{

    render()
    {

        const AvatarTypeName=
        <>
            <span className="text-cookies-and-cream font-medium whitespace-pre">Bas_Walhout</span>
            <span className="text-gainsboro font-medium whitespace-pre">()</span>
        </>;

        return(
            <ContentPageTemplate
                Page={{
                    Title: "About",
                    Icon: faUser
                }}
                Header={{
                    LeftButton:{ Icon: faHome, Href: "/home", Title: "Home" },
                    RightButton:{ Icon: faComment, Href: "/contact", Title: "Contact" }
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
                <AvatarItem
                    TypeSize={"text-2xs md:text-xs"}
                    ImageSource={this.props.AvatarSource}
                    ImageWidth={this.props.AvatarWidth}
                    IageHeight={this.props.AvatarHeight}
                    ImageLayout={this.props.AvatarLayout}
                    ImageFit={this.props.AvatarFit}
                    AvatarWidth={"w-3/5 md:w-1/2 2xl:w-2/5"}
                />
                { ParseContentItems(this.props.PageBody) }
            </ContentPageTemplate>
        )

    }

}



export async function getStaticProps(context)
{

    const page = FetchPageContent("About");
    
    return { props: {
        PageBackground: page?.background ?? null,
        AvatarSource: page?.avatar?.image?.image?.replace('/public/media', '/media') ?? null,
        AvatarWidth: page?.avatar?.image?.width ?? null,
        AvatarHeight: page?.avatar?.image?.height ?? null,
        AvatarLayout: page?.avatar?.image?.layout ?? null,
        AvatarFit: page?.avatar?.image?.fit ?? null,
        PageBody: page?.body ?? null
    }};

}