import { useQuery } from "@tanstack/react-query";
import { getCoaches } from "../../../services/apiCoaches";

import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../../utils/constants";
import {
  CoachType,
  StatusFilterType,
  StatusSortType,
} from "../../../types/coaches";

export interface DataType {
  data: CoachType[] | null;
  count: number | null;
}

function useCoaches(
  statusFilter: StatusFilterType,
  statusSort: StatusSortType,
  searchTerm: string
) {
  const [searchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  const from = currentPage === 1 ? 0 : (currentPage - 1) * PAGE_SIZE;
  const to = from + PAGE_SIZE - 1;

  const { isLoading, error, data } = useQuery<DataType>({
    queryKey: ["coaches", currentPage, statusFilter, statusSort, searchTerm],
    queryFn: () => getCoaches(from, to, statusFilter, statusSort, searchTerm),
  });
  const count = data?.count;
  const coaches = data?.data;

  return { isLoading, error, coaches, count };
}
export default useCoaches;
