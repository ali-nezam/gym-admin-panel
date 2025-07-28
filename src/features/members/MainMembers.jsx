import styled from "styled-components";
// import DashboardCoaches from "./DashboardCoaches";
// import TableHeader from "./TableHeader";
// import TablePagination from "./TablePagination";
import Spinner from "../../ui/Spinner";
import EmptyState from "../../ui/EmptyState";
import NotFound from "../../ui/NotFound";
import useGetMembers from "./useGetMembers";
import TableColumnHeaders from "./TableColumnHeaders";
import RowMembers from "./RowMembers";
import TablePagination from "../common/TablePagination";

// import formatPhoneNumber from "../../utils/formatPhoneNumber";
const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  margin-top: 2.4rem;
  padding: 2rem 3.2rem 2rem 3.2rem;
`;

function MainMembers() {
  //   console.log(formatPhoneNumber("09132106915"));

  // const { coaches, isLoading /*error*/ } = useCoaches();
  const { members, isLoading, count /*error*/ } = useGetMembers();
  //   console.log(members);
  // const members = {};
  if (isLoading) return <Spinner />;
  if (!members) return <NotFound />;
  if (Object.keys(members).length < 1) return <EmptyState />;
  return (
    <>
      {/* <DashboardCoaches /> */}
      <TableContainer>
        {/* <TableHeader /> */}
        <TableColumnHeaders />
        {members.map((member, index) => (
          <RowMembers member={member} key={member.id} index={index} />
        ))}
        <TablePagination count={count} type="members" />
      </TableContainer>
    </>
  );
}

export default MainMembers;
