import styled from "styled-components";
import { toPersianDigits } from "../../../utils/convertNumberToPersianDigits";
interface CapaCityProps {
  capacity: number;
  currentCapacity: number;
  percent: number;
}
function Capacity({ capacity, currentCapacity, percent }: CapaCityProps) {
  return (
    <CapacityWrapper>
      <span>
        <p>ظرفیت :</p>
        {toPersianDigits(capacity)} / {toPersianDigits(currentCapacity)}
      </span>
      <BarContainer>
        <BarFiller $percent={percent} />
      </BarContainer>
    </CapacityWrapper>
  );
}

export default Capacity;

const CapacityWrapper = styled.div`
  font-size: 1.4rem;
  font-weight: 400;
  color: #292d32;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  @media (min-width: 768px) {
    p {
      display: none;
    }
  }

  @media (max-width: 768px) {
    grid-area: capacity_info;
    align-items: center;
    height: 1.8rem;
    display: grid;
    grid-template-columns: 1fr 1.5fr;

    span {
      display: flex;
      flex-direction: row;
      color: #777;
      line-height: 1;
      font-weight: 400;
      grid-column: 1 / 2;
      font-size: 1rem;
    }
    p {
      margin-left: 1rem;
    }
  }
`;

const BarContainer = styled.div`
  width: 100%;
  height: 1rem;
  background-color: #e5e7eb;
  border-radius: 999px;
  overflow: hidden;
  @media (max-width: 768px) {
    height: 1.2rem;
    width: 100%;
    grid-column: 2 / 3;
  }
`;

const BarFiller = styled.div<{ $percent: number }>`
  width: ${({ $percent }) => `${$percent}%`};
  height: 100%;
  background-color: ${({ $percent }) => {
    if ($percent === 100) return "#ef4444";
    if ($percent >= 80) return "#f97316";
    return "#10b981";
  }};
  transition: width 0.3s ease;
`;
