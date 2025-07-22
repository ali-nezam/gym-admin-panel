// export const Button2 = styled.button`
//   background-color: #5932ea;
//   color: #fff;
//   cursor: pointer;
//   padding: 0.4rem 0.9rem;
//   border-radius: 8px;
//   border: none;
//   /* transition: 0.3s all; */
//   transition: all 0.3s ease-in-out;

//   &:hover {
//     background-color: #4721b8;
//   }
// `;
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #5932ea;
  color: #fff;
  cursor: pointer;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  border: none;
  /* transition: 0.3s all; */
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background-color: #4721b8;
  }
`;

function Button({ children, onClick }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

export default Button;
