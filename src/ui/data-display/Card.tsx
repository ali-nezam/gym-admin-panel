import styled from "styled-components";
import SpinnerMini from "../feedback/SpinnerMini";
import { toPersianDigits } from "../../utils/convertNumberToPersianDigits";
interface CardProps {
  type?: "green" | "gray" | "gold" | "red" | "blue";
  title: string;
  value: number | string | null | undefined;
  percent: number | string;
  percentText: string;
  icon: React.ReactNode;
  isLoading?: boolean;
  texttype?: "price" | "price-small";
}

function Card({
  type = "green",
  title,
  value,
  percent,
  percentText,
  icon,
  isLoading,
  texttype,
}: CardProps) {
  const { color, background } = instructions[type];
  const dispalyValue = value ? toPersianDigits(value) : 0;
  const sizeprice =
    texttype === "price"
      ? "2rem"
      : texttype === "price-small"
      ? "1.5rem"
      : "3.2rem";
  if (isLoading) return <SpinnerMini />;
  return (
    <StyledCard $color={color} $background={background} $sizeprice={sizeprice}>
      {icon}
      <div>
        <h3>{title}</h3>
        <h2>{dispalyValue}</h2>
        <h4>
          <span>{toPersianDigits(percent)}</span> <p>{percentText}</p>
        </h4>
      </div>
    </StyledCard>
  );
}

export default Card;

const instructions = {
  green: { background: "#d3f9d8", color: "#37b24d" },
  gray: { color: "#868e96", background: "#e9ecef" },
  gold: { color: "#FFD700", background: "#fff3bf" },
  red: { color: "#f03e3e", background: "#ffc9c9" },
  blue: { color: "#3B82F6", background: "#e3f2fd" },
};

const StyledCard = styled.div<{
  $color: string;
  $background: string;
  $sizeprice: string;
}>`
  display: grid;
  grid-template-columns: 1fr 2.5fr;
  gap: 2rem;
  align-items: center;
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
    font-size: ${({ $sizeprice }) => $sizeprice};
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

  @media (max-width: 768px) {
    background-color: #fff;
    padding: 1.5rem;
    border-radius: 30px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    border: 1px solid #eee;

    div {
      gap: 0;
    }
    h2 {
      margin: 2.1rem 0 1.1rem 0;
    }
    h4,
    h2 {
      line-height: 1;
    }
  }
`;
