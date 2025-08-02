import styled from "styled-components";
// import { toPersianDate } from "../../utils/convertDate";
import RowActions from "../common/RowActions";
// import StatusBadge from "../../ui/StatusBadge";
import RowCellText from "../../ui/RowCellText";
import RowButton from "../../ui/RowButton";
import { toEditedPrice } from "../../utils/convertToEditedPirce";
import Modal from "../../Compound component/Modal";
import FormAddMemberToClasses from "./FormAddMemberToClasses";
import TabelMembersOfClass from "./TabelMembersOfClass";
import useGetMemberOfClass from "./useGetMemberOfClass";

import Spinner from "../..//ui/Spinner";
const StyledRowClasses = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1.5fr 1.5fr 1.3fr 2.2fr 0.7fr;
  align-items: center;
  background-color: ${({ $isEven }) => ($isEven ? "#fff" : "#f9f9f9")};
  gap: 2rem;
  font-size: 1.6rem;
  padding: 0 1rem;
`;

const titleBody = " اضافه کردن مربی";
function RowClasses({ cls, index }) {
  const { capacity, class_name, price, coach_name } = cls;
  const { data, isLoading } = useGetMemberOfClass(cls.id);
  // console.log(data);
  if (isLoading) return <Spinner />;
  const currentCapacity = data.count;
  const completionCapacity = Boolean(currentCapacity === capacity);
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
        <Modal>
          <Modal.Open>
            <RowButton disabled={completionCapacity}>ثبت عضو جدید</RowButton>
          </Modal.Open>
          <Modal.Body title={titleBody}>
            <FormAddMemberToClasses classId={cls.id} />
          </Modal.Body>
        </Modal>
        <Modal>
          <Modal.Open>
            <RowButton>مشاهده شاگردان</RowButton>
          </Modal.Open>
          <Modal.Body title={titleBody}>
            <TabelMembersOfClass classId={cls.id} />
          </Modal.Body>
        </Modal>
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
