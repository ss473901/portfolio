import { useState } from "react";
import styled from "styled-components";

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
`;
