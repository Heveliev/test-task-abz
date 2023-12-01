import styled from "styled-components";

export const ItemUser = styled.li`
  background-color: #ffffff;
  width: 100%;
  border-radius: 10px;
  padding: 20px;
  font-size: 16px;
  @media screen and (min-width: 768px) {
    max-width: 344px; 
    flex-basis: calc((100% - 96px)/2);
  }
  @media screen and (min-width: 1024px) {
    max-width: 282px;
    flex-basis: calc((100% - 178px)/3);
  }
`;


export const Image = styled.img`
    border-radius: 50%;
    width: 70px;
    height: 70px;
    margin-bottom: 20px;
`;

export const Text = styled.p`
font-size: 16px;
`;
export const Name = styled.h3`
  font-size: 16px;
  margin-bottom: 20px;
  font-weight: 400;
`;

