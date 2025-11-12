import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editCoachApi } from "../../services/apiCoaches";
import toast from "react-hot-toast";
import { CoachType } from "../../types/coaches";

interface EditCoachInput {
  coachEdited: CoachType;
  id: number;
}

export default function useEditCoach() {
  const queryClient = useQueryClient();

  const { mutate: editCoach, isPending: isEditing } = useMutation({
    mutationFn: ({ coachEdited, id }: EditCoachInput) =>
      editCoachApi(coachEdited, id),
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
