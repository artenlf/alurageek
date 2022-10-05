import styled from "styled-components";
import Button from "../../Button";
import { ThemeProvider } from "@mui/material/styles";
import muiTheme from "../../../styles/muiTheme";
import TextFieldInput from "../../TextField";
import { Title16 } from "../../Title";

const ContactContainer = styled.div`
  width: 560px;
`;

const ContactForm = () => {
  return (
    <>
      <ContactContainer>
        <Title16>Fale conosco</Title16>
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
