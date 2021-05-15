import "./App.css";
import React from "react";
import Card from "./layout/Card";
import Aleatorio from "./basicos/aleatorio";
import Primeiro from "./basicos/Primeiro";
import Familia from "./basicos/Familia";
import ListaAluno from "./repeticao/ListaAluno";
import ListaProdutos from './repeticao/TabelaProdutos'
import ParouImpar from './condicional/ParOuImpar'
import Usuarioinfo from './condicional/Usuarioinfo'
import DiretaPai from './comunicacao/DiretaPai'
import IndiretaPai from './comunicacao/IndiretaPai'
import Input from './formulario/Input'
import Contador from './contador/Contador'
export default function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <div className="Cards">
        <Card titulo="#04 - Componente com Filhos" color="#0131ff">
          <Familia></Familia>
        </Card>
        <Card titulo="Desafio Aleatório" color="#080">
          <Aleatorio min={5} max={10}></Aleatorio>
        </Card>
        <Card titulo="Desafio Aleatório">
          <Aleatorio min={5} max={10}></Aleatorio>
        </Card>
        <Card titulo="Primeiro" color="#0F0">
          <Primeiro></Primeiro>
        </Card>
        <Card titulo="Lista de Alunos" color="#923419">
          <ListaAluno></ListaAluno>
        </Card>
        <Card titulo="Lista de Produtos" color="#a576ef">
          <ListaProdutos color="#a576ef"></ListaProdutos>
        </Card>
        <Card titulo="Par ou Impar" color="#a576ef">
          <ParouImpar numero={19}></ParouImpar>
          <Usuarioinfo usuario={{nome: 'Charlin'}} />
          <Usuarioinfo usuario={{email: 'Charlin'}} />
        </Card>

        <Card titulo="Direta Pai" color="#923e94">
          <DiretaPai></DiretaPai>
        </Card>

        <Card titulo="Indireta Pai" color="#923e94">
          <IndiretaPai></IndiretaPai>
        </Card>
        <Card titulo="Input" color="#29303b">
          <Input></Input>
        </Card>

        <Card titulo="Contador" color="#29993b">
          <Contador numeroInicial={1} passoInicial={10}></Contador>
        </Card>
      </div>
    </div>
  );
}
