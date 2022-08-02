import React from "react";
import { faCode, faComment } from "@fortawesome/free-solid-svg-icons";

import ContentPageTemplate from "../../../components/ContentPageTemplate/ContentPageTemplate";
import { FetchProjectsContent } from "../../../CMS/projects";
import { projectDirectory } from "../../../CMS/config";



export default class ProjectPage extends React.Component
{

    render()
    {
        return(
            <ContentPageTemplate
                Page={{
                    Title:  this.props.Project?.Title ?? "Project",
                    Icon: this.props.Project?.Icon ?? faCode
                }}
                Header={{
                    LeftButton:{ Icon: faCode, Href: "/projects" },
                    RightButton:{ Icon: faComment, Href: "/contact" }
                }}
            >
            </ContentPageTemplate>
        );
    }

}



export async function getStaticPaths()
{
    const projects = FetchProjectsContent(projectDirectory).slice().sort((left, right)=>{ left.meta.priority < right.meta.priority});

    const paths = projects.map((project)=>
    {
        return({
                params: 
                {
                    year: encodeURIComponent(project.meta.year),
                    name: encodeURIComponent(project.meta.name)
                }
            });
    });

    return { paths, fallback: false };
}

export async function getStaticProps(context)
{
    return { props: {Project: {Title: context.params.name}}};
}