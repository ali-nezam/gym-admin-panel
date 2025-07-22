import styled from "styled-components";
import Button from "../../ui/Button";
import { useState } from "react";
import Modal from "../../ui/Modal";
// import { Icon } from "lucide-react";
import { IoPersonAddOutline } from "react-icons/io5";
import Icon from "../../ui/Icon";
const StyledTablePagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* margin-bottom: 1.4rem; */
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
  const [showForm, setShowForm] = useState(false);

  return (
    <StyledTablePagination>
      <h2>نمایش اطلاعات 1 تا 8 از 256 داده</h2>
      <Button onClick={() => setShowForm((x) => !x)}>
        <p>افزودن مربی جدید</p>
        <Icon type="create" icon={<IoPersonAddOutline />} />
      </Button>
      {showForm && <Modal onClose={() => setShowForm((x) => !x)} />}
      <h2>dsadsafsaf</h2>
    </StyledTablePagination>
  );
}

export default TablePagination;
