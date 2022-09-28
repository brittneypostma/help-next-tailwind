import React from "react";
import { faCode, faComment } from "@fortawesome/free-solid-svg-icons";

import { ParseContentItems } from "../../CMS/content";
import Background from "../../components/Background/Background";
import ContentPageTemplate from "../ContentPageTemplate/ContentPageTemplate"



export default class ProjectPagePreview extends React.Component
{

    render()
    {

        const entry = this.props.entry;

        console.log(entry.getIn(['data']));

        const Title = null;
        const ProjectIcon = null;
        const ProjectBackground = null;
        const ProjectBody = null;

        return(
            <ContentPageTemplate
                Page={{
                    Title:  Title ?? "Project",
                    Icon: ProjectIcon ?? faCode
                }}
                Header={{
                    LeftButton:{ Icon: faCode, Href: null, Title: "Projects" },
                    RightButton:{ Icon: faComment, Href: null, Title: "Contact"}
                }}
                RenderBackground=
                {
                    ()=>{
                        return(
                            <Background
                                BackgroundContent={ProjectBackground}
                            />
                        );
                    }
                }
            >
                { ParseContentItems(ProjectBody) }
            </ContentPageTemplate>
        );
    }

}