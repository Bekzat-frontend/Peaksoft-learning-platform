import React from "react";

import styled from "styled-components";
import { HiGlobeAlt } from "react-icons/hi";

function Header() {
  return (
    <StyledHeader>
      <StyledSpan>
        <HiGlobeAlt />
      </StyledSpan>
    </StyledHeader>
  );
}
const StyledHeader = styled.header`
  padding: 20px 0px;
  text-align: center;
  color: black;
  background-color: #f2f2f2;
  font-size: 30px;
  font-weight: 900;
  width: 103.3%;
  margin-left: -20px;
`;
const StyledSpan = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 100px;
`;
export default Header;
