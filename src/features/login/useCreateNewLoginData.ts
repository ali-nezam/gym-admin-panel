import { useMutation } from "@tanstack/react-query";
import { CreateNewlogin } from "../../services/apiLogin";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom"; // 👈 اضافه کردن useNavigate

export default function useCreateNewLoginData() {
  const navigate = useNavigate(); // 👈 فراخوانی useNavigate
  const { mutate: createNewLoginData, isPending: isCreating } = useMutation({
    mutationFn: CreateNewlogin,
    onSuccess: () => {
      navigate("/dashboard"); // 👈 هدایت به داشبورد پس از موفقیت
      toast.success("ورود با موفقیت انجام شد");
    },
    onError: (error) => {
      console.error(error.message);
      toast.error("ورود با خطا روبه رو شد" + error.message);
    },
  });
  return { createNewLoginData, isCreating };
}
