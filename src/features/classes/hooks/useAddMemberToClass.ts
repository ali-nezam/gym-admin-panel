import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addMemberToClassApi } from "../../../services/apiClasses";
import toast from "react-hot-toast";
export default function useAddMembertoClass() {
  const queryClient = useQueryClient();

  const { mutate: addMemberToClass, isPending: isCreating } = useMutation({
    mutationFn: addMemberToClassApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["classes_members"] });
      toast.success("عضو جدید با موفقیت به کلاس اضافه شد");
    },
    onError: (error) => {
      toast.error("خطا در افزودن عضو جدید به کلاس" + error.message);
    },
  });

  return { addMemberToClass, isCreating };
}
