import styled from "styled-components";
import Image from "next/image";

const LogoContainer = styled.div`
  margin-right: 32px;
  :hover {
    cursor: pointer;
  }
`;

const Logo = () => {
  return (
    <LogoContainer>
      <Image src="/Logo.svg" alt="Logo da AluraGeek" width={176} height={50} />
      <a href="#"></a>
    </LogoContainer>
  );
};

export default Logo;
