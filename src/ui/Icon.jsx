import styled from "styled-components";

const hoverColors = {
  delete: "#cc1f3d",
  edit: "#0c8599",
  details: "#37b24d",
};

const StyleIcon = styled.div`
  cursor: pointer;
  transition: color 80ms ease-in-out;
  color: #6e6b7b;
  svg {
    width: 2rem;
    height: 2rem;
  }

  & :hover {
    color: ${({ type }) => hoverColors[type] || "#6e6b7b"};
  }
`;
function Icon({ type, icon }) {
  return <StyleIcon type={type}> {icon} </StyleIcon>;
}

export default Icon;
