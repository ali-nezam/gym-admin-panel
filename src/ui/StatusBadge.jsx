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

const StyledStatusWarper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledStatusBadge = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 5.6rem;
  height: 2.8rem;
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
    <StyledStatusWarper>
      <StyledStatusBadge type={type}>{getContent[type]}</StyledStatusBadge>
    </StyledStatusWarper>
  );
}
export default StatusBadge;
