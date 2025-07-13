import styled from "styled-components";

const StyledSideBar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  height: 100%;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  padding: 2.4rem;
  position: relative;
`;

function SideBar() {
  return <StyledSideBar></StyledSideBar>;
}

export default SideBar;
