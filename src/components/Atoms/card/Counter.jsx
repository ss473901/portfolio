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
      <SContainer>
        <p>{count}</p>
        <button onClick={onClickCountUp}>カウントアップ</button>
        <button onClick={onClickCountReset}>リセット</button>
      </SContainer>
    </>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;
