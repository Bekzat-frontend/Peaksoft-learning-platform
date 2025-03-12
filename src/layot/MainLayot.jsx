import React from "react";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

function MainLayot() {
  return (
    <div>
      <NavBar />
      <StyledApp>
        <Header />
      </StyledApp>
      <StyledMain>
        <Outlet />
      </StyledMain>
    </div>
  );
}
const StyledApp = styled.div`
  margin-left: 240px;
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
`;
const StyledMain = styled.main`
  margin-left: 240px;
  color: black;
  height: 100vh;
  background-color: #f2f2f2;
  
`;

export default MainLayot;
