import React from 'react';



export class DecorationBar extends React.Component
{

    render()
    {
        return(
            <div id="DecorationBar">
                <div id="ButtonSection-Front" className="ButtonSection"></div>
                <div id="TitleSection-Front" className="TitleSection"></div>
                <div id="Avatar"></div>
                <div id="TitleSection-Back" className="TitleSection"></div>
                <div id="ButtonSection-Back" className="ButtonSection"></div>
            </div>
        );
    }

}