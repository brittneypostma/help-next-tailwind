import React from "react";



export default class FlexLayoutItem extends React.Component
{

    ParseDirection()
    {
        switch(this.props.Direction)
        {
            case "row":
                return "flex-row";
            case "column":
                return "flex-col";
            case "row-reverse":
                return "flex-row-reverse";
            case "column-reverse":
                return "flex-column-reverse";
        }
    }

    ParseWrap()
    {
        switch(this.props.Wrap)
        {
            case "no-wrap":
                return "flex-nowrap";
            case "wrap":
                return "flex-wrap";
            case "wrap-reverse":
                return "flex-wrap-reverse";
        }
    }

    ParseAlignItems()
    {
        switch(this.props.AlignItems)
        {
            case "start":
                return "items-start";
            case "center":
                return "items-center";
            case "end":
                return "items-end";
            case "stretch":
                return "items-stretch";
            case "baseline":
                return "items-baseline";
        }
    }

    ParseJustifyContent()
    {
        switch(this.props.JustifyContent)
        {
            case "start":
                return "justify-start";
            case "center":
                return "justify-center";
            case "end":
                return "justify-end";
            case "space-between":
                return "justify-between";
            case "space-around":
                return "justify-around";
            case "space-evenly":
                return "justify-evenly";
        }
    }

    render()
    {
        return(
            <div
                className=
                {
                    "relative flex gap-2 w-full h-fit " +
                    this.ParseDirection() + " " +
                    this.ParseWrap() + " " +
                    this.ParseAlignItems() + " " +
                    this.ParseJustifyContent()
                }
            >
                {this.props.children}
            </div>
        );
    }

}