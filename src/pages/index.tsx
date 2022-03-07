import React from "react";
import Button from "../components/Button";
import Display from "../templates/Display";
import Header from "../templates/Header";
import { ContainerCalculadora } from "./styles";

const Calculadora: React.FC = () => {
  const buttonsCalc = [
    {
      display: "7",
      value: "7",
    },
    {
      display: "8",
      value: "8",
    },
    {
      display: "9",
      value: "9",
    },
    {
      display: "*",
      value: "vezes",
    },
    {
      display: "4",
      value: "4",
    },
    {
      display: "5",
      value: "5",
    },
    {
      display: "6",
      value: "6",
    },
    {
      display: "/",
      value: "/",
    },
    {
      display: "1",
      value: "1",
    },
    {
      display: "2",
      value: "2",
    },
    {
      display: "3",
      value: "3",
    },
    {
      display: "+",
      value: "+",
    },
    {
      display: "0",
      value: "0",
    },
    {
      display: "%",
      value: "%",
    },
    {
      display: ".",
      value: ".",
    },
    {
      display: "-",
      value: "-",
    },
    {
      display: "x²",
      value: "x²",
    },
    {
      display: "C",
      value: "C",
    },
  ];

  return (
    <ContainerCalculadora>
      <Header />
      <Display value={0} />
      {buttonsCalc.map((button) => (
        <Button value={button.value}> {button.display} </Button>
      ))}
    </ContainerCalculadora>
  );
};

export default Calculadora;
