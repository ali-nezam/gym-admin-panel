import styled from "styled-components";
import useCoaches from "./useCoaches";
import Spinner from "../../ui/Spinner";
import DashboardCoaches from "./DashboardCoaches";
import TableHeader from "./TableHeader";
import TablePagination from "../common/TablePagination";
import TableColumnHeaders from "./TableColumnHeaders";
import RowCoaches from "./RowCoaches";
// import NoContent from "../../ui/NoContent";
import EmptyState from "../../ui/EmptyState";
import NotFound from "../../ui/NotFound";
const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  margin-top: 2.4rem;
  padding: 2rem 3.2rem 2rem 3.2rem;
`;

function MainCoaches() {
  const { coaches, isLoading, count /*error*/ } = useCoaches();
  // const coaches = {};
  if (isLoading) return <Spinner />;
  if (!coaches) return <NotFound />;
  if (Object.keys(coaches).length < 1) return <EmptyState />;
  return (
    <>
      <DashboardCoaches />
      <TableContainer>
        <TableHeader />
        <TableColumnHeaders />
        {coaches.map((coach, index) => (
          <RowCoaches coach={coach} key={coach.id} index={index} />
        ))}
        <TablePagination count={count} type="coaches" />
      </TableContainer>
    </>
  );
}

export default MainCoaches;
