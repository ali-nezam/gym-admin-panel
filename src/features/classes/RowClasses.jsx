import { useState } from "react";
import styled from "styled-components";

import RowActions from "../common/RowActions";
import Modal from "../../Compound component/Modal";

import RowCellText from "../../ui/RowCellText";
import RowButton from "../../ui/RowButton";
import DropdownMenu from "../../ui/DropdownMenu";
import Spinner from "../..//ui/Spinner";

import { toEditedPrice } from "../../utils/convertToEditedPirce";

import FormAddMemberToClasses from "./FormAddMemberToClasses";
import TabelMembersOfClass from "./TabelMembersOfClass";
import Capacity from "./Capacity";

import useGetMemberOfClass from "./useGetMemberOfClass";

const titleBody = " اضافه کردن مربی";
function RowClasses({ cls, index }) {
  const [showTableMemberOfClass, setShowTableMemberOfClass] = useState(false);
  const { capacity, class_name, price, coach_name } = cls;
  const { data, isLoading } = useGetMemberOfClass(cls.id);

  if (isLoading) return <Spinner />;

  const currentCapacity = data.count;
  const completionCapacity = Boolean(currentCapacity === capacity);
  const percent = Math.floor((currentCapacity / capacity) * 100);
  return (
    <StyledRowClasses $isEven={index % 2 === 0}>
      <RowCellText $type="class_name">{class_name}</RowCellText>

      <RowCellText $type="class_coach_name">{coach_name}</RowCellText>

      <Capacity
        capacity={capacity}
        currentCapacity={currentCapacity}
        percent={percent}
        $type="capacity_info"
      />

      <RowCellText $type="class_price">{toEditedPrice(price)}</RowCellText>

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
          <Modal.Open onClick={() => setShowTableMemberOfClass(true)}>
            <RowButton>مشاهده شاگردان</RowButton>
          </Modal.Open>
          <Modal.Body title={titleBody}>
            <TabelMembersOfClass
              classId={cls.id}
              enabled={showTableMemberOfClass}
            />
          </Modal.Body>
        </Modal>
      </Buttons>
      <DropdownMenu $type="classes_menu">
        <RowActions data={cls} type="classes" display="column" />
      </DropdownMenu>
    </StyledRowClasses>
  );
}

export default RowClasses;

const StyledRowClasses = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1.5fr 1.5fr 1.3fr 2.2fr 0.2fr;
  align-items: center;
  background-color: ${({ $isEven }) => ($isEven ? "#fff" : "#f9f9f9")};
  gap: 2rem;
  font-size: 1.6rem;
  padding: 0 1rem;
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-template-rows: auto auto auto auto;
    gap: 1.4rem 1rem;

    padding: 1.2rem 2.2rem 1.2rem 1.2rem;
    border: 1px solid #eee;
    border-radius: 12px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.03);
    align-items: center;
    background-color: #fff;
    margin-bottom: 0.8rem;
    grid-template-areas:
      "class_name class_name class_name classes_menu"
      "class_coach_name class_coach_name class_coach_name class_coach_name"
      "capacity_info capacity_info capacity_info capacity_info"
      "class_price class_price actions actions";
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  @media (max-width: 768px) {
    grid-area: actions;
    justify-content: center;
  }
`;
