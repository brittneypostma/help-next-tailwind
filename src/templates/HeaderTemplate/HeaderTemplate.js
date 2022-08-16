import React from "react";



export default class HeaderTemplate extends React.Component
{

    render()
    {
        return (
            <div id="Header"
                className="relative shrink-0 grid grid-cols-header justify-evenly content-center place-items-center box-content w-full h-fit py-2 
                           overflow-hidden bg-eerie-black rounded-lg"
            >
                <div id="Left-Button-Wrapper"
                    className="relative flex justify-center items-center col-start-1 w-full h-full max-w-full max-h-full"
                >
                    {this.props.RenderLeftButton ? this.props.RenderLeftButton() : null}
                </div>
                <div id="Title-Section"
                    className="relative flex flex-col col-start-2 w-full h-fit min-w-fit max-w-full"
                >
                    <div id="Title"
                        className="relative block w-full h-fit text-xl text-center text-clip leading-none"
                    >
                        {this.props.RenderTitle ? this.props.RenderTitle() : "Title"}
                    </div>
                    <div id="Subtitle"
                        className="relative block w-full h-fit text-base text-center text-clip"
                    >
                        {this.props.RenderSubtitle ? this.props.RenderSubtitle() : "Subtitle"}
                    </div>
                </div>
                <div id="Right-Button-Wrapper"
                    className="relative flex justify-center items-center col-start-3 max-w-full max-h-full"
                >
                    {this.props.RenderRightButton ? this.props.RenderRightButton() : null}
                </div>
            </div>
        );
    }
    
}