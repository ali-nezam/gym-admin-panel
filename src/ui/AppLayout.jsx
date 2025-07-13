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
  grid-template-columns: 1fr 26rem;
  gap: 2.4rem;
  padding: 2.4rem;
  height: 100%;
`;

const ContentArea = styled.main`
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  padding: 3.2rem;
`;
function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <MainContent>
        <ContentArea>
          <Outlet />
        </ContentArea>
        <SideBar />
      </MainContent>
    </StyledAppLayout>
  );
}

export default AppLayout;
