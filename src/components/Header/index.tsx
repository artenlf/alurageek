import { Wrapper } from "../Wrapper";
import SearchBar from "./SearchBar";
import Logo from "../Logo";
import Button from "../Button";
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
            <Button className="white">Login</Button>
          </Link>
        ) : (
          <Link href="/products">
            <Button className="white bold">Menu administrador</Button>
          </Link>
        )
      ) : (
        ""
      )}
    </HeaderContainer>
  );
};

export default Header;
