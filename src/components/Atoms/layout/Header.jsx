import styled from "styled-components";

export const Header = () => {
  return (
    <SHeader>
      <SP>HOME</SP>
      <SP>LOGOUT</SP>
    </SHeader>
  );
};

const SHeader = styled("header")({
  textAlign: "center",
  padding: "8px 0",
  display: "flex",
});

const SP = styled("p")({
  margin: "0 8px",
  textDecoration: "underline",
  color: "grey",
});
