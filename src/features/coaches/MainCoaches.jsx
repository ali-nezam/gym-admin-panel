import { useState } from "react";
import styled from "styled-components";

import DashboardCoaches from "./DashboardCoaches";
import TableHeader from "./TableHeader";
import TableColumnHeaders from "./TableColumnHeaders";
import RowCoaches from "./RowCoaches";

import TablePagination from "../common/TablePagination";

import useCoaches from "./useCoaches";

import EmptyState from "../../ui/EmptyState";
import Spinner from "../../ui/Spinner";
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
  const [statusFilter, setStatusFilter] = useState("all");
  const [statusSort, setStatusSort] = useState("created_at-asc");
  const [searchTerm, setSearchTerm] = useState("");

  const tableHeaderProps = {
    statusFilter,
    setStatusFilter,
    statusSort,
    setStatusSort,
    setSearchTerm,
  };

  const { coaches, isLoading, count /*error*/ } = useCoaches(
    statusFilter,
    statusSort,
    searchTerm
  );

  // const coaches = {};
  if (isLoading) return <Spinner />;
  if (!coaches) return <NotFound />;
  if (Object.keys(coaches).length < 1) return <EmptyState />;
  return (
    <>
      <DashboardCoaches />
      <TableContainer>
        <TableHeader {...tableHeaderProps} />
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
