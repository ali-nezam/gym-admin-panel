import styled from "styled-components";
import { HiOutlineSearch, HiX } from "react-icons/hi";
import { useEffect, useState } from "react";

function SearchBox({
  placeholder = "جستجو...",
  type,
  setSearchTerm,
  searchTerm,
  mobiletype = "flex",
}) {
  const [localValue, setLocalValue] = useState("");

  useEffect(() => {
    setLocalValue(searchTerm || "");
  }, [searchTerm]);

  function handleSearch() {
    if (localValue.length > 2 || localValue.length === 0) {
      setSearchTerm(localValue);
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleSearch();
    }
  }
  function handleClear() {
    setLocalValue("");
    setSearchTerm("");
  }

  return (
    <>
      <SearchWrapper type={type} $mobiletype={mobiletype}>
        {localValue.length > 0 && (
          <ClearIcon onClick={handleClear}>
            <HiX />
          </ClearIcon>
        )}

        <SearchInput
          value={localValue}
          onChange={(e) => setLocalValue(e.target.value)}
          onKeyDown={handleKeyDown}
          type="text"
          placeholder={placeholder}
        />

        <SearchIcon onClick={handleSearch}>
          <HiOutlineSearch />
        </SearchIcon>
      </SearchWrapper>
    </>
  );
}

export default SearchBox;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #fafbff;
  border-radius: 8px;
  padding: 0.8rem 1.2rem;
  width: 23rem;
  background-color: ${(props) => props.type};
  display: ${(props) => props.$mobiletype};
`;

const SearchInput = styled.input`
  border: none;
  background: transparent;
  font-size: 1.4rem;
  flex: 1;
  direction: rtl;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #b5b7c0;
  }
`;

const SearchIcon = styled.button`
  transition: background 0.2s, color 0.2s, padding 0.2s;

  background-color: #fafbff;
  padding: 0.5rem;
  border-radius: 50%;
  border: none;
  color: #5932ea;
  cursor: pointer;
  font-size: 1.8rem;

  &:hover {
    background-color: #5932ea;
    color: #fff;
  }
`;
const ClearIcon = styled.button`
  transition: background 0.2s, color 0.2s, padding 0.2s;

  background-color: #fafbff;
  padding: 0.5rem;
  border-radius: 50%;
  border: none;
  color: #b5b7c0;
  cursor: pointer;
  font-size: 1.8rem;

  &:hover {
    background-color: #ffc9c9;
    color: #f03e3e;
  }
`;
