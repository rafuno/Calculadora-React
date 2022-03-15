import React from "react";
import Button from "../components/Button";
import Display from "../templates/Display";
import Result from "../templates/Result-button";

import Header from "../templates/Header";
import { ContainerCalculadora } from "./styles";

const Calculadora: React.FC = () => {
  const [primeiroNumero, setprimeiroNumero] = React.useState("");
  const [segundoNumero, setSegundoNumero] = React.useState("");
  const [operadorNaTela, setOperadorNatela] = React.useState("");
  const [resultado, setResultado] = React.useState('')


  //Setar o primeiro e segundo número a ser "operado"
  const operador = (numero: string) => {
    //Se o operador existir, seta o segundo número
    if (operadorNaTela !== "") {
      debugger
      setSegundoNumero(segundoNumero + numero);
      return;
    }
    //seta o primeiro número
    setprimeiroNumero(primeiroNumero + numero);
  };

  //
  const operacao = (conta: string) => {
    if (primeiroNumero === "") {
      return;
    }
    setOperadorNatela(conta);
  };

  const limparMemoria = () => {
    setprimeiroNumero("");
    setOperadorNatela("");
    setSegundoNumero("");
    setResultado('')
  };

  const handleResult = () => {
    
    let valorPrimNumInt = parseInt(primeiroNumero);
    let valorSeguNumInt = parseInt(segundoNumero);
    let valorTotal;
    switch (operadorNaTela) {
      case "+":
        valorTotal = valorPrimNumInt + valorSeguNumInt;
        break;
      case "-":
        valorTotal = valorPrimNumInt - valorSeguNumInt;
        break;

      case "*":
        valorTotal = valorPrimNumInt * valorSeguNumInt;
        break;
      case "/":
        valorTotal = valorPrimNumInt / valorSeguNumInt;
        break;

        
      default:
        valorTotal = "";
    }

    setResultado('=' + String(valorTotal));
    return
  };

  const buttonsCalc = [
    {
      display: "7",
      value: "7",
      func: (numero: any) => operador(numero.target.value),
    },
    {
      display: "8",
      value: "8",
      func: (numero: any) => operador(numero.target.value),
    },
    {
      display: "9",
      value: "9",
      func: (numero: any) => operador(numero.target.value),
    },
    {
      display: "*",
      value: "*",
      func: (operador: any) => operacao(operador.target.value),
    },
    {
      display: "4",
      value: "4",
      func: (numero: any) => operador(numero.target.value),
    },
    {
      display: "5",
      value: "5",
      func: (numero: any) => operador(numero.target.value),
    },
    {
      display: "6",
      value: "6",
      func: (numero: any) => operador(numero.target.value),
    },
    {
      display: "/",
      value: "/",
      func: (operador: any) => operacao(operador.target.value),
    },
    {
      display: "1",
      value: "1",
      func: (numero: any) => operador(numero.target.value),
    },
    {
      display: "2",
      value: "2",
      func: (numero: any) => operador(numero.target.value),
    },
    {
      display: "3",
      value: "3",
      func: (numero: any) => operador(numero.target.value),
    },
    {
      display: "+",
      value: "+",
      func: (operador: any) => operacao(operador.target.value),
    },
    {
      display: "0",
      value: "0",
      func: (numero: any) => operador(numero.target.value),
    },
    {
      display: "%",
      value: "%",
      func: (operador: any) => operacao(operador.target.value),
    },
    {
      display: ",",
      value: ".",
      func: (operador: any) => operacao(operador.target.value),
    },
    {
      display: "-",
      value: "-",
      func: (operador: any) => operacao(operador.target.value),
    },
    {
      display: "²",
      value: "²",
      func: (operador: any) => operacao(operador.target.value),
    },
    {
      display: "C",
      value: "C",
      func: limparMemoria,
    },
  ];

  return (
    <ContainerCalculadora>
      <Header />
      <Display
        resultado={resultado}
        primeiroNumero={primeiroNumero}
        acumulator={operadorNaTela}
        segundoNumero={segundoNumero}
      />

      <div className="position-buttons">
        {buttonsCalc.map((button, index) => (
          <Button onClickValue={button.func} value={button.value} key={index}>
            {button.display}
          </Button>
        ))}
        <div className="result">
          <Result value={"result"} onClickResult={handleResult}>
            =
          </Result>
        </div>
      </div>
    </ContainerCalculadora>
  );
};

export default Calculadora;
