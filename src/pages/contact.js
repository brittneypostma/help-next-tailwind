import React from "react";
import { faComment, faHome } from "@fortawesome/free-solid-svg-icons";

import ContentPageTemplate from "../templates/ContentPageTemplate/ContentPageTemplate";



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
            >

            </ContentPageTemplate>
        );
    }

}