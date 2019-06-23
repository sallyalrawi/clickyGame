import React from 'react';
import "./style.css";

function ClicK({key, id, handleClick, image}){
    return(
        <div 
        role = "img"
        aria-label = "click"
        onClick = {() => handleClick(id)}
        style ={{backgroundImage: `url("${image}")` }}
        // className ={`click${shake ? " shake" : ""}`}
        />
    );
}
export default ClicK ;