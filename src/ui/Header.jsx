import { FaUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: #e9eaec;
  padding: 2.4rem 2.4rem;
  grid-column: 1/-1;
  border-bottom: 1px solid var(--colorgrey-100);
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    gap: 2rem;
    align-items: center;
    font-size: 2.6rem;
    font-weight: 700;
    padding: 1.2rem 2.4rem;
    transition: all 0.9s;

    /* color: #e9eaec; */
  }
  &:link svg,
  &:visited svg {
    /* color: var(--gray-grey-50); */
    color: #6c6c6c;
    width: 3.4rem;
    height: 3.4rem;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <StyledNavLink>
        <span>علی نظام</span>
        <FaUserCircle />
      </StyledNavLink>
    </StyledHeader>
  );
}

export default Header;
