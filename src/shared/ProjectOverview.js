import React from "react";
import { faCode, faHome, faComment } from "@fortawesome/free-solid-svg-icons";

import ContentPageTemplate from "../templates/ContentPageTemplate/ContentPageTemplate";
import Divider from "../components/Divider/Divider";
import ContentContainer from "../components/ContentContainer/ContentContainer";
import BodyItem from "../components/BodyItem/BodyItem";



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
                    <BodyItem
                        ItemType="Section"
                        ItemName="Featured_Projects"
                    >
                    </BodyItem>
                    <div>
                        {
                            this.state.ShowAll ?
                            <BodyItem
                                ItemType="Section"
                                ItemName="Other_Projects"
                            >
                            </BodyItem> :
                            null
                        }
                        <Divider/>
                        {
                            this.state.ShowAll ?
                            <div/> :    //Button to hide all
                            <div/>      //Button to show all
                        }
                    </div>
                </ContentPageTemplate>
        );
    }

}