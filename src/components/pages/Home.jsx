import styled from "styled-components";
import { Nav } from "../atoms/layout/Nav";
import { Footer } from "../atoms/layout/Footer";
import { Card } from "../atoms/card/Card";
import { TextArea } from "../atoms/card/TextArea";
import { Header } from "../atoms/layout/Header";
import { Counter } from "../atoms/card/Counter";
import { Timer } from "../atoms/card/Timer";
import { Meditation } from "../atoms/card/Meditation";

export const Home = () => {
  return (
    <>
      <Header />
      <Nav />
      <SContainer>
        <Card>
          <TextArea />
        </Card>
        <Card>
          <Counter />
        </Card>
        <Card>
          <Timer />
        </Card>
        <Card>
          <Meditation />
        </Card>
      </SContainer>
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
