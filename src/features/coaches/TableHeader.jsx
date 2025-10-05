import styled from "styled-components";
import SearchBox from "../../ui/SearchBox";

function TableHeader({
  statusFilter,
  setStatusFilter,
  statusSort,
  setStatusSort,
  setSearchTerm,
  searchTerm,
}) {
  return (
    <StyledTableHeader>
      <TableHeaderTitle statusfilter={statusFilter ? "true" : "false"}>
        <h3>مربیان</h3>
        {statusFilter === true && <p>مربیان فعال</p>}
        {statusFilter === false && <p>مربیان غیرفعال</p>}
      </TableHeaderTitle>

      <Filter>
        <FilterButton
          onClick={() => setStatusFilter("all")}
          selected={statusFilter === "all"}
        >
          همه
        </FilterButton>
        <FilterButton
          onClick={() => setStatusFilter(true)}
          selected={statusFilter === true}
        >
          فعال
        </FilterButton>
        <FilterButton
          onClick={() => setStatusFilter(false)}
          selected={statusFilter === false}
        >
          غیرفعال
        </FilterButton>
      </Filter>

      <Sort value={statusSort} onChange={(e) => setStatusSort(e.target.value)}>
        <option value="expertise">جدیدترین</option>
        <option value="created_at-desc">قدیمی ترین</option>
        <option value="name-asc">نام ( الف - ی)</option>
        <option value="name-desc">نام ( ی - الف)</option>
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

const StyledTableHeader = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 1fr auto auto auto;
  gap: 4.6rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr 3fr;
    gap: 1.6rem;
    padding-bottom: 1.6rem;
    align-items: center;
  }
`;
const TableHeaderTitle = styled.div`
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
    color: ${({ statusfilter }) =>
      statusfilter === "true" ? "#16c098" : "#f03e3e"};
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
    width: 100%; /* اشغال کل عرض در موبایل */
    grid-column: 1/-1;
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
    /* اطمینان از اسکرول افقی اگر دکمه‌ها زیاد بودند */
    display: flex;
    /* width: 70%; */
    align-items: center;
    overflow-x: auto;
    /* gap: 0; */
    justify-content: space-evenly;
    margin: 0 auto;

    &::-webkit-scrollbar {
      display: none; /* مخفی کردن Scrollbar افقی */
    }
  }
`;

const FilterButton = styled.button`
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
