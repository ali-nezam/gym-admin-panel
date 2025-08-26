import styled from "styled-components";
import Filter from "../../ui/Filter";

function DashboardHeader() {
  return (
    <StyledDashboardHeader>
      <h1>داشبورد</h1>
      <Filter options={["90 روز گذشته", "30 روز گذشته", "7 روز گذشته"]} />
    </StyledDashboardHeader>
  );
}

export default DashboardHeader;
const StyledDashboardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  h1 {
    color: #444;
  }
`;
