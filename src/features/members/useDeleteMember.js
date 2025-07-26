import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteMemberApi } from "../../services/apiMembers";

export default function useDeleteMember() {
  const queryClient = useQueryClient();

  const { mutate: deleteMember, isPending: isDeletingMember } = useMutation({
    mutationFn: deleteMemberApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["members"] });
      toast.success(",عضو با موفقیت حذف شد");
    },
    onError: (error) => {
      toast.error("خطا در حذف عضو  : " + error.message);
    },
  });

  return { deleteMember, isDeletingMember };
}
