import styled from "styled-components";
import Image from "next/image";

const LogoContainer = styled.div`
  margin-right: 32px;
`;

const Logo = () => {
  return (
    <LogoContainer>
      <Image src="/Logo.svg" alt="Logo da AluraGeek" width={176} height={50} />
    </LogoContainer>
  );
};

export default Logo;
