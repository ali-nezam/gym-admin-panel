import styled from "styled-components";

function Button({ children, onClick, disabled, type }) {
  const { color, background, hover } =
    instructions[type] || instructions.Primary;
  return (
    <StyledButton
      disabled={disabled}
      onClick={onClick}
      $color={color}
      $background={background}
      $hover={hover}
    >
      {children}
    </StyledButton>
  );
}

export default Button;

const instructions = {
  Primary: { background: "#5932ea", color: "#fff", hover: "#4721b8" },
  Secondary: { background: "#fff", color: "#5932ea", hover: "#f3f0ff" },
};
const StyledButton = styled.button`
  color: ${({ $color }) => $color};
  background-color: ${({ $background }) => $background};
  &:hover {
    background-color: ${({ $hover }) => $hover};
  }

  cursor: pointer;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  border: none;
  border: #5932ea solid 1px;
  /* transition: 0.3s all; */
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
