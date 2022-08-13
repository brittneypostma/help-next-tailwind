import React from "react";


export default class Divider extends React.Component
{

    constructor(props)
    {
        super(props);
    }

    render()
    {

        let dividerStyle = "h-1 bg-gainsboro";
        let titleStyle = "text-gainsboro";

        

        return(
            
            <div
                className="relative flex justify-center items-center w-full h-4"
            >
            {
                this.props.Title ?
                <div
                    className="relative flex items-center w-full h-fit"
                >
                    {
                        this.props.AlignTitle !== "left" ? 
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
                            (this.props.AlignTitle === "left" ? " pl-0" : "") + 
                            (this.props.AlignTitle === "right" ? " pr-0" : "")
                        } 
                    >
                        {this.props.Title}
                    </div>

                    {
                        this.props.AlignTitle !== "right" ?
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