import styled from "styled-components";
import img from "../../../images/footerImg.png";

export const Footer = () => {
  return <SFooter></SFooter>;
};

export default Footer;

const SFooter = styled.div`
  color: #fff;
  text-align: center;
  padding: 8px 0;
  height: 600px;
  background-image: url(${img});
  width: 100vw;
`;

// color: #fff;
// textAlign: "center",
// padding: "8px 0",
// position: "fixed",
// bottom: "0",
// height: "600px",
// backgroundImage: "url(../../../images/footerImg.png)",
