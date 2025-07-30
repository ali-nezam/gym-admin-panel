import styled from "styled-components";
// import { toPersianDate } from "../../utils/convertDate";
import RowActions from "../common/RowActions";
// import StatusBadge from "../../ui/StatusBadge";
import RowCellText from "../../ui/RowCellText";
import RowButton from "../../ui/RowButton";
import { toEditedPrice } from "../../utils/convertToEditedPirce";

const StyledRowClasses = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1.5fr 1.5fr 1.3fr 2.2fr 0.7fr;
  align-items: center;
  background-color: ${({ $isEven }) => ($isEven ? "#fff" : "#f9f9f9")};
  gap: 2rem;
  font-size: 1.6rem;
  padding: 0 1rem;
`;
const currentCapacity = 5;

function RowClasses({ cls, index }) {
  const { capacity, class_name, price, coach_name } = cls;
  return (
    <StyledRowClasses $isEven={index % 2 === 0}>
      <RowCellText>{class_name}</RowCellText>

      <RowCellText>{coach_name}</RowCellText>

      <CapacityStyled>
        <RowCellText> {capacity} </RowCellText>
        <RowCellText> / </RowCellText>
        <RowCellText> {currentCapacity} </RowCellText>
      </CapacityStyled>
      <RowCellText>{toEditedPrice(price)}</RowCellText>
      <Buttons>
        <RowButton>ثبت عضو جدید</RowButton>
        <RowButton>ویرایش اعضا</RowButton>
      </Buttons>
      <RowActions data={cls} type="coaches" />
    </StyledRowClasses>
  );
}

export default RowClasses;

const Buttons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;
const CapacityStyled = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
`;
