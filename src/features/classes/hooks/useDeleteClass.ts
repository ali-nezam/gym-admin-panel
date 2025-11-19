import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteClassApi } from "../../../services/apiClasses";

export default function useDeleteClass() {
  const queryClient = useQueryClient();
  const { mutate: deleteClass, isPending: isDeletingClass } = useMutation({
    mutationFn: deleteClassApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["classes"] });
      queryClient.invalidateQueries({ queryKey: ["classes_stats"] });
      toast.success("کلاس با موفقیت حذف شد");
    },
    onError: (error) => {
      toast.error("خطا در حذف کلاس" + error.message);
    },
  });

  return { deleteClass, isDeletingClass };
}
