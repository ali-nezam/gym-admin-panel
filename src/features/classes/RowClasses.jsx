import styled from "styled-components";
import { toPersianDigits } from "../../utils/convertNumberToPersianDigits";
import RowActions from "../common/RowActions";
import RowCellText from "../../ui/RowCellText";
import RowButton from "../../ui/RowButton";
import { toEditedPrice } from "../../utils/convertToEditedPirce";
import Modal from "../../Compound component/Modal";
import FormAddMemberToClasses from "./FormAddMemberToClasses";
import TabelMembersOfClass from "./TabelMembersOfClass";
import useGetMemberOfClass from "./useGetMemberOfClass";
import DropdownMenu from "../../ui/DropdownMenu";
import Spinner from "../..//ui/Spinner";
import { useState } from "react";
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
    grid-template-columns: 1fr 1fr 2.5fr 0.5fr;
    /* grid-template-rows: auto auto; */
    gap: 1.4rem 1rem;
    padding: 1.2rem 2.2rem 1.2rem 1.2rem;
    border: 1px solid #eee;
    border-radius: 12px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.03);
    align-items: center;
    background-color: #fff;
    margin-bottom: 0.8rem;
  }
`;

const titleBody = " اضافه کردن مربی";
function RowClasses({ cls, index }) {
  const [showTableMemberOfClass, setShowTableMemberOfClass] = useState(false);
  const { capacity, class_name, price, coach_name } = cls;
  const { data, isLoading } = useGetMemberOfClass(cls.id);
  // console.log(data);
  if (isLoading) return <Spinner />;
  const currentCapacity = data.count;
  const completionCapacity = Boolean(currentCapacity === capacity);
  const percent = Math.floor((currentCapacity / capacity) * 100);
  return (
    <StyledRowClasses $isEven={index % 2 === 0}>
      <RowCellText $type="class_name">{class_name}</RowCellText>

      <RowCellText $type="class_coach_name">{coach_name}</RowCellText>

      <CapacityWrapper>
        <p>ظرفیت :</p>
        <span>
          {toPersianDigits(capacity)} / {toPersianDigits(currentCapacity)}
        </span>
        <BarContainer>
          <BarFiller $percent={percent} />
        </BarContainer>
      </CapacityWrapper>

      <RowCellText $type="price">{toEditedPrice(price)}</RowCellText>

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

const Buttons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  @media (max-width: 768px) {
    grid-column: 3 / 5;
    grid-row: 4 / 5;
  }
`;

const CapacityWrapper = styled.div`
  font-size: 1.4rem;
  font-weight: 400;
  color: #292d32;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  @media (min-width: 768px) {
    p {
      display: none;
    }
  }

  @media (max-width: 768px) {
    flex-direction: row;
    grid-column: 1 / 5;
    grid-row: 3 / 4;
    align-items: center;
    height: 1.8rem;
    p,
    span {
      width: 5rem;
      font-size: 1.2rem;
      color: #777;
      line-height: 1;
      font-weight: 400;
    }
    span {
      font-size: 1rem;
    }
  }
`;

const BarContainer = styled.div`
  width: 100%;
  height: 1rem;
  background-color: #e5e7eb;
  border-radius: 999px;
  overflow: hidden;
  @media (max-width: 768px) {
    height: 1.2rem;
    width: 60%;
    margin-right: 3.5rem;
    grid-column: 3 / 5;
  }
`;

const BarFiller = styled.div`
  width: ${({ $percent }) => `${$percent}%`};
  height: 100%;
  background-color: ${({ $percent }) => {
    if ($percent === 100) return "#ef4444";
    if ($percent >= 80) return "#f97316";
    return "#10b981";
  }};
  transition: width 0.3s ease;
`;
