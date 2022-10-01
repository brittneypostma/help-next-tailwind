import React from "react";

import HeaderTemplate from "../HeaderTemplate/HeaderTemplate";



export default class PageTemplate extends React.Component
{

    constructor(props)
    {
        super(props);

        this.state=
        {
            PointerOverBody: false,
            TouchOnBody: null
        }

        this.ScrollThrottleTimeout = null;
        this.DragThrottleTimeout = null;
    }

    OnPointerOver(event)
    {
        if(event.target != event.currentTarget){ return; }
        this.setState({PointerOverBody: true});
    }

    OnPointerOut(event)
    {
        if(event.target != event.currentTarget){ return; }
        this.setState({PointerOverBody: false});
    }

    OnTouchStart(event)
    {
        if(this.state.TouchOnBody || event.target != event.currentTarget){ return; }
        this.setState({TouchOnBody: event.changedTouches[0]});
    }

    OnTouchEnd(event)
    {
        if(!this.state.TouchOnBody){ return; }
        for(let touch of event.changedTouches)
        {
            if(touch.identifier == this.state.TouchOnBody.identifier)
            {
                this.setState({TouchOnBody: null});
                break;
            }
        }
    }

    OnTouchCancel(event)
    {
        if(!this.state.TouchOnBody){ return; }
        for(let touch of event.changedTouches)
        {
            if(touch.identifier == this.state.TouchOnBody.identifier)
            {
                this.setState({TouchOnBody: null});
                break;
            }
        }
    }

    OnTouchMove(event)
    {
        if(!this.state.TouchOnBody || this.DragThrottleTimeout){ return; }
        for(let touch of event.changedTouches)
        {
            if(touch.identifier == this.state.TouchOnBody.identifier)
            {
                const delta = 
                {
                    x: touch.clientX - this.state.TouchOnBody.clientX,
                    y: touch.clientY - this.state.TouchOnBody.clientY
                };
                this.props.OnDragBody?.(delta);
                this.setState({TouchOnBody: touch})
                this.DragThrottleTimeout = setTimeout(()=>{this.DragThrottleTimeout = null}, (this.props.DragThrottleTime ?? 1000/30));
                break;
            }
        }
    }

    OnWheelEvent(event)
    {

        if(this.ScrollThrottleTimeout){ return; }

        const delta = 
        {
            x: event.deltaX,
            y: event.deltaY,
            mode: event.deltaMode
        };
        
        const keys=
        {
            alt: event.altKey,
            shift: event.shiftKey,
        };

        this.props.OnScrollBody?.(delta, keys);
        this.ScrollThrottleTime = setTimeout(()=>{this.DragThrottleTimeout = null}, (this.props.ScrollThrottleTime ?? 1000/30));
    }

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
                        onPointerOver={this.props.OnScrollBody ? this.OnPointerOver.bind(this) : null}
                        onPointerOut={this.props.OnScrollBody && this.state.PointerOverBody ? this.OnPointerOut.bind(this) : null}
                        onWheel={this.props.OnScrollBody && this.state.PointerOverBody ? this.OnWheelEvent.bind(this) : null}
                        onTouchStart={this.props.OnScrollBody ? this.OnTouchStart.bind(this) : null}
                        onTouchEnd={this.props.OnScrollBody && this.state.TouchOnBody ? this.OnTouchEnd.bind(this) : null}
                        onTouchCancel={this.props.OnScrollBody && this.state.TouchOnBody ? this.OnTouchCancel.bind(this) : null}
                        onTouchMove={this.props.OnScrollBody && this.state.TouchOnBody ? this.OnTouchMove.bind(this) : null}
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