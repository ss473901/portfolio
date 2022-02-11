import styled from "styled-components";

export const Nav = () => {
  return (
    <SUl>
      <SLi>HOME</SLi>
      <SLi>LOGOUT</SLi>
    </SUl>
  );
};

const SUl = styled.ul`
  text-align: center;
`;

const SLi = styled.li`
  display: inline-block;
  margin: 0 20px;
  text-decoration: underline;
  color: grey;
  font-weight: bold;
  font-family: "Rampart One", cursive;
`;
