import { useQuery } from "@tanstack/react-query";
import { getcoachesStatus } from "../../services/apiMembers";

export default function useGetcoachesStatus() {
  const { data, isLoading } = useQuery({
    queryKey: ["coaches"],
    queryFn: getcoachesStatus,
  });
  return { data, isLoading };
}
