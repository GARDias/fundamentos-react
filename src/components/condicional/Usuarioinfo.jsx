import React from "react";
import If from "./if";
export default (props) => {
  const usuario = props.usuario || {};
  return (
    <div>
      <if test={usuario && usuario.nome}>
        Seja bem vindo <strong>{props.usuario.nome}</strong>
      </if>

      <if test={!usuario || !usuario.nome}>
        Seja bem vindo <strong>Palhaço!</strong>
      </if>
    </div>
  );
};
