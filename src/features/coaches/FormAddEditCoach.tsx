import styled from "styled-components";
import { useForm } from "react-hook-form";
import PersianDatePicker from "../../ui/PersianDatePicker";
import useCreateNewCoach from "./useCreateNewCoach";
import useEditCoach from "./useEditCoach";
import Form from "../../Compound component/Form";
import { CoachType } from "../../types/coaches";
import { toPersianDateEn } from "../../utils/convertDate";
import { DateObject } from "react-multi-date-picker";

interface FormAddEditCoachProps {
  onClose?: () => void;
  coach?: CoachType;
}

type FormCoachType = Omit<CoachType, "Membership_date" | "id"> & {
  Membership_date: DateObject | string | null | undefined;
  id?: number | undefined;
};

function toDatepersianFromMiladi(miladi?: string | null): string | null {
  if (!miladi) return null;
  return toPersianDateEn(miladi) ?? null;
}
function convertToMiladi(
  persianDate?: DateObject | null | string
): string | null {
  if (!persianDate) return null;
  if (typeof persianDate === "string") return persianDate;
  return persianDate.toDate()?.toISOString()?.split("T")[0] ?? null;
}

function FormAddEditCoach({ onClose, coach }: FormAddEditCoachProps) {
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
    newCoach.Membership_date = convertToMiladi(newCoach.Membership_date);

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
            onClose?.();
          },
        }
      );
    } else {
      createCoach(
        { ...(newCoach as Partial<CoachType>) },
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
