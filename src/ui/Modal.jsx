import styled from "styled-components";
import ModalForm from "./ModalForm ";
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
`;
const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;
const CloseBtn = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
`;
function Modal({ onClose }) {
  return (
    <Overlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <h2>افزودن مربی جدید</h2>
          <CloseBtn onClick={onClose}>x</CloseBtn>
        </ModalHeader>
        <ModalForm onClose={onClose} />
      </ModalContent>
    </Overlay>
  );
}

export default Modal;
