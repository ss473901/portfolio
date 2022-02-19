import styled from "styled-components";
import { Label } from "../Lbel";

export const Meditation = () => {
  return (
    <SContainer>
      <Label>瞑想</Label>
    </SContainer>
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
