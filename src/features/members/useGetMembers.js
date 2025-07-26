import { useQuery } from "@tanstack/react-query";
import { getMembers } from "../../services/apiMembers";
function useGetMembers() {
  const {
    isLoading,
    error,
    data: members,
  } = useQuery({
    queryKey: ["members"],
    queryFn: getMembers,
  });
  return { isLoading, error, members };
}
export default useGetMembers;
