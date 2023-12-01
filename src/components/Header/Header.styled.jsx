import styled from "styled-components";

export const Box = styled.div`    
  display: flex;

  align-items: center;
  

  @media screen and (max-width: 768px) {
    padding: 13px 16px;
  }
  @media screen and (min-width: 768px) {
    padding: 13px 32px;
  }
  @media screen and (min-width: 1024px) {
    padding: 13px 60px;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
margin-left: auto;

  @media screen and (min-width: 360px) {
    gap: 10px;
  }
`;


