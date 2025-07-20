import styled from "styled-components";
import useCoaches from "./useCoaches";
import Spinner from "../../ui/Spinner";
import DashboardCoaches from "./DashboardCoaches";
import TableHeader from "./TableHeader";
import TablePagination from "./TablePagination";
import TableColumnHeaders from "./TableColumnHeaders";
import RowCoaches from "./RowCoaches";

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  margin-top: 2.4rem;
  padding: 2.4rem 3.2rem 2.4rem 3.2rem;
`;

function MainCoaches() {
  const { coaches, isLoading /*error*/ } = useCoaches();

  if (isLoading) return <Spinner />;

  return (
    <>
      <DashboardCoaches />
      <TableContainer>
        <TableHeader />
        <TableColumnHeaders />

        {coaches.map((coach, index) => (
          <RowCoaches coach={coach} key={coach.id} index={index} />
        ))}
        <TablePagination />
      </TableContainer>
    </>
  );
}

export default MainCoaches;
