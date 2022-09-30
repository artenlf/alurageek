import styled from "styled-components";

interface Props {
  primary: boolean;
  formSubmit: boolean;
}

const Button = styled.button<Props>`
  align-items: center;
  background-color: ${(p) => (p.primary ? "#ffffff" : "#2a7ae4")};
  border: 1px solid #2a7ae4;
  color: ${(p) => (p.primary ? "#2a7ae4" : "#ffffff")};
  display: flex;
  font-family: Raleway;
  font-size: 16px;
  font-weight: 400;
  justify-content: center;
  height: 51px;
  width: ${(p) => (p.primary ? "182px" : p.formSubmit ? "182px" : "130px")};
`;

export default Button;
