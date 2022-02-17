import { auth } from "../../../firebase";
import styled from "styled-components";

export const Nav = () => {
  return (
    <SUl>
      <SButton>HOME</SButton>
      <SButton onClick={() => auth.signOut()}>LOGOUT</SButton>
    </SUl>
  );
};

const SUl = styled.ul`
  text-align: center;
`;

const SButton = styled.button`
  display: inline-block;
  margin: 0 20px;
  text-decoration: underline;
  color: grey;
  font-weight: bold;
  font-family: "Rampart One", cursive;
  border: none;
  cursor: pointer;
  :hover {
    opacity: 0.7;
    filter: alpha(opacity=70);
    -ms-filter: "alpha(opacity=70";
  }
`;
