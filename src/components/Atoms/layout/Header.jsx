import styled from "styled-components";
import img from "../../../images/headerImg.png";

const Header = () => {
  return (
    <SHeader>
      <SImg src={img} alt="sun" />
    </SHeader>
  );
};

export default Header;

const SHeader = styled("header")({
  color: "#fff",
  textAlign: "center",
  padding: "8px 0",
});
const SImg = styled("img")({
  width: "100%",
});
