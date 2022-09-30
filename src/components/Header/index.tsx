import styled from "styled-components";
import Wrapper from "../Wrapper";
import SearchBar from "./SearchBar";
import Logo from "../../Logo";
import Button from "../Button";

const HeaderContainer = styled.header`
  align-items: center;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  height: 115px;
  padding: 0 152px;
  width: 100vw;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Wrapper>
        <Logo />
        <SearchBar />
      </Wrapper>
      <Button primary={true}>Login</Button>
    </HeaderContainer>
  );
};

export default Header;
