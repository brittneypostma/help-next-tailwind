import React from "react";
import ContentContainer from "../ContentContainer/ContentContainer";



export default class BodyItem extends React.Component
{

    constructor(props)
    {
        super(props);
    }

    render()
    {

        const TypeNameBackgroundColor = "bg-eerie-black/75 ";

        return(
            <ContentContainer
                className={
                    "relative block " +
                    (this.props.IsGroup ? "group" : "") + " " + 
                    (this.props.Width ?? "w-full") + " " +
                    (this.props.Height ?? "h-fit") + " " +
                    (this.props.AspectRatio ?? "") + " " +
                    (this.props.Styles ?? "")
                }
                IsLink={this.props.LocalHRef}
                HRef={this.props.HRef ?? null}
                Download={this.props.Download ?? null}
            >
                <div className="relative flex flex-col w-full h-full">
                    
                    {
                        this.props.NoTypeNames ? 
                        null :
                        <div 
                            className=
                            {
                                (this.props.FullItemContent ? "absolute " : "relative ") + 
                                (this.props.TypeNameBackgrounds ? TypeNameBackgroundColor : "") + 
                                " block w-fit h-fit z-10 rounded-br-lg px-2 py-1 select-none"
                            }
                        >
                            <div className="relative block w-full h-4 leading-none align-middle font-medium">
                                <span 
                                    className={"text-eucalyptus-700 whitespace-pre leading-none align-middle " + (this.props.TypeSize ?? "")}
                                >
                                    {this.props.ItemType}
                                    {" "}
                                </span>
                                <span 
                                    className={"text-winter-wizard whitespace-pre leading-none align-middle " + (this.props.NameSize ?? "")}
                                >
                                    {this.props.ItemName}
                                </span>
                                {
                                    this.props.OpenBracketInline ?
                                    <span 
                                        className={(this.props.BracketColor ?? "text-eucalyptus-700") + " whitespace-pre leading-none align-middle " + (this.props.TypeSize ?? "")}
                                    >
                                        {String.fromCodePoint(123)}
                                    </span> :
                                    null
                                }
                            </div>
                            {
                                !this.props.OpenBracketInline ?
                                <div className="relative block w-full h-4 leading-none align-middle font-medium">
                                    <span 
                                        className={(this.props.BracketColor ?? "text-eucalyptus-700") + " whitespace-pre " + (this.props.TypeSize ?? "")}
                                    >
                                        {String.fromCodePoint(123)}
                                    </span>
                                </div>:
                                null
                            }
                        </div>
                    }
                    
                    <div className="relative block w-full h-fit">
                        {this.props.children}
                    </div>

                    {
                        this.props.NoTypeNames ? 
                        null :
                        <div 
                            className=
                            {
                                (this.props.FullItemContent ? "absolute " : "relative ") +
                                (this.props.TypeNameBackgrounds ? TypeNameBackgroundColor : "") + 
                                " block w-fit h-fit px-2 py-1 z-10 bottom-0 rounded-tr-lg leading-none align-middle font-medium select-none"
                            }
                        >
                            <span 
                                className={(this.props.BracketColor ?? "text-eucalyptus-700") + " whitespace-pre leading-none align-middle " + (this.props.TypeSize ?? "")}
                            >
                                {String.fromCodePoint(125)}
                            </span>
                            <span
                                className={"text-gainsboro whitespace-pre leading-none align-middle " + (this.props.TypeSize ?? "")}
                            >
                                {this.props.LastItem ? "" : ","}
                            </span>
                        </div>
                    }
                    
                </div>
            </ContentContainer>
        );

    }

}