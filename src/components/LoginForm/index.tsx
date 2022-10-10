import * as React from "react";
import Button from "../Button/styles";
import LoginFormContainer from "./styles";
import GreySection from "../GreySection";
import PasswordInput from "./PasswordField";
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
            autoComplete="email"
            required
            fullWidth
          />
          <PasswordInput />
          <Button className="full-width" type="submit">
            Entrar
          </Button>
        </LoginFormContainer>
      </GreySection>
    </>
  );
};

export default LoginForm;
