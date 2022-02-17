import styled from "styled-components";
import img from "../../../images/footer.png";

export const Footer = () => {
  return <SImg />;
};

export default Footer;

const SImg = styled.div`
  width: 100vw;
  height: 600px;
  background-image: url(${img});
  background-size: cover;
  background-position: center top;
`;
