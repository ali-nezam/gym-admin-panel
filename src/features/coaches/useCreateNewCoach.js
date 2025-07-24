import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNewCoach, editCoachApi } from "../../services/apiCoaches";
import toast from "react-hot-toast";

export function useCreateNewCoach() {
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

export function useEditCoach() {
  const queryClient = useQueryClient();

  const { mutate: editCoach, isPending: isEditing } = useMutation({
    mutationFn: ({ coachEdited, id }) => editCoachApi(coachEdited, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["coaches"] });
      toast.success("اطلاعات مربی با موفقیت ویرایش شد");
    },
    onError: (error) => {
      toast.error("خطا در ویرایش مربی :" + error.message);
    },
  });
  return { editCoach, isEditing };
}
