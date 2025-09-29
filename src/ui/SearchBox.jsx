import styled from "styled-components";
import { HiOutlineSearch } from "react-icons/hi";
import { useState } from "react";

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #fafbff;
  border-radius: 8px;
  padding: 0.8rem 1.2rem;
  width: 21rem;
  background-color: ${(props) => props.type};
`;

const SearchIcon = styled(HiOutlineSearch)`
  font-size: 1.8rem;
  color: #b5b7c0;
  margin-left: 0.8rem;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  font-size: 1.4rem;
  flex: 1;
  direction: rtl;

  &::placeholder {
    color: #b5b7c0;
  }
`;

function SearchBox({ placeholder = "جستجو...", type, setSearchTerm }) {
  const [localValue, setLocalValue] = useState("");

  function handleChange(e) {
    const value = e.target.value;
    setLocalValue(value);
    if (value.length > 3 || value.length === 0) {
      setSearchTerm(value);
    }
  }

  return (
    <SearchWrapper type={type}>
      <SearchIcon />
      <SearchInput
        value={localValue}
        onChange={handleChange}
        type="text"
        placeholder={placeholder}
      />
    </SearchWrapper>
  );
}

export default SearchBox;
