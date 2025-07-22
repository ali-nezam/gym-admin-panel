import styled, { css } from "styled-components";

const getColor = {
  true: "#37b24d",
  false: "#f03e3e",
};
const getBackground = {
  true: "#d3f9d8",
  false: "#ffc9c9",
};
const getContent = {
  true: "فعال",
  false: "غیرفعال",
};

const StyledStatusBadge = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  width: fit-content;
  display: grid;
  justify-content: center;

  padding: 0.5rem 1rem;
  border-radius: 6px;
  /*   
  ${(props) =>
    props.type === "green" &&
    css`
      color: #37b24d;
      background-color: #d3f9d8;
    `}

  ${(props) =>
    props.type === "red" &&
    css`
      color: #f03e3e;
      background-color: #ffc9c9;
    `} */

  color: ${({ type }) => getColor[type]};
  background-color: ${({ type }) => getBackground[type]};
`;
function StatusBadge({ type }) {
  // return <StyledStatusBadge type={type}>{content}</StyledStatusBadge>;
  return (
    <StyledStatusBadge type={toString.type}>
      {getContent[type]}
    </StyledStatusBadge>
  );
}
export default StatusBadge;
