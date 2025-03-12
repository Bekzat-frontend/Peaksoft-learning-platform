import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { LuAirplay } from "react-icons/lu";

function NavBar() {
  return (
    <>
      <StyledNavWrapper>
        <StyledText>Peaksoft</StyledText>
        <StyledNavbar to="courses">
          <LuAirplay /> <StyledSpan> Мои курсы</StyledSpan>
        </StyledNavbar>

        <StyledNavbar to="announcement">Обьявления</StyledNavbar>

        <StyledNavbar to="basket">Корзина</StyledNavbar>

        <StyledNavbar to="schedule">Расписание</StyledNavbar>
      </StyledNavWrapper>
    </>
  );
}
const StyledSpan = styled.span`
  padding-left: 13px;
`;
const StyledText = styled.h1`
  margin: 8px 0px 25px;
  color: rgb(31, 110, 212);
  font-size: 35px;
  font-weight: 900;
`;
const StyledNavbar = styled(NavLink)`
  &:active {
    color: rgb(31, 110, 212);
    background: rgb(221, 233, 249);
    text-decoration: none;
  }
  &:hover {
    color: #05059e;
  }

  color: black;
  text-decoration: none;
  padding: 8px 16px 8px 24px;
  cursor: pointer;
  font-size: 18px;
  padding: 10px;
  color: #636161;
  text-decoration: none;
  transition: 0.3s;
  max-width: 240px;
  font-weight: 900;
`;

const StyledNavWrapper = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: column;
  background-color: white;
  height: 100vh;

  padding-left: 20px;
  padding-top: 120px;
`;

export default NavBar;
