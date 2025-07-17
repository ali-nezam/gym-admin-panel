import { FaUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  padding: 2.4rem 2.4rem;
  /* grid-column: 1/-1; */
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
    padding-right: 2.4rem;
    padding-left: 2.4rem;

    transition: all 0.9s;
  }
  &:link svg,
  &:visited svg {
    color: var(--color-grey-500);
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
