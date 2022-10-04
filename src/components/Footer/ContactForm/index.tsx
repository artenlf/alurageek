import styled from "styled-components";
import Button from "../../Button";
import { ThemeProvider } from "@mui/material/styles";
import muiTheme from "../../../styles/muiTheme";
import TextFieldInput from "../../TextField";

const ContactContainer = styled.div`
  width: 560px;
`;

const Title = styled.h3`
  color: #464646;
  font-size: 16px;
  font-weight: 700;
  margin: 0;
`;

const ContactForm = () => {
  return (
    <>
      <ContactContainer>
        <Title>Fale conosco</Title>
        <ThemeProvider theme={muiTheme}>
          <TextFieldInput label="Nome" required variant="outlined" />
          <TextFieldInput
            label="Escreva sua mensagem"
            required
            variant="outlined"
            multiline
            minRows={3}
          />
        </ThemeProvider>
        <Button primary={false} formSubmit fullWidth={false} type="submit">
          Enviar mensagem
        </Button>
      </ContactContainer>
    </>
  );
};

export default ContactForm;
