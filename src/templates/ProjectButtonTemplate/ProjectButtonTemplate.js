import React from "react";
import Image from "next/image"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye, faClock, faLanguage, faScrewdriverWrench, faTags, faUsers, faUserTag, faCircleArrowRight, faHourglassHalf} from "@fortawesome/free-solid-svg-icons";

import ContentContainer from "../../components/ContentContainer/ContentContainer"
import { ParseContentItem } from "../../CMS/content"

let detailNames = new Map();
detailNames.set("type", "Project Type");
detailNames.set('duration', "Project Duration");
detailNames.set('goals', "Project Goals");
detailNames.set('teamSize', "Team Size");
detailNames.set('roles', "Roles");
detailNames.set('tech', "Tech & Tools");
detailNames.set('languages', "Languages, Libraries, Frameworks & APIs")

let detailIcons = new Map();
detailIcons.set("type", faTags);
detailIcons.set('duration', faClock);
detailIcons.set('goals', faBullseye);
detailIcons.set('teamSize', faUsers);
detailIcons.set('roles', faUserTag);
detailIcons.set('tech', faScrewdriverWrench);
detailIcons.set('languages', faLanguage);



export default class ProjectNavigationButton extends React.Component
{

    constructor(props)
    {
        super(props);
    }

    render()
    {

        let TypeSize = "text-xs md:text-sm lg:text-base xl:text-lg";
        let NameSize = "text-sm md:text-base lg:text-lg xl:text-xl";
        let TitleSize = "text-sm md:text-base lg:text-lg xl:text-xl";

        const ButtonContents =
            <div>
                <ContentContainer
                    className="pt-2 shadow-lg shadow-eerie-black active:shadow group"
                    
                >
                    <div className="relative flex items-center w-full h-fit px-2 py-1 mb-2 leading-none align-middle font-medium">
                        <div className="relative inline-flex items-center w-full h-full">
                            <span 
                                className={"text-eucalyptus-700 whitespace-pre leading-none align-middle " + (TypeSize ?? "")}
                            >
                                {"Project "}
                            </span>
                            <span 
                                className={"text-winter-wizard whitespace-pre leading-none align-middle " + (NameSize ?? "")}
                            >
                                {this.props.ProjectName}
                            </span>
                        </div>
                        <div className="relative inline-flex items-center w-fit h-full text-gainsboro text-sm md:text-base">
                            <span className="hidden sm:inline whitespace-pre no-hover:underline group-hover:underline">
                                {"view project page "}
                            </span>
                            <FontAwesomeIcon icon={faCircleArrowRight} className="text-base"/>
                        </div>
                    </div>
                    <div
                        className="relative block w-full h-auto aspect-4/3 overflow-hidden"
                    >
                        <div
                            className="absolute block w-full h-full aspect-4/3 blur-xxs"
                        >
                            {ParseContentItem(this.props.ProjectThumbnail, null, true)}
                        </div>
                        
                        <div
                            className="relative flex flex-col w-full h-full overflow-x-hidden overflow-y-auto bg-dark-charcoal/85
                                        scrollbar-thin scrollbar-track-gainsboro scrollbar-thumb-black-olive 
                                        scrollbar-track-rounded-full scrollbar-thumb-rounded-full"
                        >

                            <div className="relative block w-full h-4 px-2 mb-1 leading-none align-middle font-medium">
                                <span 
                                    className={"text-eucalyptus-700 whitespace-pre " + (TypeSize ?? "")}
                                >
                                    {String.fromCodePoint(123)}
                                </span>
                            </div>
                            
                            <div
                                className="relative block w-full h-fit 
                                            px-2 md:px-3 lg:px-4 xl:px-5
                                            text-sm md:text-base xl:text-lg text-gainsboro"
                            >
                                {
                                    this.props.IsPlanned ?
                                    <div className="relative flex w-full h-fit items-center justify-center">
                                        <div 
                                            className="relative block w-fit h-fit px-2 sm:px-4 py-1 sm:py-2 md:py-3 lg:py-4 rounded-lg bg-eerie-black/70
                                                       text-xl sm:text-2xl md:text-3xl font-black"
                                        >
                                            <span>Coming Soon </span>
                                            <FontAwesomeIcon icon={faHourglassHalf}/>
                                        </div>
                                    </div>:
                                    null
                                }
                                {
                                    this.props.ProjectDescription ?
                                    <div className="px-2">
                                        <div className="relative block w-full h-fit mb-3 leading-normal align-middle font-medium">
                                            <span className={"text-eucalyptus-700 whitespace-pre " + (TitleSize ?? "")}>
                                                {"Description" + String.fromCodePoint(123)}
                                            </span>
                                        </div>
                                        <div className="px-2 sm:px-4 py-1 sm:py-2 md:py-3 lg:py-4 rounded-lg bg-eerie-black/70 whitespace-pre-wrap">
                                            {this.props.ProjectDescription}
                                        </div>
                                        <div className="relative block w-full h-fit mt-2 mb-2 leading-normal align-middle font-medium">
                                            <span className={"text-eucalyptus-700 whitespace-pre " + (TitleSize ?? "")}>
                                                {String.fromCodePoint(125)}
                                            </span>
                                            {
                                                this.props.ProjectDetails ? 
                                                <span className="text-gainsboro whitespace-pre">,</span> : 
                                                null
                                            }
                                        </div>
                                    </div>:
                                    null
                                }
                                {
                                    this.props.ProjectDetails ?
                                    <div
                                        className="relative flex flex-col px-2"
                                    >
                                        <div className="relative block w-full h-fit mb-3 leading-normal align-middle font-medium">
                                            <span className={"text-eucalyptus-700 whitespace-pre " + (TitleSize ?? "")}>
                                                {"Details" + String.fromCodePoint(123)}
                                            </span>
                                        </div>
                                        <div className="relative flex flex-col w-fit gap-y-1 sm:gap-y-2">
                                            {
                                                Object.entries(this.props.ProjectDetails).map(([detailName, detailValue], index)=>{

                                                    let name = detailNames.get(detailName);
                                                    let icon = detailIcons.get(detailName);


                                                    if(name && icon && detailValue && !detailValue?.empty?.() != null)
                                                    {

                                                        return(
                                                        <ProjectDetail
                                                            DetailIcon={icon}
                                                            DetailName={name}
                                                            key={index}
                                                        >
                                                            {detailValue}
                                                        </ProjectDetail>);
                                                    }
                                                    return null;
                                                })
                                            }
                                        </div>
                                        <div className="relative block w-full h-fit mt-2 leading-normal align-middle font-medium">
                                            <span className={"text-eucalyptus-700 whitespace-pre " + (TitleSize ?? "")}>
                                                {String.fromCodePoint(125)}
                                            </span>
                                        </div>
                                    </div>:
                                    null
                                }
                            </div>

                            <div className="relative block w-full h-fit px-2 mb-1 leading-none align-middle font-medium">
                                <span 
                                    className={"row-start-1 col-start-1 w-fit h-full text-eucalyptus-700 whitespace-pre " + (TypeSize ?? "")}
                                >
                                    {String.fromCodePoint(125)}
                                </span>
                            </div>

                        </div>

                    </div>
                </ContentContainer>
            </div>;

        return(
            !this.props.Inactive ?
                <Link href={encodeURI(this.props.ProjectHref ?? "projects/")}>
                    {ButtonContents}
                </Link>:
                ButtonContents     
        );

    }

}



class ProjectDetail extends React.Component
{

    render()
    {

        return(
            <div className="relative block w-fit h-fit px-2 sm:px-4 py-1 sm:py-2 md:py-3 rounded-lg bg-eerie-black/70">
                <div>
                    <div 
                        className="relative inline-block aspect-square
                                w-4 lg:w-5 xl:w-6 
                                h-4 lg:h-5 xl:h-6 
                                text-base lg:text-xl xl:text-2xl"
                    >
                        {
                            this.props.DetailIcon ?
                            <FontAwesomeIcon icon={this.props.DetailIcon} className="w-fit h-fit aspect-square"/> :
                            null
                        }
                    </div>
                    <span className="font-bold whitespace-pre-wrap">{" " + this.props.DetailName + ":"}</span>
                </div>
                <div 
                    className="relative block w-fit h-auto w-max-full leading-tight 
                               pl-5 lg:pl-6 xl:pl-7"
                >
                    {this.props.children}
                </div>
            </div>
        );

    }

}