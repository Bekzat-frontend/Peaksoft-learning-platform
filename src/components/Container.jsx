import React from "react";
import styled from "styled-components";
function Container({ children }) {
  return <StyledDiv>{children}
  </StyledDiv>;
}
const StyledDiv = styled.div`
  min-height: 100vh;

  color: white;
`;
export default Container;
