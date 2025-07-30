import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { editSettingsApi } from "../../services/apiSettings";

export default function useEditsettings() {
  const queryClient = useQueryClient();

  const { mutate: editsettings, isPending: isEditing } = useMutation({
    mutationFn: ({ settingsEdited, id }) => editSettingsApi(settingsEdited, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["settings"] });
      toast.success("تنظیمات باشگاه با موفقیت بروزرسانی شد");
    },
    onError: (error) => {
      toast.error("خطا در بروزرسانی تنظیمات :" + error.message);
    },
  });
  return { editsettings, isEditing };
}
