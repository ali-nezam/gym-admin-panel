import styled from "styled-components";
import Button from "../../ui/Button";
import Modal from "../../Compound component/Modal";
import { IoPersonAddOutline } from "react-icons/io5";
import Icon from "../../ui/Icon";
import Filter from "../../ui/Filter";
import FormAddEditCoach from "./FormAddEditCoach";
const StyledTablePagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.7rem 1.4rem;
  padding-bottom: 0;
  align-items: center;

  h2 {
    font-size: 1.4rem;
    color: #b5b7c0;
    font-weight: 400;
  }
`;

function TablePagination() {
  return (
    <StyledTablePagination>
      <h2>نمایش اطلاعات 1 تا 8 از 256 داده</h2>

      <Modal>
        <Modal.Open>
          <Button>
            <p>افزودن مربی جدید</p>
            <Icon type="create" icon={<IoPersonAddOutline />} />
          </Button>
        </Modal.Open>

        <Modal.Body title="اضافه کردن مربی">
          <FormAddEditCoach />
        </Modal.Body>
      </Modal>

      <Filter options={["1", "2", "3", "...", "45", "46"]} />
    </StyledTablePagination>
  );
}

export default TablePagination;
