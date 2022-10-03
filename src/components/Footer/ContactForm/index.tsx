import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "../../Button";
import { ThemeProvider } from "@mui/material/styles";
import muiTheme from "../../../styles/muiTheme";

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
  box-shadow: 2px 2px 4px #0000001f;
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
        <ThemeProvider theme={muiTheme}>
          <Input label="Nome" required variant="outlined" />
          <Input label="Escreva sua mensagem" required variant="outlined" multiline minRows={3} />
        </ThemeProvider>
        <Button primary={false} formSubmit type="submit">
          Enviar mensagem
        </Button>
      </ContactContainer>
    </>
  );
};

export default ContactForm;
