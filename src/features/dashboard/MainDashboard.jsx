import styled from "styled-components";
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
  grid-column: 1/-1;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* موبایل: تک ستونه */
    grid-template-rows: auto; /* حذف تعریف ردیف‌های ثابت */
    gap: 1.6rem; /* کاهش فاصله بین المان‌ها در موبایل */
    padding-bottom: 4rem;
  }
`;
