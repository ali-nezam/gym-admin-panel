import { QueryClient, useMutation } from "@tanstack/react-query";
import { EditMemberApi } from "../../services/apiMembers";
import toast from "react-hot-toast";

export default function useEditMember() {
  const queryClient = QueryClient();

  const { mutate: editmember, isPending: isEditing } = useMutation({
    mutationFn: ({ editedMembers, id }) => EditMemberApi(editedMembers, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["members"] });
      toast.success("عضو با موفقیت ویرایش شد");
    },
    onError: (error) => toast.error("خطا ویرایش عضو" + error.message),
  });

  return { editmember, isEditing };
}
