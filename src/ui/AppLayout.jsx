import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import SideBar from "./SideBar";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
  background-color: #e9eaec;
`;

const MainContent = styled.main`
  display: grid;
  grid-template-columns: 26rem 1fr;
  gap: 2.4rem;
  padding: 2.4rem;
  height: 100%;
`;

const ContentArea = styled.main`
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  padding: 4.2rem;
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
