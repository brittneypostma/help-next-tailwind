import React from "react";
import { faCode, faHome, faComment } from "@fortawesome/free-solid-svg-icons";

import ContentPageTemplate from "../../templates/ContentPageTemplate/ContentPageTemplate";
import BodySection from "../../components/BodySection/BodySection";
import ProjectNavigationButton from "../../templates/ProjectButtonTemplate/ProjectButtonTemplate";
import { FetchProjectsContent } from "../../CMS/projects";
import { projectDirectory } from "../../CMS/config";



export default class ProjectOverviewPage extends React.Component
{

    constructor(props)
    {
        super(props)

        this.state =
        {
            ShowAll : false
        };
    }

    render()
    {

        console.log(this.props);
        
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
                        <div
                            className="relative flex flex-col gap-y-4 w-full h-fit"
                        >
                            {
                                this.props.FeaturedProjects.length > 0  ?
                                this.props.FeaturedProjects.map((project, index)=>
                                {
                                    return(
                                    <ProjectNavigationButton
                                        ProjectHref={project.path}
                                        ProjectName={project.name}
                                        ProjectThumbnail={project.thumbnail}
                                        ProjectDescription={project.description}
                                        ProjectDetails={project.details}
                                        key={index}
                                    />);
                                }):
                                null
                            }
                        </div>
                    </BodySection>
                    {
                        this.props.OtherProjects.length > 0 ?
                        <BodySection
                            SectionName="Other_Projects"
                            TypeSize="text-sm"
                            NameSize="text-base"
                            Collapsible={true}
                            StartCollapsed={!this.state.ShowAll}
                            LastSection={true}
                        >
                            <div
                                className="relative flex flex-col gap-y-4 w-full h-fit"
                            >
                                {
                                    this.state.ShowAll ? 
                                    this.props.OtherProjects.map((project, index)=>
                                    {
                                        return (
                                        <ProjectNavigationButton
                                            ProjectHref={project.path}
                                            ProjectName={project.name}
                                            ProjectThumbnail={project.thumbnail}
                                            ProjectDescription={project.description}
                                            ProjectDetails={project.details}
                                            key={index}
                                        />);
                                    }):
                                    null
                                }
                            </div>
                        </BodySection>:
                        null
                    }
                </ContentPageTemplate>
        );
    }

}



function extractProjectData(project)
{
    const projectData = 
    {
        path: ("project/" + encodeURIComponent(project.meta.year) + "/" + encodeURIComponent(project.meta.name)),
        name: (project.meta.name ?? null),
        thumbnail: (project.thumbnail ?? null),
        description: (project.description ?? null),
        details: (project.details ?? null)
    };

    return projectData;
}

export async function getStaticProps(context)
{

    const projects = FetchProjectsContent(projectDirectory);

    const featuredProjects = new Array();
    projects.forEach((project)=>
    {
        if(project.meta.category == "Featured"){ featuredProjects.push(extractProjectData(project)); }
    })

    const otherProjects = new Array();
    projects.forEach((project)=>
    {
        if(project.meta.category != "Featured"){ otherProjects.push(extractProjectData(project)); }
    });

    return { props: {FeaturedProjects: featuredProjects, OtherProjects: otherProjects}};
}