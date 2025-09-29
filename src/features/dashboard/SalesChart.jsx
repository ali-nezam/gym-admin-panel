import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Spinner from "../../ui/Spinner";
import {
  toEditedPrice,
  toEditedPrice2,
} from "../../utils/convertToEditedPirce";
import { toPersianDate } from "../../utils/convertDate";
import { useGetDataForChart } from "./useGetDataForChart";
import styled from "styled-components";
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
  if (isLoading) return <Spinner />;
  // const data = cards?.dataForChart;
  const data = dataForChart?.dataForChart?.map((x) => ({
    ...x,
    date: toPersianDate(x.date),
  }));
  return (
    <StyledAreaChart>
      <StyledTitle>نموادر درآمد</StyledTitle>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 60, bottom: 10 }}
        >
          {/* خطوط کمکی پشت نمودار */}
          <CartesianGrid strokeDasharray="3 3" />
          {/* محور افقی: ماه‌ها */}
          <XAxis
            dataKey="date"
            tick={{ fill: "#374151" }}
            tickLine={{ stroke: "#374151" }}
          />
          {/* محور عمودی: مبلغ درآمد */}
          <YAxis
            unit="تومان"
            tick={{ fill: "#374151" }}
            tickLine={{ stroke: "#374151" }}
            tickMargin={100} // فاصله اعداد از نمودار
            tickFormatter={toEditedPrice2} // فرمت و فارسی‌سازی اعداد محور عمودی
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
`;
const StyledTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: 600;
  padding: 2rem;
  /* margin-bottom: 1rem; */
  color: #444;
`;
