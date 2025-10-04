import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateNewlogin } from "../../services/apiLogin";
import toast from "react-hot-toast";

export default function useCreateNewLoginData() {
  const queryClient = useQueryClient();
  const { mutate: createNewLoginData, isPending: isCreating } = useMutation({
    mutationFn: CreateNewlogin,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["members"] });
      toast.success("ورود با موفقیت انجام شد");
    },
    onError: (error) => {
      console.error(error.message);
      toast.error("ورود با خطا روبه رو شد" + error.message);
    },
  });
  return { createNewLoginData, isCreating };
}
