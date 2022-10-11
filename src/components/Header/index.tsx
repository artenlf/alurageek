import { Wrapper } from "../Wrapper";
import SearchBar from "./SearchBar";
import Logo from "../Logo";
import Button from "../Button/styles";
import HeaderContainer from "./styles";
import Link from "next/link";

const Header = () => {
  return (
    <HeaderContainer>
      <Wrapper>
        <Logo />
        <SearchBar />
      </Wrapper>
      <Link href="/login">
        <Button className="white">Login</Button>
      </Link>
    </HeaderContainer>
  );
};

export default Header;
