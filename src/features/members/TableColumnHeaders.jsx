import styled from "styled-components";

const StyledTableColumnHeaders = styled.header`
  display: grid;
  grid-template-columns: 0.5fr 1.6fr 1.5fr 1.5fr 1.3fr 1.2fr 0.7fr;
  padding: 1.3rem 1rem;
  gap: 2.4rem;
  border-bottom: 0.2rem solid #dddddd;
  justify-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

const ColumnHeader = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  color: #b5b7c0;
`;
function TableColumnHeaders() {
  return (
    <StyledTableColumnHeaders>
      <ColumnHeader></ColumnHeader>
      <ColumnHeader>نام</ColumnHeader>
      <ColumnHeader>نام مربی</ColumnHeader>
      <ColumnHeader>پایان عضویت</ColumnHeader>
      <ColumnHeader>اشتراک</ColumnHeader>
      <ColumnHeader>تلفن</ColumnHeader>
      <ColumnHeader></ColumnHeader>
    </StyledTableColumnHeaders>
  );
}

export default TableColumnHeaders;
