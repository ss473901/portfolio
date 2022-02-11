import styled from "styled-components";
import img from "../../../images/baloon.png";

export const Card = (props) => {
  const { children } = props;
  return (
    <SContainer>
      <SImg src={img} alt="baloon" />
      <SWrapper>
        <SCard>{children}</SCard>
      </SWrapper>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

const SWrapper = styled.div`
  width: 300px;
  height: 200px;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SCard = styled.div`
  border: 2px solid black;
  width: 93%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SImg = styled.img`
  width: 30px;
`;
