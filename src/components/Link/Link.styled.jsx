import styled from "styled-components";

export const LinkStyle = styled.a`
  color: ${props => props.$active ? "#000000" : "#FFFFFF"};
font-size: 16px;
  width: 100%;
  &:hover {
    color:#000;
  }
`;