import { CustomButton } from "../../Button";
import { ThemeProvider } from "@mui/material/styles";
import muiTheme from "../../../styles/muiTheme";
import TextFieldInput from "../../TextField";
import { Title16 } from "../../Title";
import ContactContainer from "./styles";
import { TextFieldWrapper } from "../../Wrapper";

const ContactForm = () => {
  return (
    <>
      <ContactContainer>
        <Title16>Fale conosco</Title16>
        <ThemeProvider theme={muiTheme}>
          <TextFieldWrapper>
            <TextFieldInput
              label="Nome"
              required
              variant="outlined"
              fullWidth
            />
          </TextFieldWrapper>
          <TextFieldWrapper>
            <TextFieldInput
              label="Escreva sua mensagem"
              required
              variant="outlined"
              multiline
              minRows={3}
              fullWidth
            />
          </TextFieldWrapper>
        </ThemeProvider>
        <CustomButton type="submit">Enviar mensagem</CustomButton>
      </ContactContainer>
    </>
  );
};

export default ContactForm;
