import React from "react";

import ErrorPageTemplate from "../components/ErrorPageTemplate/ErrorPageTemplate";



export default class Page404 extends React.Component
{

    render()
    {
        return(
            <ErrorPageTemplate
                Page={{Error: "404"}}
            >
                Page not found
            </ErrorPageTemplate>
        )
    }

}