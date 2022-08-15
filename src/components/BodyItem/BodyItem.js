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

        return(
            <ContentContainer
                className={this.props.className}
            >
                <div className="relative block w-full h-4 leading-none align-middle font-medium">
                    <span 
                        className={"text-eucalyptus-700 whitespace-pre leading-none align-middle " + (this.props.TypeSize ?? "")}
                    >
                        {this.props.ItemType + " "}
                    </span>
                    <span 
                        className={"text-winter-wizard whitespace-pre leading-none align-middle " + (this.props.NameSize ?? "")}
                    >
                        {this.props.ItemName}
                    </span>
                </div>
                <div className="relative block w-full h-4 leading-none align-middle font-medium">
                    <span 
                        className={"text-eucalyptus-700 whitespace-pre " + (this.props.TypeSize ?? "")}
                    >
                        &#123;
                    </span>
                </div>
                <div>
                    {this.props.children}
                </div>
                <div className="relative block w-full h-4 leading-none align-middle font-medium">
                    <span 
                        className={"text-eucalyptus-700 whitespace-pre " + (this.props.TypeSize ?? "")}
                    >
                        &#125;
                    </span>
                </div>
            </ContentContainer>
        );

    }

}