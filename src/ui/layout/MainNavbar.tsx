import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  HiChevronLeft,
  HiHome,
  HiMiniUser,
  HiOutlineAdjustmentsHorizontal,
} from "react-icons/hi2";
import { MdOutlineSports } from "react-icons/md";
import { CgGym } from "react-icons/cg";

function MainNavbar() {
  return (
    <StyledNavList>
      <StyledNavLink to="/dashboard">
        <HiHome />
        <span>داشبورد</span>
        <HiChevronLeft />
      </StyledNavLink>
      <StyledNavLink to="/members">
        <HiMiniUser />
        <span>اعضا</span>
        <HiChevronLeft />
      </StyledNavLink>

      <StyledNavLink to="/coaches">
        <MdOutlineSports />
        <span>مربی ها</span>
        <HiChevronLeft />
      </StyledNavLink>

      <StyledNavLink to="/Enrollments">
        <CgGym />
        <span>کلاس ها</span>
        <HiChevronLeft />
      </StyledNavLink>
      <StyledNavLink to="/settings">
        <HiOutlineAdjustmentsHorizontal />
        <span>تنظیمات</span>
        <HiChevronLeft />
      </StyledNavLink>
    </StyledNavList>
  );
}

export default MainNavbar;

const StyledNavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  color: #9197b3;
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
    border-radius: 8px;

    transition: all 0.9s;
  }

  span {
    flex: 1;
  }

  &:link svg,
  &:visited svg {
    color: #9197b3;
    width: 2.4rem;
    height: 2.4rem;
    flex-shrink: 0;
  }
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: rgba(0.47 0.157 37.304);
    color: #ffffff;
    background-color: #5932ea;
    border-radius: 8px;
  }
  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: rgba(0.47 0.157 37.304);
    color: #ffffff;
  }
  svg:last-of-type {
    margin-right: auto; /* این باعث میشه فلش بره سمت چپ */
    width: 1.6rem;
    height: 1.6rem;
  }
`;
