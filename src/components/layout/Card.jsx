import "./Card.css";
import React from "react";
export default function Card(props){

  const style = {
      backgroundColor: props.color || '#F00',
      borderColor: props.color || '#F00'
  }  

  return (
    <div className="card" style={style}>
      <div className="titulo">{props.titulo}</div>
      <div className="conteudo">
          {props.children}
      </div>
    </div>
  );
};
