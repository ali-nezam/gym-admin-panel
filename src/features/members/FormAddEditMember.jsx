import { useForm } from "react-hook-form";
import styled from "styled-components";
import Form from "../../Compound component/Form";
import PersianDatePicker from "../../ui/PersianDatePicker";
import { toMiladiDate } from "../../utils/convertDate";
import useCreateNewMember from "./useAddNewMember";
function FormAddEditMember({ onClose, member = {} }) {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({ defaultValues: member });

  const { createNewMember, isCreating } = useCreateNewMember();
  const isWorking = isCreating;
  function onSubmit(memberData) {
    memberData.end_date = toMiladiDate(memberData.end_date);
    console.log(memberData);

    createNewMember(
      { newMember: { ...memberData } },
      {
        onSuccess: () => {
          onClose?.();
          reset();
          console.log("yeah boooy");
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Label htmlFor="full_name">نام و نام خانوادگی</Form.Label>
      <Form.Input
        id="full_name"
        disabled={isWorking}
        {...register("full_name", { required: "وارد کردن نام الزامی است" })}
        error={errors?.full_name}
      />
      <Form.Label htmlFor="phone">تلفن</Form.Label>
      <Form.Input
        id="phone"
        disabled={isWorking}
        {...register("phone", { required: "وارد کردن تلفن الزامی است" })}
        error={errors?.phone}
      />

      <Form.Label htmlFor="coach_id">ایدی مربی</Form.Label>
      <Form.Input
        id="coach_id"
        disabled={isWorking}
        {...register("coach_id", {
          required: "وارد کردن ایدی مربی الزامی است",
        })}
        error={errors?.coach_id}
      />

      <Form.Label htmlFor="note">توضیحات</Form.Label>
      <Form.Input
        id="note"
        disabled={isWorking}
        {...register("note", { required: "وارد کردن نام الزامی است" })}
        error={errors?.note}
      />
      <Form.Label htmlFor="gender">جنسیت</Form.Label>
      <Form.Select
        id="gender"
        disabled={isWorking}
        {...register("gender", { required: "جنسیت را مشخص کنید" })}
        error={errors?.gender}
      >
        <option />
        <option value="male">مرد</option>
        <option value="women">زن</option>
      </Form.Select>

      <Form.Label htmlFor="membership_type"> تعداد ماه اشتراک</Form.Label>
      <Form.Select
        id="membership_type"
        disabled={isWorking}
        {...register("membership_type", { required: "تعداد ماه را مشخص کنید" })}
        error={errors?.membership_type}
      >
        <option />
        <option value="3-month">سه ماهه</option>
        <option value="monthly">یک ماهه</option>
      </Form.Select>

      <Form.Label htmlFor="status"> نوع اشتراک</Form.Label>
      <Form.Select
        id="status"
        disabled={isWorking}
        {...register("status", { required: "جنسیت را مشخص کنید" })}
        error={errors?.status}
      >
        <option />
        <option value="unactive">فعال </option>
        <option value="gold">طلایی</option>
        <option value="experid">منقضی شده</option>
      </Form.Select>

      <Form.Label>تاریخ تولد:</Form.Label>
      <PersianDatePicker name="end_date" control={control} />

      <Actions>
        <Form.BtnSubmit disabled={isWorking} type="submit">
          "افزودن"
        </Form.BtnSubmit>

        <Form.BtnCancel disabled={isWorking} onClick={onClose} type="button">
          انصراف
        </Form.BtnCancel>
      </Actions>
    </Form>
  );
}

export default FormAddEditMember;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;
