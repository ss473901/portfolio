import styled from "styled-components";
import img from "../../../images/headerImg.png";

export const HeaderImg = () => {
  return (
    <SHeader>
      <SImg src={img} alt="sun" />
    </SHeader>
  );
};

const SHeader = styled("header")({
  color: "#fff",
  textAlign: "center",
  padding: "8px 0",
});
const SImg = styled("img")({
  width: "100%",
});
