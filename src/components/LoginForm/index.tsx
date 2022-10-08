import * as React from "react";
import Button from "../Button";
import LoginFormContainer from "../Containers/LoginFormContainer";
import GreySection from "../GreySection";
import PasswordInput from "../PasswordField";
import TextFieldInput from "../TextField/styles";
import { Title18 } from "../Title";

const LoginForm = () => {
  return (
    <>
      <GreySection>
        <LoginFormContainer>
          <Title18>Iniciar Sessão</Title18>
          <TextFieldInput
            label="Digite seu e-mail"
            type="email"
            required
            fullWidth
          />
          <PasswordInput />
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
