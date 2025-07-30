import styled from "styled-components";

const StyledTabelColumnHeaderClasses = styled.header`
  display: grid;
  grid-template-columns: 1.2fr 1.5fr 1.5fr 1.3fr 2.2fr 0.7fr;
  padding: 1.3rem 1rem;
  gap: 2rem;
  border-bottom: 0.2rem solid #dddddd;
  justify-items: center;
`;

const ColumnHeader = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  color: #b5b7c0;
`;
function TabelColumnHeaderClasses() {
  return (
    <StyledTabelColumnHeaderClasses>
      <ColumnHeader>نام کلاس</ColumnHeader>
      <ColumnHeader>نام مربی</ColumnHeader>
      <ColumnHeader>ظرفیت کل / باقی مانده</ColumnHeader>
      <ColumnHeader>قیمت</ColumnHeader>
      <ColumnHeader>افزودن عضو</ColumnHeader>
      <ColumnHeader></ColumnHeader>
    </StyledTabelColumnHeaderClasses>
  );
}

export default TabelColumnHeaderClasses;
