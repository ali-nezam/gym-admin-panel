import { useQuery } from "@tanstack/react-query";
import { getCoaches } from "../../services/apiCoaches";

function useCoaches() {
  const {
    isLoading,
    error,
    data: coaches,
  } = useQuery({
    queryKey: ["coaches"],
    queryFn: getCoaches,
  });
  return { isLoading, error, coaches };
}
export default useCoaches;
