import styled from "styled-components";
import SpinnerMini from "./SpinnerMini";
import { toPersianDigits } from "../utils/convertNumberToPersianDigits";

const instructions = {
  green: { background: "#d3f9d8", color: "#37b24d" },
  gray: { color: "#868e96", background: "#e9ecef" },
  gold: { color: "#FFD700", background: "#fff3bf" },
  red: { color: "#f03e3e", background: "#ffc9c9" },
  blue: { color: "#3B82F6", background: "#e3f2fd" },
};

const StyledCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.5fr;
  gap: 2rem;
  svg {
    width: 8.9rem;
    height: 8.4rem;
    padding: 1rem;
    color: #37b24d;
    background-color: #d3f9d8;

    color: ${({ $color }) => $color};
    background-color: ${({ $background }) => $background};

    border-radius: 50%;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  h2 {
    color: #333333;
    font-size: ${({ texttype }) =>
      texttype === "price" ? "2.8rem" : "3.2rem"};
  }
  h3 {
    font-size: 1.4rem;
  }
  h4 {
    color: #333333;
    font-weight: 400;
    display: flex;
    gap: 0.2rem;
    font-size: 1.2rem;
  }

  span {
    color: #00ac4f;
    font-size: 1.4rem;
    font-weight: 500;
  }
`;

function Card({
  type,
  title,
  value,
  percent,
  percentText,
  icon,
  isLoading,
  textType,
}) {
  const { color, background } = instructions[type] || {
    color: "#37b24d",
    background: "#d3f9d8",
  };
  if (isLoading) return <SpinnerMini />;
  return (
    <StyledCard $color={color} $background={background} texttype={textType}>
      {icon}
      <div>
        <h3>{title}</h3>
        <h2>{toPersianDigits(value)}</h2>
        <h4>
          <span>{toPersianDigits(percent)}</span> <p>{percentText}</p>
        </h4>
      </div>
    </StyledCard>
  );
}

export default Card;
