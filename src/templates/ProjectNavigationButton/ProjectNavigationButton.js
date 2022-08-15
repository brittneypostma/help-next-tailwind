import React from "react";
import Image from "next/image"

import ContentContainer from "../../components/ContentContainer/ContentContainer"



export default class ProjectNavigationButton extends React.Component
{

    constructor(props)
    {
        super(props);
    }

    render()
    {

        let TypeSize = "text-xs";
        let NameSize = "text-sm";

        return(

            <ContentContainer
                className="py-2"
            >
                <div className="relative block w-full h-4 px-2 leading-none align-middle font-medium">
                    <span 
                        className={"text-eucalyptus-700 whitespace-pre leading-none align-middle " + (TypeSize ?? "")}
                    >
                        {"Project "}
                    </span>
                    <span 
                        className={"text-winter-wizard whitespace-pre leading-none align-middle " + (NameSize ?? "")}
                    >
                        {this.props.ProjectName}
                    </span>
                </div>
                <div className="relative block w-full h-4 px-2 mb-1 leading-none align-middle font-medium">
                    <span 
                        className={"text-eucalyptus-700 whitespace-pre " + (TypeSize ?? "")}
                    >
                        &#123;
                    </span>
                </div>
                <div>
                    <div
                        className="relative block w-full h-auto aspect-4/3"
                    >
                        <Image
                            className="object-cover"
                            src="/media/projects/2022/test/images/mustang.jpg"
                            layout="fill"
                        />
                    </div>
                </div>
                <div className="relative block w-full h-4 px-2 mt-1 leading-none align-middle font-medium">
                    <span 
                        className={"text-eucalyptus-700 whitespace-pre " + (TypeSize ?? "")}
                    >
                        &#125;
                    </span>
                </div>
            </ContentContainer>


                
        );

    }

}