import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNewCoach } from "../../services/apiCoaches";
import toast from "react-hot-toast";

export function useCreateNewCoach() {
  const queryClient = useQueryClient();

  const { mutate: createCoach, isLoading: isCreating } = useMutation({
    mutationFn: createNewCoach,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["coaches"] });
      toast.success("new cabin successfuly created");
    },
    onError: (error) => {
      toast.error(error || "Error creating coach");
    },
  });
  return { createCoach, isCreating };
}
