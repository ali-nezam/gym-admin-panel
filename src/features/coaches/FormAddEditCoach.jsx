import styled from "styled-components";
import { useForm } from "react-hook-form";
import PersianDatePicker from "../../ui/PersianDatePicker";
import useCreateNewCoach from "./useCreateNewCoach";
import useEditCoach from "./useEditCoach";
import Form from "../../Compound component/Form";
function FormAddEditCoach({ onClose, coach = {} }) {
  const editedSeasion = Boolean(coach.id);
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({ defaultValues: editedSeasion ? coach : {} });

  const { createCoach, isCreating } = useCreateNewCoach();
  const { editCoach, isEditing } = useEditCoach();
  const isWorking = isCreating || isEditing;

  const onSubmit = (newCoach) => {
    if (coach.Membership_date !== newCoach.Membership_date) {
      const pickerValue = newCoach.Membership_date;
      const miladi = pickerValue?.toDate().toISOString().split("T")[0];
      newCoach.Membership_date = miladi;
    }

    if (editedSeasion) {
      editCoach(
        {
          coachEdited: { ...newCoach },
          id: newCoach.id,
        },
        {
          onSuccess: () => {
            reset();
            onClose?.();
          },
        }
      );
    } else {
      createCoach(
        { ...newCoach },
        {
          onSuccess: () => {
            reset();
            onClose?.();
          },
        }
      );
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Label>
        نام:
        <Form.Input
          id="full_name"
          type="text"
          error={errors?.full_name}
          disabled={isWorking}
          {...register("full_name", { required: "نام اجباری است" })}
        />
      </Form.Label>

      <Form.Label>
        تخصص:
        <Form.Input
          disabled={isWorking}
          id="expertise"
          type="text"
          error={errors?.expertise}
          {...register("expertise", {
            required: "تخصص مربی مورد نظر را با دفت وارد کنید",
          })}
        />
      </Form.Label>

      <Form.Label>
        شماره تماس:
        <Form.Input
          disabled={isWorking}
          type="text"
          error={errors?.phone}
          id="phone"
          {...register("phone", {
            required: "شماره را بدون صفر و +98 وارد کنید",
          })}
        />
      </Form.Label>

      <Form.Label>
        وضعیت:
        <Form.Select
          error={errors?.coach_status}
          disabled={isWorking}
          {...register("coach_status", { required: "وضعیت مربی را مشخص کنید" })}
        >
          <option></option>
          <option value="true">فعال</option>
          <option value="false">غیرفعال</option>
        </Form.Select>
      </Form.Label>

      <Form.Label>تاریخ عضویت:</Form.Label>
      <PersianDatePicker
        disabled={isWorking}
        name="Membership_date"
        control={control}
      />

      <Actions>
        <Form.BtnSubmit disabled={isWorking} type="submit">
          {editedSeasion ? "ویرایش" : "افزودن"}
        </Form.BtnSubmit>

        <Form.BtnCancel disabled={isWorking} onClick={onClose} type="button">
          انصراف
        </Form.BtnCancel>
      </Actions>
    </Form>
  );
}

export default FormAddEditCoach;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;
