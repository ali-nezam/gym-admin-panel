import styled, { css } from "styled-components";
import MainNavbar from "./MainNavbar";
import Logo from "./Logo";

function SideBar({ $isOpen, onToggleSidebar }) {
  return (
    <StyledSideBar $isOpen={$isOpen} onClick={onToggleSidebar}>
      <Logo />
      <MainNavbar />
    </StyledSideBar>
  );
}

export default SideBar;

const StyledSideBar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  padding: 2.4rem;

  grid-row: 1/-1;

  @media (max-width: 768px) {
    position: fixed;
    top: 7rem;
    top: 0;
    height: 100vh;
    width: 25rem;
    z-index: 1000;
    transform: translateX(100%);
    /* 👈 سایدبار در حالت بسته، کاملاً به سمت چپ میره */
    transition: all 0.3s cubic-bezier(0.86, 0, 0.07, 1);

    /* 👈 شرط نمایش: اگر isOpen='true' بود، به حالت نمایش در میاد */
    ${(props) =>
      props.$isOpen &&
      css`
        transform: translateX(0);
      `}
  }
`;
