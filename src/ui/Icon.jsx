import styled from "styled-components";

function Icon({ type, icon, onClick, text }) {
  return (
    <StyleIcon onClick={onClick} type={type}>
      <>{icon}</>
      <>{text}</>
    </StyleIcon>
  );
}

export default Icon;

const hoverColors = {
  delete: "#cc1f3d",
  edit: "#0c8599",
  details: "#37b24d",
  create: "#ffffff",
};

const colors = {
  delete: "#6e6b7b",
  edit: "#6e6b7b",
  details: "#6e6b7b",
  create: "#ffffff",
};

const StyleIcon = styled.div`
  cursor: pointer;
  transition: color 80ms ease-in-out;
  /* color: #6e6b7b; */
  svg {
    width: 2rem;
    height: 2rem;
  }
  color: ${({ type }) => colors[type] || "#6e6b7b"};
  & :hover {
    color: ${({ type }) => hoverColors[type] || "#6e6b7b"};
  }
  display: flex;
  gap: 1rem;
`;
