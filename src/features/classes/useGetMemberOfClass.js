import { useQuery } from "@tanstack/react-query";
import { getMembersOfClassWithId } from "../../services/apiClasses";

export default function useGetMembersStatus(classId, enabled) {
  return useQuery({
    queryKey: ["classes_members", classId],
    queryFn: () => getMembersOfClassWithId({ classId }),
    enabled,
  });
}
