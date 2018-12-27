import React from "react";
import { Search as SWrap, SearchGlass } from "./styles";

const Search = ({ search, handleSearch }) => (
  <SWrap {...{ search }}>
    <input type="text" value={search} onChange={handleSearch} />
    <SearchGlass icon="search" />
  </SWrap>
);

export default Search;
