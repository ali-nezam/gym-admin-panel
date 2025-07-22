import styled from "styled-components";
import SearchBox from "../../ui/SearchBox";
import Filter from "../../ui/Filter";

const StyledTableHeader = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  /* margin-bottom: 1.4rem; */
  align-items: center;
  display: grid;
  grid-template-columns: 1fr auto auto auto;
  gap: 4.6rem;
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
    color: #16c098;
    font-weight: 500;
  }
`;

const Select = styled.select`
  /* width: 100%; */
  padding: 0.6rem 1.9rem;
  width: 10rem;

  border-radius: 8px;
  border: none;
  color: #b5b7c0;
  background-color: #fafbff;
`;
// const Filter = styled.div``;

function TableHeader() {
  return (
    <StyledTableHeader>
      <TableHeaderTitle>
        <h3>مربیان</h3>
        <p>مربیان فعال</p>
      </TableHeaderTitle>

      <Select>
        <option value="all">همه</option>
        <option value="active">فعال</option>
        <option value="inactive">غیرفعال</option>
      </Select>

      <Filter options={["همه", "فعال", "غیرفعال"]} />

      <SearchBox />
    </StyledTableHeader>
  );
}

export default TableHeader;
