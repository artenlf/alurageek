import { Wrapper } from "../Wrapper";
import SearchBar from "./SearchBar";
import Logo from "../Logo";
import CustomButton from "../Button";
import HeaderContainer from "./styles";
import Link from "next/link";

interface Props {
  showButton: boolean;
  home: boolean;
}

const Header = (props: Props) => {
  const { showButton, home } = props;
  return (
    <HeaderContainer>
      <Wrapper>
        <Logo />
        <SearchBar />
      </Wrapper>
      {showButton ? (
        home ? (
          <Link href="/login">
            <CustomButton className="white">Login</CustomButton>
          </Link>
        ) : (
          <Link href="/products">
            <CustomButton className="white bold">
              Menu administrador
            </CustomButton>
          </Link>
        )
      ) : (
        ""
      )}
    </HeaderContainer>
  );
};

export default Header;
