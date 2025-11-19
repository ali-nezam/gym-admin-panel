import { useQuery } from "@tanstack/react-query";
import { getClasses } from "../../../services/apiClasses";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../../utils/constants";

export default function useGetClasses() {
  const [searchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  const from = currentPage === 1 ? 0 : (currentPage - 1) * PAGE_SIZE;
  const to = from + PAGE_SIZE - 1;

  const {
    data: response,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["classes", currentPage],
    queryFn: () => getClasses(from, to),
  });
  const classes = response?.data;
  const count = response?.count;
  return { classes, isLoading, error, count };
}
