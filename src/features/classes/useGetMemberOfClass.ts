import { useQuery } from "@tanstack/react-query";
import { getMembersOfClassWithId } from "../../services/apiClasses";
// interface GetClassesWithMembersInput {
//   ClassId: number;
//   enable: any;
// }
export default function useGetMembersStatus(classId: number, enabled?: any) {
  return useQuery({
    queryFn: () => getMembersOfClassWithId(classId),
    queryKey: ["classes_members", classId],
    enabled,
  });
}
