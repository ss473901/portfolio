import styled from "styled-components";
import img from "../../../images/header2.png";

export const Header = () => {
  return (
    <>
      <SImg />
    </>
  );
};

const SImg = styled.div`
  width: 100vw;
  height: 120px;
  background-image: url(${img});
  background-size: cover;
  background-position: center;
`;
