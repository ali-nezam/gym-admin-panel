import styled from "styled-components";
import Icon from "../../ui/Icon";
import { GrEdit } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { HiEye } from "react-icons/hi2";
import Modal from "../../Compound component/Modal";
import ModalForm from "../../ui/ModalForm ";
const StyledRowActions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.2rem;
`;

function RowActions() {
  return (
    <StyledRowActions>
      <Icon type="delete" icon={<MdDelete />} />
      <Icon type="details" icon={<HiEye />} />
      <Modal>
        <Modal.Open>
          <Icon type="edit" icon={<GrEdit />} />
        </Modal.Open>
        <Modal.Body>
          <ModalForm />
        </Modal.Body>
      </Modal>
    </StyledRowActions>
  );
}

export default RowActions;
