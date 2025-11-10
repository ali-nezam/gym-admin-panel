import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

export default function useGetSettings() {
  const { data: response, isLoading } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });
  const settingsData = response?.data;
  return { settingsData, isLoading };
}
