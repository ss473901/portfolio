import * as React from "react";
import { green } from "@mui/material/colors";
import Icon from "@mui/material/Icon";

import styled from "styled-components";

export const TextArea = () => {
  return (
    <>
      <SContainer>
        <SLabel>MEMO</SLabel>
        <STextarea />
        <Icon
          baseClassName="fas"
          className="fa-plus-circle"
          sx={{ color: green[500] }}
        />
      </SContainer>
    </>
  );
};
const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 1px blue solid;
`;

const SLabel = styled.label`
  display: block;
  text-align: left;
  color: grey;
  font-family: "Lobster", cursive;
  font-family: "Rampart One", cursive;
  font-weight: bold;

  border: 1px red solid;
`;

const STextarea = styled.textarea`
  max-width: 100%;
  border: none;
  line-height: 1.5;
  height: 120px;
  width: 270px;
  outline: none;
  resize: none;
  color: grey;
  font-family: "Rampart One", cursive;
  font-weight: bold;
  cursor: pointer;
  :hover {
    opacity: 0.7;
    filter: alpha(opacity=70);
    -ms-filter: "alpha(opacity=70";
  }

  border: 1px green solid;
`;
