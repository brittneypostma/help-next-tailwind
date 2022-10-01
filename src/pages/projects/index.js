import React from "react";
import { faCode, faHome, faComment } from "@fortawesome/free-solid-svg-icons";

import ContentPageTemplate from "../../templates/ContentPageTemplate/ContentPageTemplate";
import Background from "../../components/Background/Background";
import BodySection from "../../components/BodySection/BodySection";
import ProjectNavigationButton from "../../templates/ProjectButtonTemplate/ProjectButtonTemplate";
import { FetchPageContent } from "../../CMS/pages";
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

    SetShowAll(newState)
    {
        if(this.state.ShowAll != newState){ this.setState({ShowAll: newState}); }
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
                        LeftButton:{ Icon: faHome, Href: "/home", Title: "Home" },
                        RightButton:{ Icon: faComment, Href: "/contact", Title: "Contact" }
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
                    <BodySection
                        SectionName="Featured_Projects"
                        TypeSize="text-sm md:text-base lg:text-lg xl:text-xl"
                        NameSize="text-base md:text-lg lg:text-xl xl:text-2xl"
                        OpenBracketInline
                        LastSection={this.props.OtherProjects.length == 0}
                    >
                        <div
                            className="relative flex flex-col 
                                       w-full h-fit box-border
                                       gap-y-2 sm:gap-y-4 md:gap-y-5 lg:gap-y-6 xl:gap-y-7 2xl:gap-y-8
                                       px-2 sm:px-4 md:px-5 lg:px-6 xl:px-8 2xl:px-10
                                       py-3 sm:py-4 md:py-5 lg:py-6 xl:py-8 2xl:py-10"
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
                            OpenBracketInline
                            Collapsible={true}
                            StartCollapsed={!this.state.ShowAll}
                            OnCollapse={this.SetShowAll.bind(this, false)}
                            OnExpand={this.SetShowAll.bind(this, true)}
                            LastSection={true}
                        >
                            <div
                                className="relative flex flex-col 
                                           gap-y-2 sm:gap-y-4 md:gap-y-5 lg:gap-y-6
                                           w-full h-fit
                                           px-2 sm:px-3 md:px-4 lg:px-5
                                           py-3 sm:py-4 md:py-5 lg:py-6"
                            >
                                {
                                    this.state.ShowAll ? 
                                    this.props.OtherProjects.map((project, index)=>
                                    {
                                        return (
                                        <ProjectNavigationButton
                                            Inactive={project.category == "planned" ? true : false}
                                            IsPlanned={project.category == "planned" ? true : false}
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
        path: ("project/" + encodeURIComponent(project.meta.year) + "/" + project.meta.name.replaceAll(' ','-')),
        name: (project.meta.name ?? null),
        thumbnail: (project.thumbnail ?? null),
        description: (project.description ?? null),
        details: (project.details ?? null),
        category: (project.meta.category ?? null)
    };

    return projectData;
}

export async function getStaticProps(context)
{

    
    const projects = FetchProjectsContent(projectDirectory);
    const page = FetchPageContent("Projects");

    const featuredProjects = new Array();
    projects.forEach((project)=>
    {
        if(project.meta.category == "featured"){ featuredProjects.push(extractProjectData(project)); }
    })

    const otherProjects = new Array();
    projects.forEach((project)=>
    {
        if(project.meta.category != "featured"){ otherProjects.push(extractProjectData(project)); }
    });

    return { props: {
        FeaturedProjects: featuredProjects, 
        OtherProjects: otherProjects,
        PageBackground: page?.background ?? null
    }};
}