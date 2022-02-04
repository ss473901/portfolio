import React from "react";
import "./App.css";
import Card from "./Card";
import CardContainer from "./CardContainer";
import Layout from "./Layout";

function App() {
  const items = [
    "テストA",
    "テストB",
    "テストC",
    "テストD",
    "テストE",
    "テストF",
  ];
  return (
    <Layout>
      <CardContainer>
        {items.map((item) => {
          return <Card key={item}>{item}</Card>;
        })}
      </CardContainer>
    </Layout>
  );
}

export default App;