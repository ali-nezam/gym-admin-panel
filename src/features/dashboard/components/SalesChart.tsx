import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

import { useGetDataForChart } from "../hooks/useGetDataForChart";

import Spinner from "../../../ui/Spinner";
import { toPersianDate } from "../../../utils/convertDate";
import {
  toEditedPrice,
  toEditedPrice2,
} from "../../../utils/convertToEditedPirce";
// const data = [
//   { month: "فروردین", revenue: 4000000 },
//   { month: "اردیبهشت", revenue: 6000000 },
//   { month: "خرداد", revenue: 5500000 },
//   { month: "تیر", revenue: 8000000 },
//   { month: "مرداد", revenue: 7500000 },
//   { month: "شهریور", revenue: 10000000 },
// ];
// console.log(data);
function SalesChart() {
  const { dataForChart, isLoading } = useGetDataForChart();
  const isMobile = useMediaQuery({ maxWidth: 768 }); // تعریف موبایل
  if (isLoading) return <Spinner />;

  const chartMargins = isMobile
    ? { top: 0, right: 0, left: -60, bottom: 5 } // کاهش شدید حاشیه‌ها در موبایل
    : { top: 0, right: 30, left: 60, bottom: 10 }; // حاشیه‌های دسکتاپ

  // const data = cards?.dataForChart;
  const data = dataForChart?.dataForChart?.map((x) => ({
    ...x,
    date: toPersianDate(x.date),
  }));
  return (
    <StyledAreaChart>
      <StyledTitle>نموادر درآمد</StyledTitle>
      <ResponsiveContainer width="100%" height={isMobile ? 250 : 300}>
        <AreaChart data={data} margin={chartMargins}>
          {/* خطوط کمکی پشت نمودار */}
          <CartesianGrid strokeDasharray="3 3" />
          {/* محور افقی: ماه‌ها */}
          <XAxis
            dataKey="date"
            tick={{ fill: "#374151" }}
            tickLine={{ stroke: "#374151" }}
            interval={isMobile ? 2 : 1} // نمایش تمام تیک‌ها برای رسم خطوط
          />
          {/* محور عمودی: مبلغ درآمد */}
          <YAxis
            unit="تومان"
            tick={{ fill: "#374151" }}
            tickLine={{ stroke: "#374151" }}
            tickFormatter={toEditedPrice2} // فرمت و فارسی‌سازی اعداد محور عمودی
            tickMargin={isMobile ? 0 : 100} // اعمال حاشیه شرطی
          />
          {/* تولتیپ: وقتی موس بری روی نقطه‌ها مقدار رو نشون میده */}
          <Tooltip
            formatter={(value) => [`${toEditedPrice(value)} `, "دریافتی "]}
          />
          {/* خط + پر شدن زیرش */}
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#4f46e5 "
            fill="#c7d2fe"
            fillOpacity={0.5}
            strokeWidth={1.5}
          />
        </AreaChart>
      </ResponsiveContainer>
    </StyledAreaChart>
  );
}

export default SalesChart;
const StyledAreaChart = styled.div`
  background-color: #ffffff;
  border-radius: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  grid-column: 1 / -1;

  @media (max-width: 768px) {
    padding: 1.6rem;
    /* کاهش اندازه فونت تیک‌های محورها */
    .recharts-text.recharts-cartesian-axis-tick-value {
      font-size: 1rem !important;
    }
    .recharts-yAxis .recharts-cartesian-axis-tick-value {
      display: none !important;
    }
  }
`;
const StyledTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: 600;
  padding: 2rem;
  color: #444;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    padding: 1.2rem 0;
  }
`;
