import styled from "styled-components";
import {Field, Form,ErrorMessage} from "formik";

export const FormSections = styled.section`
  background-color: #F8F8F8;
  padding: 140px 16px;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;


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

export const FormStyle = styled(Form)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
row-gap: 50px;
  @media screen and (min-width: 768px) {
    flex-direction: column;
  justify-content: center;
    align-items: center;
  }
`;



export const Input = styled(Field)`
    width:314px;
    border-radius: 4px;
    border: 1px solid #D0CFCF;
    padding: 14px 0 14px 16px;
`;

export const PhoneExample = styled.p`
    font-size: 12px;
    line-height: 14px;
    color: #7E7E7E;
  text-align: start;
  margin-left: 16px;
`;

export const PositionBox = styled.div`
    text-align: start;
`;

export const PositionTitle =styled.h3`
    font-weight: 400;
  font-size: 16px;
  line-height: 26px;
`;

export const PositionLabel = styled.label`
    display: flex;
    flex-wrap: wrap;
`;


export const FileButton = styled(Field)`
  opacity: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  position: absolute;
  top: 0;
  left: 0;
`;

export const FileBox = styled.div`
  width:314px;
  border-radius: 4px;
  border: 1px solid #D0CFCF;
  padding: 14px 0 14px 16px;
  color:#7E7E7E;
  font-size: 16px;
  line-height: 26px;
  position: relative;
`;

export const UploadText = styled.p`
  color: #000;
  position: absolute;
  left: -1px;
  top: -1px;
  display: flex;
  align-items: center;
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
  justify-content: center;
  border: 1px solid #000;
  height:54px;
  width: 83px;
  z-index: 2;

`;

export const ButtonBox = styled.div`
margin-left: auto;
  margin-right: auto;
`;

export const ErrorMessageStyle = styled(ErrorMessage)`
color:red;
`;
