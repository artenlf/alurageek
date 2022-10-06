import Button from "../Button";
import LoginFormContainer from "../Containers/LoginFormContainer";
import GreySection from "../GreySection";
import TextFieldInput from "../TextField";
import { Title18 } from "../Title";

const formLabels = ["Digite seu e-mail", "Digite sua senha"];

const LoginForm = () => {
  return (
    <>
      <GreySection>
        <LoginFormContainer>
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
        </LoginFormContainer>
      </GreySection>
    </>
  );
};

export default LoginForm;
