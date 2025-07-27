import styled from "styled-components";
import Button from "../../ui/Button";
import Modal from "../../Compound component/Modal";
import { IoPersonAddOutline } from "react-icons/io5";
import Icon from "../../ui/Icon";
import FormAddEditCoach from "./FormAddEditCoach";
// import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";
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

function TablePagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  searchParams.set("page", currentPage);

  const pageCount = Math.ceil(count / PAGE_SIZE);
  console.log(pageCount);

  const from = currentPage === 1 ? 1 : (currentPage - 1) * PAGE_SIZE + 1;
  const to = currentPage === pageCount ? count : from + PAGE_SIZE - 1;

  function handleNext() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  function handlePrev() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  return (
    <StyledTablePagination>
      <h2>
        نمایش نتیجه {from} تا {to} از {count} داده
      </h2>
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

const Buttons = styled.div`
  display: flex;
  gap: 2rem;
`;
