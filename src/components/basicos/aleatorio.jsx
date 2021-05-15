import React from 'react'

export default function Aleatorio(props){
    var number = props.min + Math.random() * (props.max - props.min);
    console.log(number);
    return(
        <div>
            <h2>{ number }</h2>
        </div>
    )
}