import React from 'react';

function Square(props){
    let winpos1 = props.winpos.pos1;
    let winpos2 = props.winpos.pos2;
    let winpos3 = props.winpos.pos3;
    let iPos = props.iPos;

    return(
        ((iPos === winpos1) || (iPos === winpos2) || (iPos === winpos3)) ? 
        <button className = 'square' onClick = {props.onClick} style = {{color : "red"}}>
            {props.value}
        </button> :
        <button className = 'square' onClick = {props.onClick}>
            {props.value}
        </button> 
    )
}

export default Square