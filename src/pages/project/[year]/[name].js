import React from "react";
import { faCode, faComment } from "@fortawesome/free-solid-svg-icons";

import ContentPageTemplate from "../../../templates/ContentPageTemplate/ContentPageTemplate";
import Background from "../../../components/Background/Background";
import { FetchProjectsContent } from "../../../CMS/projects";
import { ParseContentItems, ParseContentItem } from "../../../CMS/content";
import { projectDirectory } from "../../../CMS/config";



export default class ProjectPage extends React.Component
{

    render()
    {
        return(
            <ContentPageTemplate
                Page={{
                    Title:  this.props.ProjectTitle ?? "Project",
                    Icon: this.props.ProjectIcon ?? faCode
                }}
                Header={{
                    LeftButton:{ Icon: faCode, Href: "/projects", Title: "Projects" },
                    RightButton:{ Icon: faComment, Href: "/contact", Title: "Contact"}
                }}
                RenderBackground=
                {
                    ()=>{
                        return(
                            <Background
                                BackgroundContent={this.props.ProjectBackground}
                            />
                        );
                    }
                }
            >
                { ParseContentItems(this.props.ProjectBody) }
            </ContentPageTemplate>
        );
    }

}



export async function getStaticPaths()
{
    const projects = FetchProjectsContent(projectDirectory);

    const paths = projects.map((project)=>
    {
        return({
                params: 
                {
                    year: encodeURIComponent(project.meta.year),
                    name: project.meta.name.replaceAll(' ', '-')
                }
            });
    });

    return { paths, fallback: false };
}

export async function getStaticProps(context)
{

    const projects = FetchProjectsContent(projectDirectory);
    let projectData = projects.find((value)=>
    {

        return (
            encodeURIComponent(value.meta.year) === context.params.year &&
            value.meta.name.replaceAll(' ', '-') === context.params.name );

    });

    return { props: 
    {
        ProjectTitle: projectData?.meta.name ?? null,
        ProjectBody:  projectData?.body ?? null,
        ProjectBackground: projectData?.background ?? null
    }};
}