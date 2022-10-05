import Button from "../Button";
import FormContainer from "../Containers";
import FormSection from "../FormSection";
import TextFieldInput from "../TextField";
import { Title18 } from "../Title";

const formLabels = ["Digite seu e-mail", "Digite sua senha"];

const LoginForm = () => {
  return (
    <>
      <FormSection>
        <FormContainer>
          <Title18>Iniciar Sessão</Title18>
          {formLabels.map((label, index) => (
            <TextFieldInput key={index} label={label} required />
          ))}
          <Button
            primary={false}
            formSubmit={true}
            fullWidth={true}
            type="submit"
          >
            Entrar
          </Button>
        </FormContainer>
      </FormSection>
    </>
  );
};

export default LoginForm;
