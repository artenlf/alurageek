import Logo from "../Logo";
import ContactForm from "./ContactForm";
import LinkList from "./LinkList";
import { FooterContainer, FooterDeveloper, FooterSection } from "./styles";

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
