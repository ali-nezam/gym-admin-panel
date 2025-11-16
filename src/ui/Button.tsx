import styled from "styled-components";

interface ButtonProps {
  children: React.ReactNode;
  type: "Primary" | "Secondary";
}

function Button({ children, type }: ButtonProps) {
  const { color, background, hover } =
    instructions[type] || instructions.Primary;
  return (
    <StyledButton $color={color} $background={background} $hover={hover}>
      {children}
    </StyledButton>
  );
}

export default Button;

const instructions = {
  Primary: { background: "#5932ea", color: "#fff", hover: "#4721b8" },
  Secondary: { background: "#fff", color: "#5932ea", hover: "#f3f0ff" },
};
const StyledButton = styled.button<{
  $color: string;
  $background: string;
  $hover: string;
}>`
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
