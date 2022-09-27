import React from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import Logo from "./Logo";
import Button from "../Button";

const Container = styled.header`
  align-items: center;
  background-color: #ffffff;
  display: flex;
  height: 115px;
  width: 100vw;
`;

const Header = () => {
  return (
    <Container>
      <Logo />
      <SearchBar />
      <Button>Login</Button>
    </Container>
  );
};

export default Header;
