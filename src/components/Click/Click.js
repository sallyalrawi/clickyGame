import React from 'react';
import "./style.css";

function ClicK(props){
    return(
        <div 
        role = "img"
        aria-label = "click"
        onClick = {() => props.handleClick(props.id)}
        style ={{backgroundImage: `url("${props.image}")` }}
        className ={`click${props.shake ? " shake" : ""}`}
        />
    );
}
export default ClicK ;