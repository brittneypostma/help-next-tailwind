import React from "react";
import { faCode, faHome, faComment } from "@fortawesome/free-solid-svg-icons";

import ContentPageTemplate from "../components/ContentPageTemplate/ContentPageTemplate";



export default class ProjectOverviewPage extends React.Component
{

    render()
    {
        return(
            <ContentPageTemplate
                Page={{
                    Title: "Projects",
                    Icon: faCode
                }}
                Header={{
                    LeftButton:{ Icon: faHome, Href: "/home" },
                    RightButton:{ Icon: faComment, Href: "/contact" }
                }}
            >
            </ContentPageTemplate>
        );
    }

}