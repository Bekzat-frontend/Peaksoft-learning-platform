import React from "react";
import styled from "styled-components";
import Pagination from "./Pagination";

function Material() {
  return (
    <StyledDiv>
      <StyledDivHome>
        <StyledLesson style={{ marginTop: "35px" }}>
          1 Lesson - 1 What is library / framework / nodeJS / n
        </StyledLesson>
        <StyledLesson style={{ marginTop: "35px" }}>
          2 Lesson 2 - Components and Props
        </StyledLesson>
        <StyledLesson>3 Lesson - 3 GIT & GITHUB</StyledLesson>
        <StyledLesson>
          4 Lesson - 4 useState() | expense app | Чыгымдар т
        </StyledLesson>
        <StyledLesson>
          5 Lesson - 5 Reconciliation, Stateful vs Stateless, C
        </StyledLesson>
        <StyledLesson>
          6 Lesson - 6 State Batch | Lifting state up | Children
        </StyledLesson>
      </StyledDivHome>
      <Pagination />
    </StyledDiv>
  );
}

const StyledDivHome = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 3fr);
  gap: 50px;
`;
const StyledLesson = styled.div`
  background-color: #dde9f9;
  padding: 10px;
  width: 85%;
  border-radius: 8px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  margin-left: 40px;
  height: 80px;
  font-size: 21px;
  font-weight: 750;
  margin-top: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledDiv = styled.div`
  background-color: white;

  margin-left: 21px;
  width: 98%;
  height: 90vh;
`;

export default Material;
