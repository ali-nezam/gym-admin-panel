import styled from "styled-components";
import DashboardHeader from "./DashboardHeader";
import DashboardCard from "./DashboardCard";
import Chart from "./Chart";

const StyledAppLayout = styled.div`
  /* flex-grow: 1; */
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

function MainDashboard() {
  return (
    <StyledAppLayout>
      <DashboardHeader />
      <DashboardCard />
      <Chart />
    </StyledAppLayout>
  );
}

export default MainDashboard;
