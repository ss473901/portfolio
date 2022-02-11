import * as React from "react";
import styled from "styled-components";

export const TextArea = () => {
  return (
    <>
      <SContainer>
        <SLabel>MEMO</SLabel>
        <STextarea />
      </SContainer>
    </>
  );
};
const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const SLabel = styled.label`
  display: block;
  text-align: left;
  color: grey;
`;

const STextarea = styled.textarea`
  max-width: 100%;
  border: none;
  line-height: 1.5;
  height: 150px;
  width: 270px;
  outline: none;
  resize: none;
`;
