import { useQuery } from "@tanstack/react-query";
import { getDataForChart } from "../../services/apiDashbpard";

export function useGetDataForChart() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["dashboard-chart"],
    queryFn: getDataForChart,
  });
  const dataForChart = data;
  return { dataForChart, isLoading, error };
}
