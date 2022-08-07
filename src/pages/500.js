import React from "react";

import Error from "./_error";



export default class ErrorPage500 extends React.Component
{

    render(){ return Error({statusCode: 500}); }

}