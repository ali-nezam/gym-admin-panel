import { Dumbbell } from "lucide-react";
import styled from "styled-components";

function Logo() {
  return (
    <StyledLogo>
      <Dumbbell />
      <h1>GYM ADMIN</h1>
      <p>v 0.7.4</p>
    </StyledLogo>
  );
}

export default Logo;

const StyledLogo = styled.div`
  margin: 2.4rem auto;
  margin-bottom: 0;
  justify-content: center;
  align-items: center;
  gap: 1.7rem;
  display: flex;
  color: #000;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.01);
  background-color: #fff;
  border-radius: 1.2rem;

  h1 {
    font-size: 2.6rem;
    font-weight: 800;
  }
  svg {
    color: #000;
    width: 4.6rem;
    height: 4.6rem;
    padding: 0.8rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #5932ea;
    background-color: #f3f0ff;
  }
  p {
    color: #838383;
    font-size: 1rem;
  }
`;
