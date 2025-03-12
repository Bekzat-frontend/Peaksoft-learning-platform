import React from "react";
import styled from "styled-components";
function Container({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}
const StyledDiv = styled.div`
  min-height: 100vh;
  background-color: #e8e8e8;
  color: white;
`;
export default Container;
