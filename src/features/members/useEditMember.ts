import { useMutation, useQueryClient } from "@tanstack/react-query";
import { EditMemberApi } from "../../services/apiMembers";
import toast from "react-hot-toast";
import { EditMemberApiData } from "../../types/member";

interface EditMemberProps {
  editedMembers: EditMemberApiData;
  id: number;
}

export default function useEditMember() {
  const queryClient = useQueryClient();

  const { mutate: editmember, isPending: isEditing } = useMutation({
    mutationFn: ({ editedMembers, id }: EditMemberProps) =>
      EditMemberApi(editedMembers, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["members"] });
      toast.success("عضو با موفقیت ویرایش شد");
    },
    onError: (error) => {
      toast.error("خطا ویرایش عضو" + error.message);
      console.error("Error editing member:", error);
    },
  });

  return { editmember, isEditing };
}
