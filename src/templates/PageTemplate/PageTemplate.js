import React from "react";

import HeaderTemplate from "../HeaderTemplate/HeaderTemplate";



export default class PageTemplate extends React.Component
{

    render()
    {

        return(
            <>
                <div id="Page-Background"
                    className="absolute block box-border w-screen h-screen overflow-hidden bg-slate-400"
                >
                    {this.props.RenderBackground ? this.props.RenderBackground() : null}
                </div>
                <div id="Page-Wrapper"
                    className="absolute block box-border w-screen h-screen p-2 overflow-hidden"
                >
                    <div id="Glass-Background"
                        className="relative flex flex-col flex-nowrap items-center box-border w-full h-full px-2 
                                   rounded-lg overflow-hidden bg-black-olive/60 backdrop-blur-sm shadow-lg shadow-eerie-black"
                    >
                        <div id="Content-Wrapper"
                            className="relative flex flex-col flex-nowrap box-border 
                                       w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-3/5 2xl:w-1/2
                                       h-full overflow-hidden bg-eerie-black/60 backdrop-blur-sm"
                        >
                            <HeaderTemplate
                                RenderTitle={this.props.Header?.RenderTitle}
                                RenderSubtitle={this.props.Header?.RenderSubtitle}
                                RenderLeftButton={this.props.Header?.RenderLeftButton}
                                RenderRightButton={this.props.Header?.RenderRightButton}
                            />
                            <div id="Content-Body"
                                className="relative block box-border w-full h-full overflow-hidden"
                            >
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

}