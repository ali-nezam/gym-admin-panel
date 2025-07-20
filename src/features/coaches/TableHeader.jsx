import styled from "styled-components";
import SearchBox from "../../ui/SearchBox";

const StyledTableHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1.4rem;
  align-items: center;
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

function TableHeader() {
  return (
    <StyledTableHeader>
      <TableHeaderTitle>
        <h3>مربیان</h3>
        <p>مربیان فعال</p>
      </TableHeaderTitle>
      <SearchBox />
    </StyledTableHeader>
  );
}

export default TableHeader;
