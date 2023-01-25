import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #fafafb;
`;

export const SubContainer = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 3rem;
  font-size: 2rem;
  text-align: center;
`;

export const Heading = styled.h1`
  font-weight: 500;
  font-size: 2.8rem;
  line-height: 27px;
  letter-spacing: -0.035em;
  color: #4F4F4F;
`;

export const SubHeading = styled.h2`
  font-weight: 500;
  font-size: 1.7rem;
  line-height: 15px;
  letter-spacing: -0.035em;
  color: #828282;
  margin: 2rem 0 3rem 0;
`;


export const UploadLabel = styled.label`
  display: block;
  background-color: #f6f8fb;
  background-color: ${props => props.isFileDragging ? "#000" : "#f6f8fb"};
  border: 1px dashed #97BEF4;
  width: 100%;
  cursor: pointer;
  padding: 5rem 8rem;
  border-radius: 8px;

  svg{
    width: 12rem;
    height: 12rem;
    fill: #828282;
  }

  p{
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 18px;
    letter-spacing: -0.035em;
    color: #BDBDBD;
  }
`