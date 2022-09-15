import React from "react";
import { faComment, faHome } from "@fortawesome/free-solid-svg-icons";

import ContentPageTemplate from "../templates/ContentPageTemplate/ContentPageTemplate";
import Background from "../components/Background/Background";
import { FetchPageContent } from "../CMS/pages";
import { ParseContentItem } from "../CMS/content";



export default class ContactPage extends React.Component
{

    render()
    {
        return(
            <ContentPageTemplate
                Page={{
                    Title: "Contact",
                    Icon: faComment
                }}
                Header={{
                    LeftButton:{ Icon: faHome, Href: "/home" }
                }}
                RenderBackground=
                {
                    this.props.PageBackground ?
                    ()=>{
                        return(
                            <Background>
                                {ParseContentItem(this.props.PageBackground, null, true)}
                            </Background>
                        );
                    }:
                    null
                }
            >

            </ContentPageTemplate>
        );
    }

}



export async function getStaticProps(context)
{

    const page = FetchPageContent("Contact");
    
    return { props: {
        PageBackground: page?.background ?? null
    }};

}