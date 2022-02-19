import { useState } from "react";
import styled from "styled-components";
import { Label } from "../Lbel";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const onClickCountUp = () => {
    setCount(count + 1);
  };

  const onClickCountReset = () => {
    setCount(0);
  };
  return (
    <>
      <SWrapper>
        <Label>Counter</Label>
        <SP>{count}</SP>

        <SContainer>
          <SButton onClick={onClickCountUp}>COUNT UP</SButton>
          <SButton onClick={onClickCountReset}>RESET</SButton>
        </SContainer>
      </SWrapper>
    </>
  );
};

const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const SP = styled.p`
  font-size: 30px;
  color: grey;
  font-weight: bold;
`;

const SContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 100%;
`;

const SButton = styled.button`
  color: grey;
  font-weight: bold;
  margin: 2px;
  width: 70px;
  height: 30px;
  border-radius: 999px;
  font-size: 5px;
  border: 1px solid grey;
  cursor: pointer;
  :hover {
    opacity: 0.7;
    filter: alpha(opacity=70);
    -ms-filter: "alpha(opacity=70";
  }
`;
