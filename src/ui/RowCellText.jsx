import styled from "styled-components";

const instructions = {
  end_date: "پایان اشتراک :",
  coach_name: "نام مربی :",
  expertise: "رشته :",
  Membership_date: "تاریخ عضویت :",
  class_name: "نام کلاس :",
  class_coach_name: "نام مربی :",
  class_price: "قیمت :",
};

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

  @media (max-width: 768px) {
    padding: 0;
    justify-content: flex-start;
    font-size: 1.2rem;
    color: #777;

    span {
      font-size: 1rem;
      margin-left: 1rem;
    }
  }

  ${(props) =>
    props.$type === "full_name" &&
    `
    @media (max-width: 768px) {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
      justify-content: flex-start
      }
      `}

  ${(props) =>
    (props.$type === "Membership_date" || props.$type === "end_date") &&
    `
    @media (max-width: 768px) {
      grid-column: 3 / 5;
      grid-row: 2 / 3;
      font-size: 1.2rem;
      color: #777;
      padding: 0 ;
      span {
        font-size: 1rem;
        padding-left: 1rem;
        }
        `};

  ${(props) =>
    (props.$type === "expertise" || props.$type === "coach_name") &&
    `
    @media (max-width: 768px) {
      grid-column: 1 / 3;
      grid-row: 2 / 3;
      font-size: 1.2rem;
      color: #777;
      padding: 0 ;
      justify-content: flex-start;
      span {
        font-size: 1rem;
        margin-right: 1.5rem ;
        margin-left: 1rem;
            }
            `};
  ${(props) =>
    props.$type === "class_name" &&
    `
    ////class_name
    @media (max-width: 768px) {
      grid-area: class_name;
      color: #292d32;
      font-size: 1.4rem;  
        `};
  ${(props) =>
    props.$type === "class_coach_name" &&
    `
    ////class_coach_name
    @media (max-width: 768px) {
       grid-area: class_coach_name;      
        `};

  ${(props) =>
    props.$type === "class_price" &&
    `
    ////class_price
    @media (max-width: 768px) {
     grid-area: class_price;
        `};
`;

function RowCellText({ children, $type }) {
  console.log($type);
  const text = instructions[$type] || "";

  return (
    <StyledRowCellText $type={$type}>
      <span>{text}</span>
      {children}
    </StyledRowCellText>
  );
}

export default RowCellText;
