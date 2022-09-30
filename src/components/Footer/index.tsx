import styled from "styled-components";
import Logo from "../Logo";
import ContactForm from "./ContactForm";
import LinkList from "./LinkList";

const FooterSection = styled.section`
  align-items: center;
  background-color: #eaf2fd;
  display: flex;
  justify-content: center;
  height: 470px;
  position: relative;
  top: 602px;
  width: 100vw;
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
  position: relative;
  top: 602px;
  width: 100vw;
  z-index: 1;
`;

const Footer = () => {
  return (
    <>
      <FooterSection>
        <FooterContainer>
          <Logo />
          <LinkList />
          <ContactForm />
        </FooterContainer>
      </FooterSection>
      <FooterDeveloper>Desenvolvido por artenlf 2022</FooterDeveloper>
    </>
  );
};

export default Footer;
