import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  width: auto;
  height: 8.6rem;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src="src\data\logo\logo-light.png" alt="logo" />
    </StyledLogo>
  );
}

export default Logo;
