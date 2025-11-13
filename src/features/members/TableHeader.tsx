import styled from "styled-components";
import SearchBox from "../../ui/SearchBox";
import { StatusFilterType, StatusSortType } from "../../types/member";

interface TableHeaderProps {
  statusFilter: StatusFilterType;
  setStatusFilter: (value: StatusFilterType) => void;
  statusSort: StatusSortType;
  setStatusSort: (value: StatusSortType) => void;
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

// interface InstructionType {
//   filtertextcolor: string;
//   filterText: string;
// }

function TableHeader({
  statusFilter,
  setStatusFilter,
  statusSort,
  setStatusSort,
  setSearchTerm,
  searchTerm,
}: TableHeaderProps) {
  const { filtertextcolor, filterText } = instructions[statusFilter];

  return (
    <StyledTableHeader>
      <TableHeaderTitle $color={filtertextcolor}>
        <h3>اعضا</h3>
        {filterText && <p>{filterText}</p>}
      </TableHeaderTitle>

      <Filter>
        <FilterButton
          onClick={() => setStatusFilter("all")}
          selected={statusFilter === "all"}
        >
          همه
        </FilterButton>

        <FilterButton
          onClick={() => setStatusFilter("active")}
          selected={statusFilter === "active"}
        >
          فعال
        </FilterButton>

        <FilterButton
          onClick={() => setStatusFilter("expired")}
          selected={statusFilter === "expired"}
        >
          منقضی شده
        </FilterButton>

        <FilterButton
          onClick={() => setStatusFilter("gold")}
          selected={statusFilter === "gold"}
        >
          طلایی
        </FilterButton>
      </Filter>

      <Sort
        value={statusSort}
        onChange={(e) => setStatusSort(e.target.value as StatusSortType)}
      >
        <option value="created_at_asc">جدیدترین</option>
        <option value="end_date_asc">پایان عضویت</option>
        <option value="name_asc">نام ( الف - ی)</option>
        <option value="name_desc">نام ( ی - الف)</option>
      </Sort>

      <SearchBox
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
        mobiletype="none"
      />
    </StyledTableHeader>
  );
}

export default TableHeader;

const instructions = {
  active: { filtertextcolor: "#37b24d", filterText: "اشتراک های فعال" },
  expired: { filtertextcolor: "#868e96", filterText: "اشتراک های منقضی شده" },
  gold: { filtertextcolor: "#FFD700", filterText: "اشتراک های طلایی " },
  all: { filtertextcolor: "#b5b7c0", filterText: "" },
};

const StyledTableHeader = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 1fr auto auto auto;
  gap: 4.6rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.6rem;
    padding-bottom: 1.6rem;
  }
`;
const TableHeaderTitle = styled.div<{ $color: string }>`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  h3 {
    color: #000;
    font-size: 2.2rem;
    font-weight: 800;
  }

  p {
    font-size: 1.4rem;
    font-weight: 500;
    color: ${({ $color }) => $color};
  }
  @media (max-width: 768px) {
    margin-bottom: 0.8rem;
    h3 {
      font-size: 1.8rem;
    }
  }
`;

const Sort = styled.select`
  padding: 0.6rem 1.9rem;
  width: fit-content;
  border-radius: 8px;
  border: none;
  color: #b5b7c0;
  background-color: #fafbff;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Filter = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.8rem;
  padding: 0.6rem 0.6rem;
  width: fit-content;
  background-color: #fafbff;
  border-radius: 8px;
  @media (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
    gap: 0;
    justify-content: space-around;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const FilterButton = styled.button<{ selected: boolean }>`
  border: none;
  cursor: pointer;
  padding: 0.4rem 0.9rem;
  border-radius: 8px;
  &:hover {
    color: #fff;
    background-color: #5932ea;
  }

  background-color: ${({ selected }) => (selected ? "#5932ea" : "#fafbff")};
  color: ${({ selected }) => (selected ? "#fff" : "#b5b7c0")};
`;
