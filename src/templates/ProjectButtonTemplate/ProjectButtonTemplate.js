import React from "react";
import Image from "next/image"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye, faClock, faLanguage, faScrewdriverWrench, faTags, faUsers, faUserTag } from "@fortawesome/free-solid-svg-icons";

import ContentContainer from "../../components/ContentContainer/ContentContainer"

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

        let TypeSize = "text-xs";
        let NameSize = "text-sm";
        let TitleSize = "text-sm";

        return(
            <Link href={encodeURI(this.props.ProjectHref ?? "projects/")}>
                <div>
                    <ContentContainer
                        className="pt-2"
                    >
                        <div className="relative block w-full h-4 px-2 mb-2 leading-none align-middle font-medium">
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
                        <div
                            className="relative block w-full h-auto aspect-4/3 overflow-hidden"
                        >
                            <div
                                className="absolute block w-full h-full aspect-4/3 blur-xxs"
                            >
                                <Image
                                    className="object-cover"
                                    src="/media/projects/2022/test/images/mustang.jpg"
                                    layout="fill"
                                />
                            </div>
                            
                            <div
                                className="relative flex flex-col w-full h-full overflow-x-hidden overflow-y-auto bg-dark-charcoal/85"
                            >

                                <div className="relative block w-full h-4 px-2 mb-1 leading-none align-middle font-medium">
                                    <span 
                                        className={"text-eucalyptus-700 whitespace-pre " + (TypeSize ?? "")}
                                    >
                                        {String.fromCodePoint(123)}
                                    </span>
                                </div>
                                
                                <div
                                    className="relative block w-full h-fit pl-4 pr-2 text-sm text-gainsboro"
                                >
                                    {
                                        this.props.ProjectDescription ?
                                        <div>
                                            <div className="relative block w-full h-4 mb-2 leading-normal align-middle">
                                                <span className={"text-eucalyptus-700 whitespace-pre " + (TitleSize ?? "")}>
                                                    {"Description" + String.fromCodePoint(123)}
                                                </span>
                                            </div>
                                            <div className="pl-0">
                                                {this.props.ProjectDescription}
                                            </div>
                                            <div className="relative block w-full h-4 mt-1 mb-2 leading-normal align-middle">
                                                <span className={"text-eucalyptus-700 whitespace-pre " + (TitleSize ?? "")}>
                                                    {String.fromCodePoint(125)}
                                                </span>
                                            </div>
                                        </div>:
                                        null
                                    }
                                    {
                                        this.props.ProjectDetails ?
                                        <div
                                            className="relative flex flex-col"
                                        >
                                            <div className="relative block w-full h-4 mb-2 leading-normal align-middle">
                                                <span className={"text-eucalyptus-700 whitespace-pre " + (TitleSize ?? "")}>
                                                    {"Details" + String.fromCodePoint(123)}
                                                </span>
                                            </div>
                                            <div className="pl-0">
                                                {
                                                    Object.entries(this.props.ProjectDetails).map(([detailName, detailValue], index)=>{

                                                        let name = detailNames.get(detailName);
                                                        let icon = detailIcons.get(detailName);


                                                        if(name && icon && detailValue != null)
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
                                            <div className="relative block w-full h-4 mt-1 leading-normal align-middle">
                                                <span className={"text-eucalyptus-700 whitespace-pre " + (TitleSize ?? "")}>
                                                    {String.fromCodePoint(125)}
                                                </span>
                                            </div>
                                        </div>:
                                        null
                                    }
                                </div>

                                <div className="relative block w-full h-4 px-2 mb-1 leading-none align-middle font-medium">
                                    <span 
                                        className={"row-start-1 col-start-1 w-fit h-full text-eucalyptus-700 whitespace-pre " + (TypeSize ?? "")}
                                    >
                                        {String.fromCodePoint(125)}
                                    </span>
                                </div>

                            </div>

                        </div>
                    </ContentContainer>
                </div>
            </Link>
                
        );

    }

}



class ProjectDetail extends React.Component
{

    render()
    {

        return(
            <div>
                <div className="relative inline-block w-4 h-4 aspect-square">
                    {
                        this.props.DetailIcon ?
                        <FontAwesomeIcon icon={this.props.DetailIcon}/> :
                        null
                    }
                </div>
                <span className="font-bold whitespace-pre-wrap">{" " + this.props.DetailName + ":"}</span>
                <div className="relative block w-full h-auto pl-5 leading-tight">
                    {this.props.children}
                </div>
            </div>
        );

    }

}