import styled from "styled-components";

export const Timer = () => {
  return (
    <>
      <SContainer>
        <SP>Pomodoro Timer</SP>
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

  border: 1px solid blue;
`;

const SP = styled.p`
  color: grey;
  font-weight: bold;

  border: 1px solid red;
`;
