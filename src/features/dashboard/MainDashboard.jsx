import styled from "styled-components";
// import DashboardHeader from "./DashboardHeader";
import DashboardCard from "./DashboardCard";
import Chart from "./Chart";
import RecentMembers from "./RecentMembers";
import SalesChart from "./SalesChart";

function MainDashboard() {
  return (
    <StyledAppLayout>
      <DashboardCard />
      <RecentMembers />
      <Chart />
      <SalesChart />
    </StyledAppLayout>
  );
}

export default MainDashboard;

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 35rem auto;
  gap: 3.2rem;
`;
