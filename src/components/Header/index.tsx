import { Wrapper } from "../Wrapper";
import SearchBar from "./SearchBar";
import Logo from "../Logo";
import Button from "../Button/styles";
import HeaderContainer from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <Wrapper>
        <Logo />
        <SearchBar />
      </Wrapper>
      <Button className="white">Login</Button>
    </HeaderContainer>
  );
};

export default Header;
