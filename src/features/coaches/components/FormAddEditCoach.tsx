import styled from "styled-components";
import { useForm } from "react-hook-form";
import PersianDatePicker from "../../../ui/PersianDatePicker";
import useCreateNewCoach from "../hooks/useCreateNewCoach";
import useEditCoach from "../hooks/useEditCoach";
import Form from "../../../ui/Compound_component/Form";
import { CoachType } from "../../../types/coaches";
import {
  convertToMiladiFromObject,
  toDatepersianFromMiladi,
} from "../../../utils/convertDate";
import { DateObject } from "react-multi-date-picker";
import { useModalContext } from "../../../context/ModalContext";

interface FormAddEditCoachProps {
  coach?: CoachType;
}

type FormCoachType = Omit<CoachType, "Membership_date" | "id"> & {
  Membership_date: DateObject | string | null | undefined;
  id?: number | undefined;
};
function FormAddEditCoach({ coach }: FormAddEditCoachProps) {
  const { close } = useModalContext();

  const editedSession = Boolean(coach?.id);
  const initialDefaultValues = editedSession
    ? {
        ...coach,
        // convert miladi string from DB into persian date string for defaultValues
        Membership_date: toDatepersianFromMiladi(
          coach?.Membership_date ?? null
        ),
      }
    : {};

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<FormCoachType>({ defaultValues: initialDefaultValues });

  const { createCoach, isCreating } = useCreateNewCoach();
  const { editCoach, isEditing } = useEditCoach();
  const isWorking = isCreating || isEditing;

  const onSubmit = (newCoach: FormCoachType) => {
    newCoach.Membership_date = convertToMiladiFromObject(
      newCoach.Membership_date
    );

    if (editedSession) {
      if (!newCoach?.id) return;
      editCoach(
        {
          coachEdited: { ...(newCoach as CoachType) },
          id: newCoach.id,
        },
        {
          onSuccess: () => {
            reset();
            close?.();
          },
        }
      );
    } else {
      createCoach(
        { ...(newCoach as Partial<CoachType>) },
        {
          onSuccess: () => {
            reset();
            close?.();
          },
        }
      );
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Label htmlFor="full_name">
        نام:
        <Form.Input
          id="full_name"
          type="text"
          error={errors?.full_name}
          disabled={isWorking}
          {...register("full_name", { required: "نام اجباری است" })}
        />
      </Form.Label>

      <Form.Label htmlFor="expertise">
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

      <Form.Label htmlFor="phone">
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

      <Form.Label htmlFor="coach_status">
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

      <Form.Label htmlFor="Membership_date">تاریخ عضویت:</Form.Label>
      <PersianDatePicker
        disabled={isWorking}
        name="Membership_date"
        control={control}
      />

      <Actions>
        <Form.BtnSubmit disabled={isWorking} type="submit">
          {editedSession ? "ویرایش" : "افزودن"}
        </Form.BtnSubmit>

        <Form.BtnCancel disabled={isWorking} onClick={close} type="button">
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
