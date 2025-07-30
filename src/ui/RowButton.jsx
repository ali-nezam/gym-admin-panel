import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #5932ea;
  color: #fff;
  cursor: pointer;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  border: none;
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: fit-content;
  font-size: 1.2rem;
  &:hover {
    background-color: #4721b8;
  }
`;

function RowButton({ children }) {
  return <StyledButton>{children}</StyledButton>;
}

export default RowButton;
