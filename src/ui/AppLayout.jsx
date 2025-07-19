import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import SideBar from "./SideBar";

const StyledAppLayout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 30rem 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-rows: 1fr auto;

  background-color: #f8f9fc;
`;

const MainContent = styled.main`
  overflow-y: auto;

  //new code from ai for fix dealy scroll
  scroll-behavior: smooth;
  will-change: scroll-position;
  -webkit-overflow-scrolling: touch;
  padding: 2.4rem;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <SideBar />
      <MainContent>
        <Outlet />
      </MainContent>
    </StyledAppLayout>
  );
}

export default AppLayout;
