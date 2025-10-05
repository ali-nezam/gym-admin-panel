import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import SideBar from "./SideBar";
import { useState } from "react";

function AppLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen((open) => !open);
  return (
    <StyledAppLayout>
      <Header onToggleSidebar={toggleSidebar} />

      <ModalOverlay $isOpen={isSidebarOpen} onClick={toggleSidebar} />

      <SideBar $isOpen={isSidebarOpen} onToggleSidebar={toggleSidebar} />
      <MainContent>
        <Outlet />
      </MainContent>
    </StyledAppLayout>
  );
}

export default AppLayout;

const StyledAppLayout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 30rem 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-rows: 1fr auto;
  grid-template-rows: auto 1fr;

  background-color: #f8f9fc;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const MainContent = styled.main`
  overflow-y: auto;

  //new code from ai for fix dealy scroll
  scroll-behavior: smooth;
  will-change: scroll-position;
  -webkit-overflow-scrolling: touch;
  padding: 2.4rem;

  @media (max-width: 768px) {
    padding: 1.2rem;
  }
`;

const ModalOverlay = styled.div`
  display: none; /* در دسکتاپ مخفی */

  @media (max-width: 768px) {
    /* نمایش فقط در موبایل */
    display: ${(props) => (props.$isOpen ? "block" : "none")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* رنگ تیره و شفاف */
    z-index: 999; /* زیر سایدبار (1000) */
    cursor: pointer;
  }
`;
