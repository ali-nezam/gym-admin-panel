import styled from "styled-components";

function RowButton({ children, disabled }) {
  return <StyledButton disabled={disabled}>{children}</StyledButton>;
}

export default RowButton;

const StyledButton = styled.button`
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  border: none;
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: fit-content;
  font-size: 1.2rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }

  border: 1px solid ${({ disabled }) => (disabled ? "#ced4da" : "none")};
  background-color: ${({ disabled }) => (disabled ? "#f1f3f5" : "#5932ea")};
  color: ${({ disabled }) => (disabled ? "#adb5bd" : "#fff")};
  border-radius: 8px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &:hover {
    background-color: ${({ disabled }) => (disabled ? "#f1f3f5" : "#4721b8")};
  }
`;
