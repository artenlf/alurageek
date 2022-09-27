import styled from "styled-components";

interface Props {
  primary: boolean;
}

const Button = styled.button<Props>`
  background-color: ${(p) => (p.primary ? "#ffffff" : "#2a7ae4")};
  border: 1px solid ${(p) => (p.primary ? "#2a7ae4" : "#ffffff")};
  color: ${(p) => (p.primary ? "#2a7ae4" : "#ffffff")};
  font-family: Raleway;
  font-size: 16px;
  font-weight: 400;
  height: 51px;
  padding: 16px;
  width: 182px;
`;

export default Button;
