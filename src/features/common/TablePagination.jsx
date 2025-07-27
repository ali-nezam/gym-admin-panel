import styled from "styled-components";
import Button from "../../ui/Button";
import Modal from "../../Compound component/Modal";
import { IoPersonAddOutline } from "react-icons/io5";
import Icon from "../../ui/Icon";
import FormAddEditCoach from "../coaches/FormAddEditCoach";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";
import FormAddEditMember from "../members/FormAddEditMember";

function TablePagination({ count, type }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  searchParams.set("page", currentPage);

  const pageCount = Math.ceil(count / PAGE_SIZE);

  const from = currentPage === 1 ? 1 : (currentPage - 1) * PAGE_SIZE + 1;
  const to = currentPage === pageCount ? count : from + PAGE_SIZE - 1;

  function handleNext() {
    if (currentPage < pageCount) {
      searchParams.set("page", currentPage + 1);
      setSearchParams(searchParams);
    }
  }

  function handlePrev() {
    if (currentPage > 1) {
      searchParams.set("page", currentPage - 1);
      setSearchParams(searchParams);
    }
  }

  const instructions = {
    titleOpen: { coaches: "افزودن مربی جدید", members: "افزودن عضو جدید" },
    titleModal: { coaches: "اضافه کردن مربی", members: "اضافه کردن عضو" },
  };

  return (
    <StyledTablePagination>
      <h2>
        نمایش نتیجه {from} تا {to} از {count} داده
      </h2>
      <Modal>
        <Modal.Open>
          <Button>
            <p>{instructions.titleOpen[type]}</p>
            <Icon type="create" icon={<IoPersonAddOutline />} />
          </Button>
        </Modal.Open>

        <Modal.Body title={instructions.titleModal[type]}>
          {type === "coaches" ? <FormAddEditCoach /> : <FormAddEditMember />}
        </Modal.Body>
      </Modal>

      <Buttons>
        <Button disabled={currentPage === 1} onClick={handlePrev}>
          قبلی
        </Button>
        <Button disabled={currentPage === pageCount} onClick={handleNext}>
          بعدی
        </Button>
      </Buttons>
    </StyledTablePagination>
  );
}

export default TablePagination;

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

const Buttons = styled.div`
  display: flex;
  gap: 2rem;
`;
