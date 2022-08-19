import { useState } from "react";

import {
  Background,
  Container,
  ContainerResulte,
  ContainerButtons,
  ContainerNumbers,
  ContainerOperaitors,
  ContainerSup,
  Buttons,
  ButtonDelete,
} from "./Styles";

export const Calculator = () => {
  const [num, setNum] = useState("");
  const [oldNum, setOldNum] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (event) => {
    const value = event.target.value;
    if (num === 0) {
      return setNum(value);
    } else {
      return setNum(num + value);
    }
  };

  const clear = () => {
    setNum("");
    setOldNum("");
    setOperator("");
    setResult("");
  };
  function porcentage() {
    setNum(num / 100);
  }
  const handleOperator = (event) => {
    const operatorCliked = event.target.value;
    setOperator(operatorCliked);
    setOldNum(num);
    setNum("");
  };

  const calculate = () => {
    if (operator === "/") {
      setResult(Number(oldNum) / Number(num));
    } else if (operator === "x") {
      setResult(Number(oldNum) * Number(num));
    } else if (operator === "+") {
      setResult(Number(oldNum) + Number(num));
    } else if (operator === "-") {
      setResult(Number(oldNum) - Number(num));
    }
  };

  const exibeCalculo = () => {
    if (oldNum !== "" && operator !== "" && num !== "") {
      return `${oldNum} ${operator} ${num}`;
    }

    if (oldNum === "") {
      return num;
    }

    if (oldNum !== "" && operator !== "") {
      return `${oldNum} ${operator}`;
    }
  };

  return (
    <Background>
      <Container>
        <ContainerResulte>
          <p data-testid="exibe_values">{exibeCalculo()}</p>
        </ContainerResulte>
        <p>{result}</p>
        <ContainerSup>
          <ButtonDelete onClick={clear}>AC</ButtonDelete>
          <Buttons onClick={porcentage}>%</Buttons>
        </ContainerSup>
        <ContainerButtons>
          <ContainerNumbers>
            <Buttons onClick={handleClick} value={0}>
              0
            </Buttons>
            <Buttons onClick={handleClick} value={1}>
              1
            </Buttons>
            <Buttons onClick={handleClick} value={2}>
              2
            </Buttons>
            <Buttons onClick={handleClick} value={3}>
              3
            </Buttons>
            <Buttons onClick={handleClick} value={4}>
              4
            </Buttons>
            <Buttons onClick={handleClick} value={5}>
              5
            </Buttons>
            <Buttons onClick={handleClick} value={6}>
              6
            </Buttons>
            <Buttons onClick={handleClick} value={7}>
              7
            </Buttons>
            <Buttons onClick={handleClick} value={8}>
              8
            </Buttons>
            <Buttons onClick={handleClick} value={9}>
              9
            </Buttons>
            <Buttons onClick={handleClick} value=".">
              .
            </Buttons>
            <Buttons onClick={calculate}>=</Buttons>
          </ContainerNumbers>
          <ContainerOperaitors>
            <Buttons onClick={handleOperator} value="+">
              +
            </Buttons>
            <Buttons onClick={handleOperator} value="-">
              -
            </Buttons>
            <Buttons onClick={handleOperator} value="x">
              x
            </Buttons>
            <Buttons onClick={handleOperator} value="/">
              /
            </Buttons>
          </ContainerOperaitors>
        </ContainerButtons>
      </Container>
    </Background>
  );
};
