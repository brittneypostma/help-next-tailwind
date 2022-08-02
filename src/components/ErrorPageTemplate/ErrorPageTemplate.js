import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExplosion, faHome } from "@fortawesome/free-solid-svg-icons";

import PageTemplate from "../PageTemplate/PageTemplate";
import HeaderButtonTemplate from "../HeaderButtonTemplate/HeaderButtonTemplate";
import NavigationButton from "../NavigationButton/NavigationButton";



export default class ErrorPageTemplate extends React.Component
{

    render()
    {

        const Title = 
            <div
                className="underline decoration-red-400 decoration-wavy"
            >
                <span className="text-eucalyptus font-medium whitespace-pre">page </span>
                <span className="text-eucalyptus font-bold whitespace-pre">Error</span>
            </div>;

        const Subtitle=
            <div
                className="underline decoration-red-400 decoration-wavy"
            >
                <span className="text-gainsboro font-medium whitespace-pre">::</span>
                <span className="text-cookies-and-cream font-medium whitespace-pre">{this.props.Page?.Error}</span>
                <span className="text-gainsboro font-bold whitespace-pre">(</span>
                <span className="relative inline-block w-4 h-4 aspect-square text-red-500">
                    <FontAwesomeIcon icon={faExplosion}/>
                </span>
                <span className="text-gainsboro font-bold whitespace-pre">)</span>
            </div>;

        const LeftButton = 
            <HeaderButtonTemplate 
                Icon={faHome}
                Href={"/home"}/>;

        const HomeButtonTitle =
            <>
                <span className="text-carolina-blue font-medium whitespace-pre">class </span>
                <span className="text-eucalyptus font-bold whitespace-pre">Bas_Walhout</span>
            <span className="text-gainsboro font-bold whitespace-pre">(</span>
            <span className="relative w-fit h-fit aspect-square text-carolina-blue">
                <FontAwesomeIcon icon={faHome}/>
            </span>
            <span className="text-gainsboro font-bold whitespace-pre">);</span>
            </>



        return(
            <PageTemplate
                Header={{
                    RenderTitle: ()=>{ return Title; },
                    RenderSubtitle: ()=>{ return Subtitle; },
                    RenderLeftButton: this.props.Header?.LeftButton ? ()=>{ return LeftButton; } : null,
                }}
            >
                <div
                    className="relative flex flex-col justify-center items-center w-full h-full py-4 overflow-hidden"
                >
                    <div
                        className="w-full text-center text-2xl"
                    >
                        <span 
                            className="text-red-500 font-bold whitespace-pre underline decoration-red-400 decoration-wavy"
                        >
                            Error
                        </span>
                        <span className="text-gainsboro font-bold whitespace-pre"> : </span>
                        <span 
                            className="text-red-500 font-black whitespace-pre underline decoration-red-400 decoration-wavy"
                        >
                            {this.props.Page.Error}
                        </span>
                    </div>

                    {
                        this.props.children ? 
                        <div
                        className="relative flex flex-col justify-center items-start w-fit h-fit max-w-full px-4 my-8 text-gainsboro"
                        >
                            <div
                                className="w-full mb-1 text-center font-bold"
                            >
                                Description
                            </div>
                            {this.props.children}
                        </div> :
                        null   
                    }
                    
                    <div
                        className="relative flex justify-center items-center w-fit h-fit"
                    >
                        <NavigationButton
                            RenderTitle={()=>{ return HomeButtonTitle; }}
                            Subtitle="Go to class definition "
                            Href="/home"
                        />
                    </div>
                </div>
            </PageTemplate>
        );

    }

}
