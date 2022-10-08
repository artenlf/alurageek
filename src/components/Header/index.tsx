import styled from "styled-components";
import { Wrapper } from "../Wrapper";
import SearchBar from "./SearchBar";
import Logo from "../Logo";
import Button from "../Button";

const HeaderContainer = styled.header`
  align-items: center;
  box-sizing: border-box;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  height: 115px;
  padding: 0 152px;
  width: 100%;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Wrapper>
        <Logo />
        <SearchBar />
      </Wrapper>
      <Button primary={true} formSubmit={false} fullWidth={false}>
        Login
      </Button>
    </HeaderContainer>
  );
};

export default Header;
