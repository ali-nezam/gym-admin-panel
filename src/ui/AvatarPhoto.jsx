import styled from "styled-components";

const StyledAvatarPhoto = styled.img`
  width: 4rem;
  height: 4rem;
  object-fit: cover;
  border-radius: 8px;
  border-radius: 50%;
`;
function AvatarPhoto({ src, alt }) {
  return <StyledAvatarPhoto src={src} alt={alt} />;
}

export default AvatarPhoto;
