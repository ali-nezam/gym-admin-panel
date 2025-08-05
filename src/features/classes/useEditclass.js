import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editClassApi } from "../../services/apiClasses";
import toast from "react-hot-toast";

export default function useEditClass() {
  const queryClient = useQueryClient();
  const { mutate: editClass, isPending: isEditing } = useMutation({
    mutationFn: ({ editedClass, id }) => editClassApi(editedClass, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["classes"] });
      queryClient.invalidateQueries({ queryKey: ["classes_stats"] });
      toast.success("کلاس با موفقیت ویرایش شد");
    },
    onError: (error) => {
      toast.error("خطا در ویرایش کلاس" + error.message);
    },
  });
  return { editClass, isEditing };
}
