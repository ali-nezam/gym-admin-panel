import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addclass } from "../../services/apiClasses";
import toast from "react-hot-toast";

export default function useCreateNewClass() {
  const queryClient = useQueryClient();

  const { mutate: createClass, isPending: isCreating } = useMutation({
    mutationFn: addclass,
    onSuccess: () => {
      toast.success("کلاس با موفقیت اضافه شد");
      queryClient.invalidateQueries({ queryKey: ["classes"] });
      queryClient.invalidateQueries({ queryKey: ["classes_stats"] });
    },
    onError: (error) => {
      toast.error("خطا در افزودن کلاس" + error.message);
      console.error(error);
    },
  });
  return { createClass, isCreating };
}
