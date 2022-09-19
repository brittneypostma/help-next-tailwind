import React from "react";
import { faComment, faHome, faUser } from "@fortawesome/free-solid-svg-icons";

import ContentPageTemplate from "../templates/ContentPageTemplate/ContentPageTemplate";
import Background from "../components/Background/Background";
import { FetchPageContent } from "../CMS/pages";
import { ParseContentItems, ParseContentItem } from "../CMS/content";



export default class AboutPage extends React.Component
{

    render()
    {

        return(
            <ContentPageTemplate
                Page={{
                    Title: "About",
                    Icon: faUser
                }}
                Header={{
                    LeftButton:{ Icon: faHome, Href: "/home" },
                    RightButton:{ Icon: faComment, Href: "/contact" }
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
        PageBody: page?.body ?? null
    }};

}