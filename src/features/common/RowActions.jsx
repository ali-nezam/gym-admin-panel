import { GrEdit } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { HiEye } from "react-icons/hi2";

import styled from "styled-components";

import Icon from "../../ui/Icon";
import ConfirmDelete from "./ConfirmDelete";

import Modal from "../../Compound component/Modal";

import FormAddEditCoach from "../coaches/FormAddEditCoach";
import FormAddEditMember from "../members/FormAddEditMember";
const StyledRowActions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.2rem;
  justify-content: center;
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
};

function RowActions({ data: coachOrMember, type }) {
  const { titleDelete, titleEdit } = instructions[type];

  return (
    <StyledRowActions>
      <Modal>
        <Modal.Open>
          <Icon type="delete" icon={<MdDelete />} />
        </Modal.Open>
        <Modal.Body title={titleDelete}>
          <ConfirmDelete id={coachOrMember.id} type={type} />
        </Modal.Body>
      </Modal>

      <Icon type="details" icon={<HiEye />} />

      <Modal>
        <Modal.Open>
          <Icon type="edit" icon={<GrEdit />} />
        </Modal.Open>
        <Modal.Body title={titleEdit}>
          {type === "coaches" ? (
            <FormAddEditCoach coach={coachOrMember} />
          ) : (
            <FormAddEditMember member={coachOrMember} />
          )}
        </Modal.Body>
      </Modal>
    </StyledRowActions>
  );
}

export default RowActions;
