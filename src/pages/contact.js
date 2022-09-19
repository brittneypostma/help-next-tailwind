import React from "react";
import { faComment, faHome } from "@fortawesome/free-solid-svg-icons";

import ContentPageTemplate from "../templates/ContentPageTemplate/ContentPageTemplate";
import Background from "../components/Background/Background";
import { FetchPageContent } from "../CMS/pages";
import { ParseContentItems, ParseContentItem } from "../CMS/content";



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
        );
    }

}



export async function getStaticProps(context)
{

    const page = FetchPageContent("Contact");
    
    return { props: {
        PageBackground: page?.background ?? null,
        PageBody: page?.body ?? null
    }};

}