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
      <Form.Label>نام:</Form.Label>
      <Form.Input
        id="full_name"
        type="text"
        error={errors?.full_name}
        disabled={isWorking}
        {...register("full_name", { required: "نام اجباری است" })}
      />

      <Form.Label>تخصص:</Form.Label>
      <Form.Input
        disabled={isWorking}
        id="expertise"
        type="text"
        error={errors?.expertise}
        {...register("expertise", {
          required: "تخصص مربی مورد نظر را با دفت وارد کنید",
        })}
      />

      <Form.Label>شماره تماس:</Form.Label>
      <Form.Input
        disabled={isWorking}
        type="text"
        error={errors?.phone}
        id="phone"
        {...register("phone", {
          required: "شماره را بدون صفر و +98 وارد کنید",
        })}
      />

      <Form.Label>وضعیت:</Form.Label>
      <Form.Select
        disabled={isWorking}
        {...register("coach_status", { required: true })}
      >
        <option value="true">فعال</option>
        <option value="false">غیرفعال</option>
      </Form.Select>

      <Form.Label>تاریخ عضویت:</Form.Label>
      <PersianDatePicker
        disabled={isWorking}
        name="Membership_date"
        control={control}
      />

      <Actions>
        <Button disabled={isWorking} type="submit">
          {editedSeasion ? "ویرایش" : "افزودن"}
        </Button>
        <CancelBtn disabled={isWorking} type="button" onClick={onClose}>
          انصراف
        </CancelBtn>
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

const Button = styled.button`
  background-color: #5932ea;
  color: white;
  padding: 0.8rem 1.6rem;
  border: none;
  border-radius: 0.6rem;
  font-weight: 600;
  cursor: pointer;
`;

const CancelBtn = styled(Button)`
  background-color: #dee2e6;
  color: black;
`;
