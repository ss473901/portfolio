import React from "react";
import { Header } from "../atoms/layout/Header";
import { Nav } from "../atoms/layout/Nav";
import { Footer } from "../atoms/layout/Footer";
import styled from "styled-components";

export const User = () => {
  return (
    <>
      <Header />
      <Nav />
      <SContainer></SContainer>
      <Footer />
    </>
  );
};

const SContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;
