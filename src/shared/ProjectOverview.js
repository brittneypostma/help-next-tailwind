import React from "react";
import { faCode, faHome, faComment } from "@fortawesome/free-solid-svg-icons";

import ContentPageTemplate from "../templates/ContentPageTemplate/ContentPageTemplate";
import BodySection from "../components/BodySection/BodySection";
import ProjectNavigationButton from "../templates/ProjectNavigationButton/ProjectNavigationButton";



export default class ProjectOverviewPage extends React.Component
{

    constructor(props)
    {
        super(props)

        this.state =
        {
            ShowAll : true
        };
    }

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
                    <BodySection
                        SectionName="Featured_Projects"
                        TypeSize="text-sm"
                        NameSize="text-base"
                    >
                        <ProjectNavigationButton
                            ProjectName="Test_Project"
                        />
                    </BodySection>
                    <BodySection
                        SectionName="Other_Projects"
                        TypeSize="text-sm"
                        NameSize="text-base"
                        Collapsible={true}
                        StartCollapsed={true}
                    >
                        {
                            this.state.ShowAll ? 
                            null :
                            null
                        }
                    </BodySection>
                </ContentPageTemplate>
        );
    }

}