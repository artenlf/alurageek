import CustomButton from "../../Button";
import { ThemeProvider } from "@mui/material/styles";
import muiTheme from "../../../styles/muiTheme";
import TextFieldInput from "../../TextField";
import { Title16 } from "../../Title";
import ContactContainer from "./styles";

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
        <CustomButton type="submit">Enviar mensagem</CustomButton>
      </ContactContainer>
    </>
  );
};

export default ContactForm;
