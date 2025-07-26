import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCoachApi } from "../../services/apiCoaches";
import toast from "react-hot-toast";

export default function useDeleteCoach() {
  const queryClient = useQueryClient();

  const { mutate: deleteCoach, isPending: isDeleting } = useMutation({
    mutationFn: deleteCoachApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["coaches"] });
      toast.success("مربی با موفقیت حذف شد");
    },
    onError: (error) => {
      toast.error("خطا در حذف مربی  : " + error.message);
    },
  });

  return { deleteCoach, isDeleting };
}
