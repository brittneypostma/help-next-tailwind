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
                        className="relative block box-border w-full h-full px-2 rounded-lg overflow-hidden bg-black-olive/50 backdrop-blur"
                    >
                        <div id="Content-Wrapper"
                            className="relative flex flex-col flex-nowrap box-border w-full h-full overflow-hidden bg-eerie-black/80"
                        >
                            <HeaderTemplate
                                RenderTitle={this.props.Header?.RenderTitle}
                                RenderSubtitle={this.props.Header?.RenderSubtitle}
                                RenderLeftButton={this.props.Header?.RenderLeftButton}
                                RenderRightButton={this.props.Header?.RenderRightButton}
                            />
                            <div id="Content-Body"
                                className="relative block box-border w-full h-full"
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