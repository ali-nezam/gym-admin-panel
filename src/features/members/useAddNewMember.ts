import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateNewMemberApi } from "../../services/apiMembers";
import toast from "react-hot-toast";
import { AddMemberApiData } from "../../types/member";

interface CreateNewMemberProps {
  memberCreated: AddMemberApiData;
}

export default function useCreateNewMember() {
  const queryClient = useQueryClient();
  const { mutate: createNewMember, isPending: isCreating } = useMutation({
    mutationFn: ({ memberCreated }: CreateNewMemberProps) =>
      CreateNewMemberApi(memberCreated),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["members"] });
      toast.success("ضغو با موفقیت افزوده شد");
    },
    onError: (error) => {
      console.error(error.message);
      toast.error("عملیات با خطا روبه رو شد" + error.message);
    },
  });
  return { createNewMember, isCreating };
}
