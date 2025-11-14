import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteMemberOfClassWithId } from "../../services/apiClasses";

export function useDleteMemberOfClass() {
  const queryClient = useQueryClient();

  const { mutate: deleteMemberOfClass, isPending: isDeleting } = useMutation({
    mutationFn: deleteMemberOfClassWithId,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["classes_members"] });
      queryClient.invalidateQueries({ queryKey: ["classes_stats"] });
      toast.success("َشاگرد با موفقیت حذف شد");
    },
    onError: (error) => {
      toast.error("خطا در حذف کردن  شاگرد کلاس" + error.message);
    },
  });

  return { deleteMemberOfClass, isDeleting };
}
