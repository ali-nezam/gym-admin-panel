import styled from "styled-components";

interface AvatarPhotoProps {
  src: string;
  alt: string;
}

function AvatarPhoto({ src, alt }: AvatarPhotoProps) {
  return <StyledAvatarPhoto src={src} alt={alt} />;
}

export default AvatarPhoto;

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
  }
`;
