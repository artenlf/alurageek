import styled from "styled-components";

const FooterSection = styled.section`
  align-items: center;
  background-color: #eaf2fd;
  display: flex;
  justify-content: center;
  height: 470px;
  width: 100%;
  z-index: 1;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 240px;
  width: 1136px;
`;

const FooterDeveloper = styled.p`
  align-items: center;
  color: #464646;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  height: 102px;
  margin: 0;
  width: 100%;
  z-index: 1;
`;

export { FooterSection, FooterContainer, FooterDeveloper };
