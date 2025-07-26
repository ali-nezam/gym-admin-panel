import styled from "styled-components";
import Icon from "../../ui/Icon";
import { GrEdit } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { HiEye } from "react-icons/hi2";
import Modal from "../../Compound component/Modal";
import FormAddEditCoach from "./FormAddEditCoach";
import ConfirmDelete from "../../ui/ConfirmDelete";
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

function RowActions({ coach, type }) {
  const { titleDelete, titleEdit } = instructions[type];

  return (
    <StyledRowActions>
      <Modal>
        <Modal.Open>
          <Icon type="delete" icon={<MdDelete />} />
        </Modal.Open>
        <Modal.Body title={titleDelete}>
          <ConfirmDelete id={coach.id} type={type} />
        </Modal.Body>
      </Modal>

      <Icon type="details" icon={<HiEye />} />

      <Modal>
        <Modal.Open>
          <Icon type="edit" icon={<GrEdit />} />
        </Modal.Open>
        {/* <Modal.Body title="ویرایش مربی"> */}
        <Modal.Body title={titleEdit}>
          <FormAddEditCoach coach={coach} />
        </Modal.Body>
      </Modal>
    </StyledRowActions>
  );
}

export default RowActions;
