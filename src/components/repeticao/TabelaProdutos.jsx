import React from "react";
import produto from "../../data/produto";
import "./table.css";
export default (props) => {
  let valorT = 0;
  const style = {
    backgroundColor: props.color,
  };
  const produtos = produto.map((prod, i) => {
    return (
      <tr key={i}>
        <td>{prod.nome}</td>
        <td>R$ {prod.valor}</td>
      </tr>
    );
  });

  produto.forEach((v) => {
    valorT += v.valor;
  });
  return (
    <table style={style}>
      <thead>
        <tr>
          <th>Nome do produto</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>{produtos}</tbody>
      <thead>
        <tr>
          <th>Valor Total</th>
          <th>R$ {valorT}</th>
        </tr>
      </thead>
    </table>
  );
};
