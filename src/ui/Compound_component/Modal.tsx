import React, { useState } from "react";
import styled from "styled-components";
import { HiXMark } from "react-icons/hi2";
import Icon from "../Icon";
import ModalContext, { useModalContext } from "../../context/ModalContext";

function Modal({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  function close() {
    setIsOpen(false);
  }
  function open() {
    setIsOpen(true);
  }

  return (
    <ModalContext.Provider value={{ close, open, isOpen }}>
      {children}
    </ModalContext.Provider>
  );
}

Modal.Body = function ModalBody({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  // const { isOpen, close } = useContext(ModalContext);
  const { isOpen, close } = useModalContext();
  if (!isOpen) return null;

  return (
    <Overlay onClick={close}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <HeaderWrapper>
          <Title>{title}</Title>
          <Icon type="delete" icon={<HiXMark />} onClick={close} />
        </HeaderWrapper>

        {children}
      </ModalContent>
    </Overlay>
  );
};

Modal.Open = function ModalOpenButton({
  children,
}: {
  children: React.ReactNode;
}) {
  // const { open } = useContext(ModalContext);
  const { open } = useModalContext();
  return <div onClick={open}>{children}</div>;
};

export default Modal;

const Overlay = styled.div`
  position: fixed; // This will cover the entire viewport
  inset: 0; // This is a shorthand for top, right, bottom, left to 0

  background-color: rgba(0, 0, 0, 0.3);
  display: grid;
  place-items: center;
  z-index: 1000; // Ensure the modal is above other content
  backdrop-filter: blur(5px); // Optional: adds a blur effect to the background
`;
const ModalContent = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 1.2rem;
  width: 500px;
  max-width: 90%; //
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);

  @media (max-width: 768px) {
    padding: 1.4rem;
    width: 80%;
  }
`;
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Title = styled.div`
  font-weight: 800;
  color: black;
  font-size: 2.2rem;
  margin-bottom: 2rem;
`;
