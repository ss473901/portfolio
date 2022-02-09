import styled from "styled-components";
import TaskCard from "../organisms/TaskCard";

const Home = () => {
  return (
    <SContainer>
      <SCardArea>
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </SCardArea>
      <SCardArea>
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </SCardArea>
    </SContainer>
  );
};

const SContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "24px",
});

const SCardArea = styled("div")({
  padding: "40px",
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gridGap: "20px",
});

export default Home;
