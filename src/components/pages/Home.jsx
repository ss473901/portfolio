import styled from "styled-components";
import { Card } from "../Atoms/card/Card";

export const Home = () => {
  const items = [
    "テストA",
    "テストB",
    "テストC",
    "テストD",
    "テストE",
    "テストF",
  ];
  return (
    <SContainer>
      <SWrapper>
        {items.map((item) => {
          return <Card key={item}>{item}</Card>;
        })}
      </SWrapper>
    </SContainer>
  );
};

const SContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
  height: "200px",
  margin: "0 auto",

});

const SWrapper = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  flexWrap: "wrap",
});
