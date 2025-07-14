import { useQuery } from "@tanstack/react-query";
import { getCoaches } from "../../services/apiCoaches";

function useCoaches() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["coaches"],
    queryFn: getCoaches,
  });
  return { isLoading, error, data };
}
export default useCoaches;
