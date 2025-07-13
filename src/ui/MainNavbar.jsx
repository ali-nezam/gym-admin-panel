import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  HiHome,
  HiMiniUser,
  HiOutlineAdjustmentsHorizontal,
} from "react-icons/hi2";
import { MdOutlineSports } from "react-icons/md";
import { CgGym } from "react-icons/cg";

const StyledNavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    gap: 2.4rem;
    align-items: center;
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.9s;

    /* color: #e9eaec; */
  }
  &:link svg,
  &:visited svg {
    /* color: var(--gray-grey-50); */
    color: #6c6c6c;
    width: 2.4rem;
    height: 2.4rem;
  }
`;

function MainNavbar() {
  return (
    <StyledNavList>
      <StyledNavLink>
        <HiHome />
        <span>داشبورد</span>
      </StyledNavLink>
      <StyledNavLink>
        <HiMiniUser />
        <span>اعضا</span>
      </StyledNavLink>
      <StyledNavLink>
        <MdOutlineSports />
        <span>مربی ها</span>
      </StyledNavLink>
      <StyledNavLink>
        <CgGym />
        <span>کلاس ها</span>
      </StyledNavLink>
      <StyledNavLink>
        {/* <HiCog /> */}
        <HiOutlineAdjustmentsHorizontal />
        {/* <HiOutlineCog8Tooth /> */}
        <span>تنظیمات</span>
      </StyledNavLink>
    </StyledNavList>
  );
}

export default MainNavbar;
