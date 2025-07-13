import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: #e9eaec;
  padding: 1.2rem 4.8rem;
  grid-column: 1/-1;
  border-bottom: 1px solid var(--colorgrey-100);
`;
function Header() {
  return <StyledHeader>header</StyledHeader>;
}

export default Header;
