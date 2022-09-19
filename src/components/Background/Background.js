import React from "react";

import { ParseContentItem } from "../../CMS/content";



export default class Background extends React.Component
{

    constructor(props)
    {
        super(props);

        this.state=
        {
            refSet: false
        }

        this.Ref = React.createRef();
        this.OnWindowResizeCallback = this.OnWindowResize.bind(this);

    }

    OnWindowResize()
    {
        this.forceUpdate();
    }

    ParseAspectRatio()
    {
        if(!this.props.BackgroundContent){ return ""; }
        switch(this.props.BackgroundContent.aspectRatio)
        {
            case "1/1":
                return "aspect-1/1";
            case "2/1":
                return "aspect-2/1";
            case "3/2":
                return "aspect-3/2";
            case "4/3":
                return "aspect-4/3";
            case "5/4":
                return "aspect-5/4";
            case "16/9":
                return "aspect-16/9";
            case "1/2":
                return "aspect-1/2";
            case "2/3":
                return "aspect-2/3";
            case "3/4":
                return "aspect-3/4";
            case "4/5":
                return "aspect-4/5";
            case "9/16":
                return "aspect-9/16";
            default:
                return "4/3";
        }
    }

    GetAspectRatio()
    {
        if(!this.props.BackgroundContent){ return 1; }
        switch(this.props.BackgroundContent.aspectRatio)
        {
            case "1/1":
                return 1;
            case "2/1":
                return 2/1;
            case "3/2":
                return 3/2;
            case "4/3":
                return 4/3;
            case "5/4":
                return 5/4;
            case "16/9":
                return 16/9;
            case "1/2":
                return 1/2;
            case "2/3":
                return 2/3;
            case "3/4":
                return 3/4;
            case "4/5":
                return 4/5;
            case "9/16":
                return 9/16;
            default:
                return 1;
        }
    }

    componentDidMount()
    {
        this.setState({refSet: true});

        window.addEventListener("resize", this.OnWindowResizeCallback);
    }

    componentWillUnmount()
    {
        window.removeEventListener("resize", this.OnWindowResizeCallback);
    }
    
    render()
    {

        let width = "portrait:w-fit landscape:w-full";
        let height = "portrait:h-full landscape:h-fit";
        
        if(this.Ref.current)
        {
            let backgroundWidth = this.Ref.current?.clientWidth;
            let backgroundHeight = this.Ref.current?.clientHeight;


            if(!backgroundWidth  || !backgroundHeight){ return; }

            const aspectRatio = this.GetAspectRatio();

            if(aspectRatio * backgroundHeight >= backgroundWidth)
            {
                width = "w-auto"
                height = "h-full"
            }
            else
            {
                width = "w-full"
                height = "h-auto"
            }
        }        

        return(
            <div 
                className="relative flex flex-col items-center w-full h-full"
                ref={this.Ref}
            >
                <div
                    className=
                    {
                        "relative flex items-center justify-center " +
                        (width + " " + height + " " + this.ParseAspectRatio())
                    }
                >
                    {
                        this.props.BackgroundContent ?
                        ParseContentItem(this.props.BackgroundContent, null, true) :
                        null
                    }
                </div>
            </div>)
    }

}