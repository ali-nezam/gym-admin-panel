import styled from "styled-components";

const StyledAvatarPhoto = styled.img`
  width: 4rem;
  height: 4rem;
  object-fit: cover;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    margin: 0 0.5rem;
  }
`;
function AvatarPhoto({ src, alt }) {
  return <StyledAvatarPhoto src={src} alt={alt} />;
}

export default AvatarPhoto;
