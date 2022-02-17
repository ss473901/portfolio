import styled from "styled-components";
import { Header } from "../Atoms/layout/Header";
import { Footer } from "../Atoms/layout/Footer";
import { HeaderImg } from "../Atoms/layout/HeaderImg";

export const DefaultLayout = (props) => {
  const { children } = props;

  return (
    <SRoot>
      <HeaderImg />
      <Header />
      {children}
      {/* <Footer /> */}
    </SRoot>
  );
};

const SRoot = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  height: "100%",
});
