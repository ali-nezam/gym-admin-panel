import { useQuery } from "@tanstack/react-query";
import { getClassesWithMembers } from "../../services/apiClasses";

export default function useGetClassesStats() {
  const {
    data: classes = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["classes_stats"],
    queryFn: getClassesWithMembers,
  });

  const stats = classes.reduce(
    (acc, cls) => {
      const memberCount = cls.classes_members.length;
      acc.totalClasses += 1;
      acc.totalCapacity += cls.capacity;
      acc.totalRegistered += memberCount;
      acc.totalRevenue += cls.price * memberCount;
      return acc;
    },
    {
      totalClasses: 0,
      totalCapacity: 0,
      totalRegistered: 0,
      totalRevenue: 0,
    }
  );

  return { stats, error, isLoading };
}
