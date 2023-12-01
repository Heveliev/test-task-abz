import styled from "styled-components";
import hero_img from "../../assets/hero_img.jpeg";

export const HeroSection = styled.section`
  background-image:linear-gradient(rgba(47, 48, 58, 0.4),rgba(47, 48, 58, 0.5)), url(${hero_img});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
`;

export const BoxImage = styled.div`
  padding: 40px 16px 71px 16px;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (min-width: 768px) {
    padding: 89px 194px 154px 194px;
  }
  @media screen and (min-width: 1024px) {
    padding: 164px 322px;
  }

`;

export const MainTitle = styled.h1`
    font-size: 40px;
    line-height: 40px;
    color:#FFFFFF;
    width: 100%;
`;

export const HeroInfo = styled.p`
  font-size: 16px;
  line-height: 26px;
  margin-bottom: 32px;
  color:#FFFFFF;
`;