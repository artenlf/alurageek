import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { SearchBarInput, SearchBarWrapper } from "./styles";

const SearchBar = () => {
  return (
    <SearchBarWrapper>
      <SearchBarInput placeholder="O que deseja encontrar?" />
      <BiSearchAlt2 size={24} color="#a2a2a2" />
    </SearchBarWrapper>
  );
};

export default SearchBar;
