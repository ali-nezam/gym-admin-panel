import styled from "styled-components";
import Button from "../../ui/Button";
import Modal from "../../Compound component/Modal";
import { useSearchParams } from "react-router-dom";
import { IoPersonAddOutline } from "react-icons/io5";
import Icon from "../../ui/Icon";
import { PAGE_SIZE } from "../../utils/constants";
import { toPersianDigits } from "../../utils/convertNumberToPersianDigits";
import FormAddEditCoach from "../coaches/FormAddEditCoach";
import FormAddEditMember from "../members/FormAddEditMember";
import FormAddEditClasses from "../classes/FormAddEditClasses";

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
    titleOpen: {
      coaches: "افزودن مربی جدید",
      members: "افزودن عضو جدید",
      classes: "افزودن کلاس جدید",
    },
    titleModal: {
      coaches: "اضافه کردن مربی",
      members: "اضافه کردن عضو",
      classes: "اضافه کردن کلاس",
    },
    modalBody: {
      coaches: <FormAddEditCoach />,
      members: <FormAddEditMember />,
      classes: <FormAddEditClasses />,
    },
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
          <ModalButton>
            <p>{instructions.titleOpen[type]}</p>
            <Icon type="create" icon={<IoPersonAddOutline />} />
          </ModalButton>
        </Modal.Open>

        <Modal.Body title={instructions.titleModal[type]}>
          {instructions.modalBody[type]}
        </Modal.Body>
      </Modal>

      <ButtonsPagination>
        <BtnPagination disabled={currentPage === 1} onClick={handlePrev}>
          قبلی
        </BtnPagination>
        <BtnPagination
          disabled={currentPage === pageCount}
          onClick={handleNext}
        >
          بعدی
        </BtnPagination>
      </ButtonsPagination>
    </StyledTablePagination>
  );
}

export default TablePagination;

const ModalButton = styled.div`
  color: #fff;
  background-color: #5932ea;
  &:hover {
    background-color: #4721b8;
  }
  cursor: pointer;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  border: none;
  border: #5932ea solid 1px;
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  /* Media Query برای تبدیل به FAB در موبایل */
  @media (max-width: 768px) {
    position: fixed; /* دکمه شناور می‌شود */
    bottom: 20px;
    left: 20px; /* در RTL، گوشه پایین چپ */
    right: auto;
    z-index: 100; /* مطمئن می‌شویم روی همه چیز قرار می‌گیرد */
    margin: 0;

    width: 5rem !important;
    height: 5rem !important;
    padding: 0;
    border-radius: 50%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    p {
      display: none;
    }
    svg {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`;

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

  /* Media Query برای موبایل: در صفحات کوچک‌تر، المان‌ها عمودی چیده شوند */
  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 1.5rem; /* فاصله بین المان‌ها */
    padding: 1rem;
  }
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
    margin-top: 0;
  }

  @media (max-width: 768px) {
    order: 3; /* در موبایل این المان را در انتها قرار می‌دهیم */
    margin-top: 0;
    font-size: 1.1rem;
    order: 1;
  }
`;

const ButtonsPagination = styled.div`
  display: flex;
  gap: 2rem;
  /* Media Query برای موبایل: دکمه‌ها کنار هم اما با فاصله کمتر یا تمام عرض */
  @media (max-width: 768px) {
    /* width: 100%; */
    /* اشغال تمام عرض */
    gap: 0.8rem;
    justify-content: space-between;
    order: 2;
    padding-left: 6rem;
  }
`;

const BtnPagination = styled.button`
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

  @media (max-width: 768px) {
    flex-grow: 1; /* هر دو دکمه به صورت مساوی فضای ButtonsPagination را اشغال کنند */
    font-size: 1.3rem;
  }
`;
