import styled from "styled-components";

const StyledTablePagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1.4rem;
  align-items: center;

  h2 {
    font-size: 1.4rem;
    color: #b5b7c0;
    font-weight: 400;
  }
`;

function TablePagination() {
  return (
    <StyledTablePagination>
      <h2>نمایش اطلاعات 1 تا 8 از 256 داده</h2>
      <h2>dsadsafsaf</h2>
    </StyledTablePagination>
  );
}

export default TablePagination;
