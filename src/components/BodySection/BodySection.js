import React from "react";
import { faChevronCircleDown, faChevronCircleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ContentContainer from "../ContentContainer/ContentContainer"



export default class BodySection extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state = 
        {
            IsCollapsed: (this.props.StartCollapsed ?? false)
        }
    }

    SetCollapsedState(newState)
    {
        this.setState({IsCollapsed : newState});
    }

    render()
    {

        return(
            <ContentContainer
                className="w-full h-fit py-2 my-2 shadow-lg shadow-eerie-black"
            >
                <div
                    className={
                        "relative block w-full h-fit px-2 py-1.5 leading-none align-middle font-medium " + 
                        (this.props.TypeSize ?? "") + 
                        (!(this.props.Collapsible && this.state.IsCollapsed) && this.props.OpenBracketInline ? " mb-2" : "")}
                    onClick={this.SetCollapsedState.bind(this, !this.state.IsCollapsed)}
                >
                    <span
                        className="text-eucalyptus-700 whitespace-pre leading-none align-middle"
                    >
                        {"Section "} 
                    </span>
                    <span
                        className={"text-winter-wizard whitespace-pre leading-none align-middle " + (this.props.NameSize ?? "")}
                    >
                        {this.props.SectionName}
                    </span>
                    
                    {
                        this.props.Collapsible && this.state.IsCollapsed ?
                        <span className="text-eucalyptus-800 whitespace-pre"> {String.fromCodePoint(123)} {String.fromCodePoint(125)}</span>:
                        null
                    }
                    
                    {
                        !(this.props.Collapsible && this.state.IsCollapsed) && this.props.OpenBracketInline ?
                        <span className="text-eucalyptus-700 whitespace-pre"> {String.fromCodePoint(123)}</span> :
                        null
                    }

                    {
                        this.props.Collapsible ?
                            <div className=
                                {
                                    "relative inline-flex justify-center items-center w-4 h-4 aspect-square float-right " +
                                    "text-gainsboro-600 leading-none align-middle " +
                                    (this.props.NameSize?? "")
                                }
                            >
                                {this.state.IsCollapsed ? 
                                <FontAwesomeIcon icon={faChevronCircleDown}/> :
                                <FontAwesomeIcon icon={faChevronCircleUp}/> }
                            </div>:
                        null
                    }


                </div>
                
                {
                    !this.props.Collapsible || !this.state.IsCollapsed ?
                    <>
                        {
                            !this.props.OpenBracketInline ?
                            <div className={"relative block w-full h-4 px-2 mb-2 leading-none align-middle font-medium " + (this.props.TypeSize ?? "")}>
                                <span className="text-eucalyptus-700 whitespace-pre">&#123;</span>
                            </div> :
                            null
                        }
                        
                        <div 
                            className="relative block box-border w-full h-fit bg-dark-charcoal/50"
                        >
                            {this.props.children}
                        </div>

                        <div className={"relative block w-full h-fit px-2 mt-2 leading-none align-middle font-medium " + (this.props.TypeSize ?? "")}>
                            <span className="text-eucalyptus-700 whitespace-pre">
                                {String.fromCodePoint(125)}
                            </span>
                            <span className="text-gainsboro whitespace-pre">
                                {(this.props.LastSection ? "" : ",")}
                            </span>
                        </div> 
                    </> :
                    null
                }
                
            </ContentContainer>
        );

    }

}