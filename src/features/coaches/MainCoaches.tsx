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
import { StatusFilterType, StatusSortType } from "../../types/coaches";

function MainCoaches() {
  const [statusFilter, setStatusFilter] = useState<StatusFilterType>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [statusSort, setStatusSort] =
    useState<StatusSortType>("created_at-asc");

  const tableHeaderProps = {
    statusFilter,
    setStatusFilter,
    statusSort,
    setStatusSort,
    setSearchTerm,
    searchTerm,
  };

  const { coaches, isLoading, count /*error*/ } = useCoaches(
    statusFilter,
    statusSort,
    searchTerm
  );

  // const coaches = {};
  if (isLoading) return <Spinner />;
  if (!coaches) return <NotFound />;

  return (
    <>
      <DashboardCoaches />
      <TableContainer>
        <TableHeader {...tableHeaderProps} />
        <TableColumnHeaders />

        {isLoading ? (
          <Spinner />
        ) : Object.keys(coaches).length < 1 ? (
          <EmptyState text="برای جستجو مورد نظر اطلاعاتی ثبت نشده" />
        ) : (
          <>
            {coaches.map((coach, index) => (
              <RowCoaches coach={coach} key={coach.id} index={index} />
            ))}

            <TablePagination count={count} type="coaches" />
          </>
        )}
      </TableContainer>
    </>
  );
}

export default MainCoaches;

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
