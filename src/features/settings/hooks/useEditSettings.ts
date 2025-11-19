import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { editSettingsApi } from "../../../services/apiSettings";
import Settings from "../../../types/settings";

interface EditSettingsInput {
  settingsEdited: Settings;
  id: number;
}

// نوع خطا (می‌توانی دقیق‌ترش کنی اگر API ساختار مشخصی دارد)
interface ApiError {
  message: string;
}

export default function useEditsettings() {
  const queryClient = useQueryClient();

  type EditSettingsResponse = Awaited<ReturnType<typeof editSettingsApi>>;

  const { mutate: editsettings, isPending: isEditing } = useMutation<
    EditSettingsResponse,
    ApiError,
    EditSettingsInput
  >({
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
