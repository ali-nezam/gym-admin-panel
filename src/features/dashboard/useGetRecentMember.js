import { useQuery } from "@tanstack/react-query";
import { getRecentMember } from "../../services/apiDashbpard";

export function useGetRecentMember() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["dashboard-recent"],
    queryFn: getRecentMember,
  });
  const recentMembers = data;
  return { recentMembers, isLoading, error };
}
