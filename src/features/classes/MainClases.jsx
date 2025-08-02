import styled from "styled-components";
import DashboardClasses from "./DashboardClasses";
import TabelColumnHeaderClasses from "./TabelColumnHeaderClasses";
import RowClasses from "./RowClasses";
import useGetClasses from "./useGetClasses";
import FullScreenSpinner from "../../ui/Spinner";
import TablePagination from "../common/TablePagination";
function MainClases() {
  const { classes, /*erro,*/ isLoading } = useGetClasses();

  const count = 100;
  if (isLoading) return <FullScreenSpinner />;
  return (
    <>
      <DashboardClasses />
      <StyledClass>
        <TabelColumnHeaderClasses />
        {classes.map((cls, index) => (
          <RowClasses cls={cls} key={cls.id} index={index} />
        ))}
        <TablePagination count={count} type="classes" />
      </StyledClass>
    </>
  );
}

export default MainClases;
const StyledClass = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  margin-top: 2.4rem;
  padding: 2rem 3.2rem 2rem 3.2rem;
`;
