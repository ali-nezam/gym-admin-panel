import styled from "styled-components";

const StyledRowCellText = styled.div`
  font-size: 1.4rem;
  font-weight: 400;
  padding-top: 1.2rem;
  padding-bottom: 1.2rem;
  color: #292d32;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-size: 1rem;
    padding-right: 0.5rem;
  }

  ${(props) =>
    props.$isFullName &&
    `
    @media (max-width: 768px) {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
      justify-content: flex-start
    }
    `}
  ${(props) =>
    props.$isEndDate &&
    `
    @media (max-width: 768px) {
      grid-column: 3 / 5;
      grid-row: 2 / 3;
      font-size: 1.2rem;
      color: #777;
      padding: 0 ;
      justify-content: space-evenly;
      }
      `};

  ${(props) =>
    props.$iscoach &&
    `
    @media (max-width: 768px) {
      grid-column: 1 / 3;
      grid-row: 2 / 3;
      font-size: 1.2rem;
      color: #777;
      padding: 0 ;
      padding-right: 0.5rem ;
      justify-content: start;
       sapn {
         font-size: 1rem;
        padding-left: 1rem;
         }

  `};
`;

function RowCellText({ children, $isFullName, $isEndDate, $iscoach }) {
  let text;
  if ($iscoach) text = "نام مربی :";
  else if ($isEndDate) text = "تاریخ عضویت :";
  else text = "";
  return (
    <StyledRowCellText
      $isEndDate={$isEndDate}
      $isFullName={$isFullName}
      $iscoach={$iscoach}
    >
      <sapn>{text}</sapn>
      {children}
    </StyledRowCellText>
  );
}

export default RowCellText;
