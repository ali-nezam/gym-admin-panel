import styled from "styled-components";

function TableColumnHeaderClasses() {
  return (
    <StyledTableColumnHeaderClasses>
      <ColumnHeader>نام کلاس</ColumnHeader>
      <ColumnHeader>نام مربی</ColumnHeader>
      <ColumnHeader>ظرفیت کل / تکمیل شده</ColumnHeader>
      <ColumnHeader>قیمت</ColumnHeader>
      <ColumnHeader>افزودن عضو</ColumnHeader>
      <ColumnHeader></ColumnHeader>
    </StyledTableColumnHeaderClasses>
  );
}

export default TableColumnHeaderClasses;

const StyledTableColumnHeaderClasses = styled.header`
  display: grid;
  grid-template-columns: 1.2fr 1.5fr 1.5fr 1.3fr 2.2fr 0.2fr;
  padding: 1.3rem 1rem;
  gap: 2rem;
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
