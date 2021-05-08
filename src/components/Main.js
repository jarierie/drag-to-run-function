import styled from "styled-components";
import Circle from "./Circle";

const MainContainer = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0d0d0d;
  user-select: none;
`;

const Main = () => {
  return (
    <>
      <MainContainer>
        <Circle></Circle>
      </MainContainer>
    </>
  );
};

export default Main;
