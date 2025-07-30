import { useQuery } from "@tanstack/react-query";
import { getClasses } from "../../services/apiClasses";

export default function useGetClasses() {
  const {
    data: response,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["classes"],
    queryFn: getClasses,
  });
  const classes = response?.data;
  return { classes, isLoading, error };
}
