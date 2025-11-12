import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNewCoach } from "../../services/apiCoaches";
import toast from "react-hot-toast";

export default function useCreateNewCoach() {
  const queryClient = useQueryClient();

  const { mutate: createCoach, isPending: isCreating } = useMutation({
    mutationFn: createNewCoach,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["coaches"] });
      toast.success("مربی با موفقیت اضافه شد");
    },
    onError: (error) => {
      toast.error("خطا در افزودن مربی :" + error?.message);
    },
  });
  return { createCoach, isCreating };
}
