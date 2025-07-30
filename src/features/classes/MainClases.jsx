import styled from "styled-components";
import DashboardClasses from "./DashboardClasses";
import TabelColumnHeaderClasses from "./TabelColumnHeaderClasses";
import RowClasses from "./RowClasses";

function MainClases() {
  const classes = {};

  return (
    <>
      <DashboardClasses />
      <StyledClass>
        <TabelColumnHeaderClasses />
        {classes.map((cls) => (
          <RowClasses class={cls} />
        ))}
      </StyledClass>
    </>
  );
}

export default MainClases;
const StyledClass = styled.div``;
