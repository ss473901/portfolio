import styled from "styled-components";

export const Button = styled.button`
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
