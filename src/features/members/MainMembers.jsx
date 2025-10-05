import { useState } from "react";
import styled from "styled-components";

import DashboardMembers from "./DashboardMembers";
import TableColumnHeaders from "./TableColumnHeaders";
import TableHeader from "./TableHeader";
import RowMembers from "./RowMembers";

import TablePagination from "../common/TablePagination";

import useGetMembers from "./useGetMembers";

import EmptyState from "../../ui/EmptyState";
import NotFound from "../../ui/NotFound";
import Spinner from "../../ui/Spinner";

function MainMembers() {
  const [statusFilter, setStatusFilter] = useState("all");
  const [statusSort, setStatusSort] = useState("created_at-asc");
  const [searchTerm, setSearchTerm] = useState("");

  const tableHeaderProps = {
    statusFilter,
    setStatusFilter,
    statusSort,
    setStatusSort,
    setSearchTerm,
    searchTerm,
  };

  const { members, isLoading, count /*error*/ } = useGetMembers(
    statusFilter,
    statusSort,
    searchTerm
  );
  // const members = {};
  if (isLoading) return <Spinner />;
  if (!members) return <NotFound />;

  return (
    <>
      <DashboardMembers />
      <TableContainer>
        <TableHeader {...tableHeaderProps} />
        <TableColumnHeaders />

        {isLoading ? (
          <Spinner />
        ) : Object.keys(members).length < 1 ? (
          <EmptyState text="برای جستجو مورد نظر اطلاعاتی ثبت نشده" />
        ) : (
          <>
            {members.map((member, index) => (
              <RowMembers member={member} key={member.id} index={index} />
            ))}
            <TablePagination count={count} type="members" />
          </>
        )}
      </TableContainer>
    </>
  );
}

export default MainMembers;

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  margin-top: 2.4rem;
  padding: 2rem 3.2rem 2rem 3.2rem;

  @media (max-width: 768px) {
    border-radius: 15px;
    padding: 1.2rem;
    margin-top: 0;
  }
`;
