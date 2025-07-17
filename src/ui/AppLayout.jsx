import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import SideBar from "./SideBar";

const StyledAppLayout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  background-color: var(--color-grey-200);
  background-color: #292f36;
  background-color: #fcf9f2;

  //new code from ai for fix bug for scroll jus content
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const MainContent = styled.main`
  display: grid;
  grid-template-columns: 26rem 1fr;
  gap: 2.4rem;
  padding: 0 2.4rem 2.4rem 2.4rem;

  //new code from ai for fix bug for scroll jus content
  flex: 1;
  overflow: hidden;
`;

const ContentArea = styled.main`
  //new code from ai for fix bug for scroll jus content
  overflow-y: auto;

  //new code from ai for fix dealy scroll
  scroll-behavior: smooth;
  will-change: scroll-position;
  -webkit-overflow-scrolling: touch;
  contain: paint;
`;
function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <MainContent>
        <SideBar />
        <ContentArea>
          <Outlet />
        </ContentArea>
      </MainContent>
    </StyledAppLayout>
  );
}

export default AppLayout;
