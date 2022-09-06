import React from "react";


export default class DividerItem extends React.Component
{

    constructor(props)
    {
        super(props);
    }

    ParseDividerThickness()
    {
        switch(this.props.DividerThickness)
        {
            case "px":
                return "h-px";
            case "0.5":
                return "h-0.5";
            case "1":
                return "h-1";
            case "1.5":
                return "h-1.5";
            case "2":
                return "h-2";
            case "2.5":
                return "h-2.5";
            case "3":
                return "h-3";
            case  "3.5":
                return "h-3.5";
            case  "4":
                return "h-4";
            case "5":
                return "h-5";
            case "6":
                return "h-6";
            case "7":
                return "h-7";
            case "8":
                return "h-8";
            default:
                return "h-1";
        }
    }

    ParseTitleSize()
    {
        switch(this.props.TitleSize)
        {
            case "xs":
                return "text-xs";
            case "sm":
                return "text-sm";
            case "base":
                return "text-base";
            case "lg":
                return "text-lg";
            case "xl":
                return "text-xl";
            default:
                return "text-base";
        }
    }

    ParseTitleWeight()
    {
        return "font-" + this.props.TitleWeight;
    }

    render()
    {

        let dividerStyle = this.ParseDividerThickness() + " bg-gainsboro";
        let titleStyle = "text-gainsboro " + this.ParseTitleSize() + " " + this.ParseTitleWeight();

        return(
            
            <div
                className="relative flex justify-center items-center w-full h-4 my-2"
            >
            {
                this.props.Title ?
                <div
                    className="relative flex items-center w-full h-fit"
                >
                    {
                        this.props.TitleAlignment !== "left" ? 
                        <div 
                            className={"relative inline-block w-full rounded-full " + dividerStyle}
                        /> :
                        null
                    }

                    <div
                        className=
                        {
                            "relative inline-flex justify-center items-center w-fit px-2 whitespace-nowrap " + 
                            titleStyle +
                            (this.props.TitleAlignment === "left" ? " pl-0" : "") + 
                            (this.props.TitleAlignment === "right" ? " pr-0" : "")
                        } 
                    >
                        {this.props.Title}
                    </div>

                    {
                        this.props.TitleAlignment !== "right" ?
                        <div
                            className={"relative inline-block w-full rounded-full " + dividerStyle}
                        /> :
                        null
                    }
                </div> :
                <div
                    className={"relative block w-full rounded-full " + dividerStyle}
                />
            }
            </div>
        );
    }

}