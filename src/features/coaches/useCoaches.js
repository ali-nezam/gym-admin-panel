import { useQuery } from "@tanstack/react-query";
import { getCoaches } from "../../services/apiCoaches";

import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

function useCoaches() {
  const [searchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  const from = currentPage === 1 ? 0 : (currentPage - 1) * PAGE_SIZE;
  const to = from + PAGE_SIZE - 1;

  const {
    isLoading,
    error,
    data: response,
  } = useQuery({
    queryKey: ["coaches", currentPage],
    queryFn: () => getCoaches(from, to),
  });
  const count = response?.count;
  const coaches = response?.data;
  // console.log(coaches.count);
  return { isLoading, error, coaches, count };
}
export default useCoaches;
