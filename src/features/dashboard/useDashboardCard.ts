import { useQuery } from "@tanstack/react-query";
import { getDashboardCard } from "../../services/apiDashbpard";

export default function useDashboardCard() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["dashboard-cards"],
    queryFn: getDashboardCard,
  });
  //   console.log(data);

  const totalClassesData = data?.totalClassesData || [];
  const totalRevenue = totalClassesData.reduce((acc, cls) => {
    const memberCount = cls.classes_members.length;
    return acc + cls.price * memberCount;
  }, 0);

  const cards = {
    classesCount: data?.classesCount || 0,
    membersCount: data?.membersCount || 0,
    coachesCount: data?.coachesCount || 0,
    totalRevenue: totalRevenue,
    // dataForChart: data?.dataForChart || [],
  };
  return { cards, isLoading, error };
}
