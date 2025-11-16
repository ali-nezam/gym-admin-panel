import styled from "styled-components";
import formatPhoneNumber from "../utils/formatPhoneNumber";
import { toPersianDigits } from "../utils/convertNumberToPersianDigits";

function RowPhoneNumber({ children }: { children: React.ReactNode }) {
  const editedNumber =
    typeof children === "string" ? formatPhoneNumber(children) : "";
  const editedPersinNumber = toPersianDigits(editedNumber);
  return <StyledRowPhoneNumber>{editedPersinNumber}</StyledRowPhoneNumber>;
}

export default RowPhoneNumber;

const StyledRowPhoneNumber = styled.div`
  font-size: 1.4rem;
  font-weight: 400;
  padding-top: 1.2rem;
  padding-bottom: 1.2rem;
  color: #292d32;
  display: flex;
  align-items: center;
  justify-content: center;
  direction: ltr;

  @media (max-width: 768px) {
    grid-column: 3 / 5;
    grid-row: 1 / 2;
  }
`;
