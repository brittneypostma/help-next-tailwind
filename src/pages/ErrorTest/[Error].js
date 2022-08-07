import React from "react";
import Error from "../_error";

export default class ErrorTestPage extends React.Component
{
    
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return Error({statusCode: this.props.StatusCode});
    }

}

export async function getServerSideProps(context) 
{

    console.log(context);

    let statusCode = Number.parseInt(context.params.Error);
    statusCode = Number.isInteger(statusCode) ? statusCode : 0;
    
    return {props:{ StatusCode: statusCode}};
}