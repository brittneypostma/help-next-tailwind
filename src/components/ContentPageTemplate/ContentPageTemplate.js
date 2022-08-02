import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

import PageTemplate from "../PageTemplate/PageTemplate";
import HeaderButtonTemplate from "../HeaderButtonTemplate/HeaderButtonTemplate";



export default class ContentPageTemplate extends React.Component
{

    render()
    {

        const Title = 
        <>
            <span className="text-eucalyptus font-medium whitespace-pre">page </span>
            <span className="text-eucalyptus font-bold whitespace-pre">Bas_Walhout</span>
        </>;
        const Subtitle=
        <>
            <span className="text-gainsboro font-medium whitespace-pre">::</span>
            <span className="text-cookies-and-cream font-medium whitespace-pre">{this.props.Page?.Title}</span>
            <span className="text-gainsboro font-bold whitespace-pre">(</span>
            <span className="relative inline-block w-fit h-fit aspect-square text-carolina-blue">
                <FontAwesomeIcon icon={this.props.Page?.Icon ?? faFileAlt}/>
            </span>
            <span className="text-gainsboro font-bold whitespace-pre">)</span>
        </>;

        const LeftButton = 
            <HeaderButtonTemplate 
                Icon={this.props.Header?.LeftButton?.Icon ?? faQuestionCircle}
                Href={this.props.Header?.LeftButton?.Href}/>;

        const RightButton = 
            <HeaderButtonTemplate 
                Icon={this.props.Header?.RightButton?.Icon ?? faQuestionCircle}
                Href={this.props.Header?.RightButton?.Href}/>;



        return(
            <PageTemplate
                Header={{
                    RenderTitle: ()=>{ return Title; },
                    RenderSubtitle: ()=>{ return Subtitle; },
                    RenderLeftButton: this.props.Header?.LeftButton ? ()=>{ return LeftButton; } : null,
                    RenderRightButton: this.props.Header?.RightButton ? ()=>{ return RightButton; } : null
                }}
            >
                <div
                    className="relative flex justify-center items-start w-full h-full overflow-hidden"
                >
                    <div
                        className="relative block box-border w-fit h-fit px-2 py-2"
                    >
                        <div id="Content-Header"
                            className="relative block mb-4 text-sm font-medium"
                        >
                            <div className="text-gainsboro">&#123;</div>
                            <div className="pl-4">
                                <span className="text-eucalyptus whitespace-pre">vector</span>
                                <span className="text-gainsboro whitespace-pre">&#60;</span>
                                <span className="text-eucalyptus whitespace-pre">content</span>
                                <span className="text-gainsboro whitespace-pre">*</span>
                                <span className="text-gainsboro whitespace-pre">&#62; </span>
                                <span className="text-winter-wizard whitespace-pre">contents</span>
                                <span className="text-gainsboro whitespace-pre"> =</span>
                            </div>
                            <div className="pl-4 text-eucalyptus"> &#123;</div>
                        </div>
                        {this.props.children}
                        <div id="Content-Footer"
                            className="relative block mt-4 text-sm font-medium"
                        >
                            <div className="pl-4">
                                <span className="text-eucalyptus whitespace-pre">&#125;</span>
                                <span className="text-gainsboro whitespace-pre">;</span>
                            </div>
                            <div className="pl-4">
                                <span className="text-carolina-blue whitespace-pre">return </span>
                                <span className="text-eucalyptus whitespace-pre">page&#40;</span>
                                <span className="text-winter-wizard whitespace-pre">contents</span>
                                <span className="text-eucalyptus whitespace-pre">&#41;</span>
                                <span className="text-gainsboro whitespace-pre">;</span>
                            </div>
                            <div className="text-gainsboro">&#125;</div>
                        </div>
                    </div>
                </div>
            </PageTemplate>
        );
    }

}