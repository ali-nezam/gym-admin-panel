import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import useGetMembersStatus from "../members/useGetMembersStatus";
const COLORS = ["#8add95", "#9dacbc", "#FFD700", "#FF8042"];
export default function Chart() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const innerR = isMobile ? 50 : 85;
  const outerR = isMobile ? 70 : 110;
  const chartHeight = isMobile ? 220 : 270;

  const legendLayout = isMobile ? "horizontal" : "vertical";
  const legendAlign = isMobile ? "center" : "right";
  const legendVAlign = isMobile ? "bottom" : "middle";
  const legendWidth = isMobile ? "100%" : "40%";

  const { data: status } = useGetMembersStatus();
  const data = [
    { name: isMobile ? "فعال" : "اعضای فعال", value: status?.active },
    {
      name: isMobile ? "منقضی شده" : "اعضای منقضی‌شده",
      value: status?.expired,
    },
    { name: isMobile ? "طلایی" : "اعضای با اشتراک طلایی", value: status?.gold },
  ];
  return (
    <StyledChart>
      <StyledTitle>خلاصه وضعیت اشتراک ها</StyledTitle>
      <ResponsiveContainer width="100%" height={chartHeight}>
        <PieChart>
          <Pie
            data={data}
            nameKey="name"
            dataKey="value"
            innerRadius={innerR}
            outerRadius={outerR}
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
              paddingTop: isMobile ? "20px" : "0",
            }}
            verticalAlign={legendVAlign}
            align={legendAlign}
            width={legendWidth}
            layout={legendLayout}
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
  grid-column: 2/3;
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
  /* Box */
  .recharts-default-legend .recharts-legend-item {
    // ... (استایل‌های Legend)
    font-size: 20px !important;
    display: inline-flex !important;
  }

  @media (max-width: 768px) {
    grid-column: 1 / -1;
    min-height: 250px; /* کاهش ارتفاع کلی کانتینر در موبایل */
  }
`;

const StyledTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: 600;
  padding: 2rem;
  /* margin-bottom: 1rem; */
  color: #444;
`;
