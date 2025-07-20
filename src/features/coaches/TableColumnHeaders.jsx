import styled from "styled-components";

const StyledTableColumnHeaders = styled.header`
  display: grid;
  grid-template-columns: 0.5fr 1.6fr 1.5fr 1.5fr 1.3fr 1.2fr 0.5fr;
  padding: 1.3rem 0;
  gap: 2.4rem;
  border-bottom: 0.2rem solid #dddddd;
`;

const ColumnHeader = styled.div`
  font-size: 1.4rem;
  font-weight: 500rem;
  color: #b5b7c0;
`;
function TableColumnHeaders() {
  return (
    <StyledTableColumnHeaders>
      <ColumnHeader> </ColumnHeader>
      <ColumnHeader>نام</ColumnHeader>
      <ColumnHeader>تخصص</ColumnHeader>
      <ColumnHeader>تاریخ عضویت</ColumnHeader>
      <ColumnHeader>وضعیت</ColumnHeader>
      <ColumnHeader>تلفن</ColumnHeader>
      <ColumnHeader>عملیات</ColumnHeader>
    </StyledTableColumnHeaders>
  );
}

export default TableColumnHeaders;
