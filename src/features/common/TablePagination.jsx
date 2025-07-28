import styled from "styled-components";
import Button from "../../ui/Button";
import Modal from "../../Compound component/Modal";
import { IoPersonAddOutline } from "react-icons/io5";
import Icon from "../../ui/Icon";
import FormAddEditCoach from "../coaches/FormAddEditCoach";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";
import FormAddEditMember from "../members/FormAddEditMember";
import { toPersianDigits } from "../../utils/convertNumberToPersianDigits";

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
      <Result>
        نمایش
        <span> {toPersianDigits(from)}</span> تا
        <span> {toPersianDigits(to)}</span> از
        <span> {toPersianDigits(count)}</span> نتیجه
      </Result>
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
        <Buttonn disabled={currentPage === 1} onClick={handlePrev}>
          قبلی
        </Buttonn>
        <Buttonn disabled={currentPage === pageCount} onClick={handleNext}>
          بعدی
        </Buttonn>
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
const Result = styled.div`
  font-size: 1.3rem;
  color: #868e96;
  font-weight: 400;
  text-align: left;
  margin-top: 1.6rem;
  word-spacing: 0.2rem;
  span {
    font-weight: 500;
    color: #495057;
  }
`;

const Buttonn = styled.button`
  padding: 0.6rem 1.6rem;
  font-size: 1.4rem;
  border: 1px solid ${({ disabled }) => (disabled ? "#ced4da" : "#5932ea")};
  background-color: ${({ disabled }) => (disabled ? "#f1f3f5" : "transparent")};
  color: ${({ disabled }) => (disabled ? "#adb5bd" : "#5932ea")};
  border-radius: 8px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ disabled }) => (disabled ? "#f1f3f5" : "#f3f0ff")};
  }
`;
