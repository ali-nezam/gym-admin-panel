import { GrEdit } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { HiEye } from "react-icons/hi2";

import styled from "styled-components";

import Icon from "../../ui/Icon";
import ConfirmDelete from "./ConfirmDelete";

import Modal from "../../Compound component/Modal";

import FormAddEditCoach from "../coaches/FormAddEditCoach";
import FormAddEditMember from "../members/FormAddEditMember";
import FormAddEditClasses from "../classes/FormAddEditClasses";
const StyledRowActions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.2rem;
  justify-content: center;
  flex-direction: ${({ display = "row" }) => display};

  @media (max-width: 768px) {
    grid-column: 3 / 5;
    grid-row: 3 / 4;
    padding: 1rem 0;
  }
`;

const instructions = {
  members: {
    titleDelete: "حذف کردن عضو",
    titleEdit: "ویرایش عضو",
  },
  coaches: {
    titleDelete: "حذف کردن مربی",
    titleEdit: "ویرایش مربی",
  },
  classes: {
    titleDelete: "حذف کردن کلاس",
    titleEdit: "ویرایش کلاس",
    textIconEdit: "ویرایش",
    textIconDetail: "جزییات",
    textIconDelete: "حدف",
  },
};

function getForm(type, coachOrMember) {
  if (type === "coaches") return <FormAddEditCoach coach={coachOrMember} />;
  if (type === "members") return <FormAddEditMember member={coachOrMember} />;
  if (type === "classes") return <FormAddEditClasses cls={coachOrMember} />;
  return null;
}
function RowActions({ data: coachOrMember, type, display }) {
  const {
    titleDelete,
    titleEdit,
    textIconEdit,
    textIconDetail,
    textIconDelete,
  } = instructions[type];

  return (
    <StyledRowActions display={display}>
      <Modal>
        <Modal.Open>
          <Icon type="delete" icon={<MdDelete />} text={textIconDelete} />
        </Modal.Open>
        <Modal.Body title={titleDelete}>
          <ConfirmDelete id={coachOrMember.id} type={type} />
        </Modal.Body>
      </Modal>

      <Icon type="details" icon={<HiEye />} text={textIconDetail} />

      <Modal>
        <Modal.Open>
          <Icon type="edit" icon={<GrEdit />} text={textIconEdit} />
        </Modal.Open>
        <Modal.Body title={titleEdit}>
          {getForm(type, coachOrMember)}
        </Modal.Body>
      </Modal>
    </StyledRowActions>
  );
}

export default RowActions;
