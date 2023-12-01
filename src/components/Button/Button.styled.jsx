import styled from "styled-components";



export const PrimaryButton = styled.button`
  background-color: ${props => props.$active ? "#F4E041" : "#B4B4B4"};
  color: ${props => props.$active ? "#000" : "#fff"};
  width: 100%;
  font-size: 16px;
  border-radius: 80px;
  text-align: center;
  line-height: 26px;

  

  @media screen and (min-width: 360px) {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 100px;
    max-width:140px;
    height: 34px;
  }
  @media screen and (min-width: 1024px) {  
  &:hover {
  background-color: #FFE302;
}
`;
