import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { BsThreeDotsVertical } from "react-icons/bs";

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;

  ${(props) =>
    props.$type === "menu_btn" &&
    `
    ////class_DropdownWrapper
    @media (max-width: 768px) {
     grid-area: classes_menu;
      // justify-content: flex-end;
        `};
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 2rem;
  color: #6b7280;
  padding: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuContent = styled.div`
  position: absolute;
  top: 2.4rem;
  left: 0;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.6rem;
  padding: 0.8rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

function DropdownMenu({ children, $type }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <DropdownWrapper ref={ref} type={$type}>
      <MenuButton onClick={() => setIsOpen((prev) => !prev)}>
        <BsThreeDotsVertical />
      </MenuButton>
      {isOpen && <MenuContent>{children}</MenuContent>}
    </DropdownWrapper>
  );
}

export default DropdownMenu;
