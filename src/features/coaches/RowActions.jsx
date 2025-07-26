import styled from "styled-components";
import Icon from "../../ui/Icon";
import { GrEdit } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { HiEye } from "react-icons/hi2";
import Modal from "../../Compound component/Modal";
import FormAddEditCoach from "./FormAddEditCoach";
import ConfirmDelete from "./ConfirmDelete";
const StyledRowActions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.2rem;
  justify-content: center;
`;

function RowActions({ coach }) {
  return (
    <StyledRowActions>
      <Modal>
        <Modal.Open>
          <Icon type="delete" icon={<MdDelete />} />
        </Modal.Open>
        <Modal.Body title="حذف کردن مربی">
          <ConfirmDelete id={coach.id} />
        </Modal.Body>
      </Modal>

      <Icon type="details" icon={<HiEye />} />

      <Modal>
        <Modal.Open>
          <Icon type="edit" icon={<GrEdit />} />
        </Modal.Open>
        <Modal.Body title="ویرایش مربی">
          <FormAddEditCoach coach={coach} />
        </Modal.Body>
      </Modal>
    </StyledRowActions>
  );
}

export default RowActions;
