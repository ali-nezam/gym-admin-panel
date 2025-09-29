import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import styled from "styled-components";
import useGetMembersStatus from "../members/useGetMembersStatus";
const COLORS = ["#8add95", "#9dacbc", "#FFD700", "#FF8042"];
export default function Chart() {
  const { data: status } = useGetMembersStatus();
  const data = [
    { name: "اعضای فعال", value: status?.active },
    { name: "اعضای منقضی‌شده", value: status?.expired },
    { name: "اعضای با اشتراک طلایی", value: status?.gold },
  ];
  return (
    <StyledChart>
      <StyledTitle>خلاصه وضعیت اشتراک ها</StyledTitle>
      <ResponsiveContainer width="100%" height={270}>
        <PieChart>
          <Pie
            data={data}
            nameKey="name"
            dataKey="value"
            innerRadius={85}
            outerRadius={110}
            cx="50%"
            cy="50%"
            paddingAngle={3}
            fill="#8884d8"
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            iconType="line"
            wrapperStyle={{
              lineHeight: "40px", // فاصله بین ردیف‌ها
              // paddingBottom: "40px",
            }}
            verticalAlign="middle"
            align="right"
            width="40%"
            layout="vertical"
            iconSize={20}
          />
        </PieChart>
      </ResponsiveContainer>
    </StyledChart>
  );
}

const StyledChart = styled.div`
  background-color: #ffffff;
  border-radius: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  min-height: 350px; // همان مقدار Chart
  width: 100%;
  grid-column: 2;

  display: flex;
  flex-direction: column;
  justify-content: center;

  /* Box */
  .recharts-default-legend .recharts-legend-item {
    display: flex !important;
    align-items: center;
    gap: 10px !important; /* مقدار فاصله دلخواه */
    font-size: 20px !important;
  }
`;

const StyledTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: 600;
  padding: 2rem;
  /* margin-bottom: 1rem; */
  color: #444;
`;
