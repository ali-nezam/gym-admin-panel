import styled from "styled-components";
import MainNavbar from "./MainNavbar";
import Logo from "./Logo";

const StyledSideBar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
  /* height: 100%; */
  background-color: var(--color-grey-50);
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  padding: 2.4rem;

  grid-row: 1/-1;
  //new code from ai for fix bug for scroll jus content
  /* overflow-y: auto; */
`;

function SideBar() {
  return (
    <StyledSideBar>
      <Logo />
      <MainNavbar />
    </StyledSideBar>
  );
}

export default SideBar;
