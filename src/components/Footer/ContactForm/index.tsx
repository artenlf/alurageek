import styled from "styled-components";
import Button from "../../Button";
import { ThemeProvider } from "@mui/material/styles";
import muiTheme from "../../../styles/muiTheme";
import TextFieldInput from "../../TextField/styles";
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
          <TextFieldInput label="Nome" required variant="outlined" fullWidth />
          <TextFieldInput
            label="Escreva sua mensagem"
            required
            variant="outlined"
            multiline
            minRows={3}
            fullWidth
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
