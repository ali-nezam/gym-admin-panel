import { useQuery } from "@tanstack/react-query";
import { getMembers } from "../../services/apiMembers";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";
function useGetMembers() {
  const [searchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const from = currentPage === 1 ? 0 : (currentPage - 1) * PAGE_SIZE;
  const to = from + PAGE_SIZE;

  const {
    isLoading,
    error,
    data: response,
  } = useQuery({
    queryKey: ["members", currentPage],
    queryFn: () => getMembers(from, to),
  });

  const count = response?.count;
  const members = response?.data;
  return { isLoading, error, members, count };
}
export default useGetMembers;
