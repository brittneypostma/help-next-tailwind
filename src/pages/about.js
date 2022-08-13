import React from "react";
import { faComment, faHome, faUser } from "@fortawesome/free-solid-svg-icons";

import ContentPageTemplate from "../templates/ContentPageTemplate/ContentPageTemplate";



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
            >

            </ContentPageTemplate>
        )

    }

}