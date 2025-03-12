import React from "react";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Breadcrumbs from "../components/BreadCrumbs";

function CoursesLayout() {
  return (
    <Container>
      <HeaderContainer>
        <StyledNav>
          <StyledNavbar to="material">Материалы</StyledNavbar>

          <StyledNavbar to="student">Студенты</StyledNavbar>
          <StyledNavbar to="raiting">Рейтинг студентов</StyledNavbar>
        </StyledNav>
      </HeaderContainer>
      <BreadcrumbsWrapper>
        <Breadcrumbs />
      </BreadcrumbsWrapper>

      <Content>
        <Outlet />
      </Content>
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 50px;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f2f2f2;
  padding: 15px 20px;
  border-bottom: 1px solid #ccc;
`;
const StyledNav = styled.nav`
  margin-bottom: 30px;
  margin-top: -50px;
`;
const StyledNavbar = styled(NavLink)`
  color: #adaaaa;
  text-decoration: none;
  padding: 10px 16px;
  font-size: 18px;
  transition: 0.4s;
  margin-right: 15px;

  &:hover {
    color: rgb(31, 110, 212);
  }

  &.active {
    color: rgb(31, 110, 212);
    border-bottom: 3px solid rgb(31, 110, 212);
  }
`;

const BreadcrumbsWrapper = styled.div`
  flex-grow: 1;
  text-align: start;
`;

const Content = styled.div`
  padding: 20px;
`;

export default CoursesLayout;
