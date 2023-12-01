import styled from "styled-components";


export const UsersSections = styled.section`
  background-color: #F8F8F8;
  padding: 140px 16px;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;


  @media screen and (min-width: 768px) {
    padding:  140px 32px;
  }
  @media screen and (min-width: 1024px) {
    padding:  140px 60px;
  }
`;


export const Title = styled.h2`
  font-size: 40px;
  line-height: 40px;
  margin-bottom: 50px;
  color: #000000;
`;

export const ListUsers = styled.ul`
  list-style: none;
  margin-top: 0;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  row-gap: 20px;
  margin-bottom: 50px;

  @media screen and (min-width: 768px) {
    flex-wrap: wrap;
    gap: 16px;
  }
  @media screen and (min-width: 1024px) {
    gap: 29px;
  }
  
`;





