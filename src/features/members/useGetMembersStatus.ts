import { useQuery } from "@tanstack/react-query";
import { getMembersStatusApi } from "../../services/apiMembers";

export default function useGetMembersStatus() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["members"],
    queryFn: getMembersStatusApi,
  });

  return { isLoading, error, data };
}
