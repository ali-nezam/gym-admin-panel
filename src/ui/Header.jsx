import styled from "styled-components";
import SearchBox from "./SearchBox";

const StyledHeader = styled.header`
  padding: 2.4rem 2.4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-self: start;
`;

function Header() {
  return (
    <StyledHeader>
      <h1>سلام علی 👋</h1>
      <SearchBox type="#fff" />
    </StyledHeader>
  );
}

export default Header;
