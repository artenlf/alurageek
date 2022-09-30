import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "../../Button";

const ContactContainer = styled.div`
  width: 560px;
`;

const Title = styled.h3`
  color: #464646;
  font-size: 16px;
  font-weight: 700;
  margin: 0;
`;

const Input = styled(TextField)`
  box-shadow: 1px 1px 1px 1px #0000001f;
  background-color: white;
  border-radius: 4px;
  margin: 8px auto;
  width: 560px;
`;

const ContactForm = () => {
  return (
    <>
      <ContactContainer>
        <Title>Fale conosco</Title>
        <Input label="Nome" required variant="outlined" />
        <Input label="Escreva sua mensagem" required variant="outlined" multiline minRows={3} />
        <Button primary={false} formSubmit type="submit">
          Enviar mensagem
        </Button>
      </ContactContainer>
    </>
  );
};

export default ContactForm;
