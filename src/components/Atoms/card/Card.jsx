import styled from "styled-components";
import img from "../../../images/baloon.png";

export const Card = (props) => {
  const { children } = props;
  return (
    <SContainer>
      <SImg src={img} alt="baloon" />
      <SWrapper>
        <SCard>{children}</SCard>
      </SWrapper>
    </SContainer>
  );
};

const SContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "5px",
});

const SWrapper = styled("div")({
  width: "480px",
  height: "300px",
  border: "2px solid black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const SCard = styled("div")({
  border: "2px solid black",
  width: " 93%",
  height: "90%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const SImg = styled("img")({
  width: "30px",
});