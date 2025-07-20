import styled from "styled-components";

const StyledRowCellText = styled.div`
  font-size: 1.4rem;
  font-weight: 400;
  padding-top: 1.2rem;
  padding-bottom: 1.2rem;
  color: #292d32;
`;

function RowCellText({ children }) {
  return <StyledRowCellText>{children}</StyledRowCellText>;
}

export default RowCellText;
