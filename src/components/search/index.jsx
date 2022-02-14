import React from 'react';
import { IoSearch } from 'react-icons/io5';
import { SearchBar, SearchIcon, FormControl } from './searchStyled';

const search = ({ value, name, placeholder, type, onChange, onKeyDown }) => {
  return (
    <SearchBar>
      <SearchIcon>
        <IoSearch />
      </SearchIcon>
      <FormControl
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </SearchBar>
  );
};

export default search;
