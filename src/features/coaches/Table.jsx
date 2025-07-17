import styled from "styled-components";
import useCoaches from "./useCoaches";
import RowDetail from "./RowDetail";
import Spinner from "../../ui/Spinner";

const StyledTable = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-grey-50);
  border-radius: 14px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  margin-top: 2.4rem;
`;

const StyledTableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.5fr 1.6fr 1.5fr 1.5fr 1.3fr 1.2fr;
  padding: 1.3rem 0.3rem 1.3rem 2.4rem;
  background-color: #f5ece3;
  border-top-right-radius: 14px;
  border-top-left-radius: 14px;
  gap: 2.4rem;
  font-size: 1.8rem;
`;
function Table() {
  const { coaches, isLoading /*error*/ } = useCoaches();

  if (isLoading) return <Spinner />;

  return (
    <>
      <h1>مربیان</h1>
      <StyledTable>
        <StyledTableHeader>
          <div> </div>
          <div>نام</div>
          <div>تخصص</div>
          <div>هزینه</div>
          <div>وضعیت</div>
          <div>عملیات</div>
        </StyledTableHeader>

        {coaches.map((coach) => (
          <RowDetail coach={coach} key={coach.id} />
        ))}
      </StyledTable>
    </>
  );
}

export default Table;
