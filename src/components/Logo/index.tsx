import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const LogoContainer = styled.div`
  margin-right: 32px;
  :hover {
    cursor: pointer;
  }
`;

const Logo = () => {
  return (
    <Link href="/">
      <LogoContainer>
        <Image
          src="/Logo.svg"
          alt="Logo da AluraGeek"
          width={176}
          height={50}
        />
      </LogoContainer>
    </Link>
  );
};

export default Logo;
