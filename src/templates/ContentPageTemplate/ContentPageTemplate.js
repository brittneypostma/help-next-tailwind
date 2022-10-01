import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

import PageTemplate from "../PageTemplate/PageTemplate";
import HeaderButtonTemplate from "../HeaderButtonTemplate/HeaderButtonTemplate";



export default class ContentPageTemplate extends React.Component
{

    constructor(props)
    {
        super(props);

        this.ContentWrapperRef = React.createRef();
    }

    OnScrollBody(delta, keys)
    {
        if(!this.ContentWrapperRef.current){ return; }
        const scrollDeltaY = ConvertScrollDeltaToPX(delta.y, delta.mode, this.ContentWrapperRef.current);
        this.ContentWrapperRef.current.scrollBy(0, scrollDeltaY);
    }

    OnDragBody(delta)
    {
        if(!this.ContentWrapperRef.current){ return; }
        this.ContentWrapperRef.current.scrollBy(0, delta.y);
    }

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
                Title={this.props.Header?.LeftButton?.Title ?? null}
                Href={this.props.Header?.LeftButton?.Href}/>;

        const RightButton = 
            <HeaderButtonTemplate 
                Icon={this.props.Header?.RightButton?.Icon ?? faQuestionCircle}
                Title={this.props.Header?.RightButton?.Title ?? null}
                Href={this.props.Header?.RightButton?.Href}/>;



        return(
            <PageTemplate
                Header={{
                    RenderTitle: ()=>{ return Title; },
                    RenderSubtitle: ()=>{ return Subtitle; },
                    RenderLeftButton: this.props.Header?.LeftButton ? ()=>{ return LeftButton; } : null,
                    RenderRightButton: this.props.Header?.RightButton ? ()=>{ return RightButton; } : null
                }}
                RenderBackground={this.props.RenderBackground ?? null}
                OnScrollBody={this.OnScrollBody.bind(this)}
                OnDragBody={this.OnDragBody.bind(this)}
            >
                <div
                    className="relative flex flex-col justify-start items-center w-full h-full overflow-x-hidden overflow-y-auto 
                               scrollbar-thin scrollbar-track-gainsboro scrollbar-thumb-black-olive 
                               scrollbar-track-rounded-full scrollbar-thumb-rounded-full overscroll-contain"
                    ref={this.ContentWrapperRef}
                >
                    
                        <div id="Content-Header"
                            className="relative block w-full m-2 px-4 text-xs leading-none align-middle font-medium"
                        >
                            <div className="text-gainsboro-800">{String.fromCodePoint(123)}</div>
                            <div className="pl-4">
                                <span className="text-eucalyptus-700 whitespace-pre">vector</span>
                                <span className="text-gainsboro-800 whitespace-pre">{String.fromCodePoint(60)}</span>
                                <span className="text-eucalyptus-700 whitespace-pre">content</span>
                                <span className="text-gainsboro-800 whitespace-pre">*</span>
                                <span className="text-gainsboro-800 whitespace-pre">{String.fromCodePoint(62) + " "}</span>
                                <span className="text-winter-wizard-700 whitespace-pre">contents</span>
                                <span className="text-gainsboro-800 whitespace-pre"> =</span>
                            </div>
                            <div className="pl-4 text-eucalyptus-700">{String.fromCodePoint(123)}</div>
                        </div>
                        <div
                            className="relative flex flex-col items-center justify-start 
                                        gap-y-3 sm:gap-y-4
                                        w-full h-fit
                                        px-3 sm:px-4 md:px-5 lg:px-6 xl:px-7"
                        >
                            {this.props.children}
                        </div>
                        <div id="Content-Footer"
                            className="relative block w-full m-2 px-4 text-xs leading-none align-middle font-medium"
                        >
                            <div className="pl-4">
                                <span className="text-eucalyptus-700 whitespace-pre">&#125;</span>
                                <span className="text-gainsboro-800 whitespace-pre">;</span>
                            </div>
                            <div className="pl-4">
                                <span className="text-carolina-blue-700 whitespace-pre">return </span>
                                <span className="text-eucalyptus-700 whitespace-pre">page&#40;</span>
                                <span className="text-winter-wizard-700 whitespace-pre">contents</span>
                                <span className="text-eucalyptus-700 whitespace-pre">&#41;</span>
                                <span className="text-gainsboro-800 whitespace-pre">;</span>
                            </div>
                            <div className="text-gainsboro-800">&#125;</div>
                        </div>
                </div>
            </PageTemplate>
        );
    }

}



function ConvertScrollDeltaToPX(delta, deltaMode, eventTarget)
{

    switch(deltaMode)
    {
        case WheelEvent.DOM_DELTA_PIXEL:
            return delta
            break;
        case WheelEvent.DOM_DELTA_LINE:
            return 0;
            break;
        case WheelEvent.DOM_DELTA_PAGE:
            return 0;
            break;
        default:
            break;
    }

}