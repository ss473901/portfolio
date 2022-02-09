import styled from "styled-components";
import img from "../../../images/footerImg.png";

const Footer = () => {
  return (
    <SFooter>
      <SImg src={img} alt="footer" />
    </SFooter>
  );
};

export default Footer;

const SFooter = styled("footer")({
  color: "fff",
  textAlign: "center",
  padding: "8px 0",
  position: "fixed",
  bottom: "0",
  width: "100%",
});

const SImg = styled("img")({
  width: "100%",
});
