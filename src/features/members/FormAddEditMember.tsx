import { useForm } from "react-hook-form";
import styled from "styled-components";
import Form from "../../Compound component/Form";
import PersianDatePicker from "../../ui/PersianDatePicker";
import {
  convertToMiladiFromObject,
  toDatepersianFromMiladi,
} from "../../utils/convertDate";
import useCreateNewMember from "./useAddNewMember";
import useEditMember from "./useEditMember";
import MemberType, { AddMemberApiData } from "../../types/member";
import { useContext } from "react";
import ModalContext from "../../context/ModalContext";

interface FormAddEditMemberProps {
  member?: MemberType | undefined;
}

function FormAddEditMember({ member }: FormAddEditMemberProps) {
  const { close } = useContext(ModalContext);
  const editSeason = Boolean(member?.id);
  const initialDefaultValues = editSeason
    ? {
        ...member,
        end_date: toDatepersianFromMiladi(member?.end_date ?? null),
      }
    : {};

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<MemberType>({ defaultValues: initialDefaultValues });

  const { editmember, isEditing } = useEditMember();
  const { createNewMember, isCreating } = useCreateNewMember();
  const isWorking = isCreating || isEditing;

  function onSubmit(newMember: MemberType) {
    newMember.end_date = convertToMiladiFromObject(newMember.end_date);
    const { coachData, ...memberDataToSend } = newMember;
    if (editSeason) {
      editmember(
        {
          editedMembers: { ...memberDataToSend },
          id: newMember.id,
        },
        {
          onSuccess: () => {
            close?.();
            reset();
          },
          onError: (error) => {
            console.log("error edit member message:", error.message);
          },
        }
      );
    } else {
      createNewMember(
        { memberCreated: newMember as AddMemberApiData },
        {
          onSuccess: () => {
            close?.();
            reset();
          },
        }
      );
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Label htmlFor="full_name">
        نام و نام خانوادگی
        <Form.Input
          id="full_name"
          disabled={isWorking}
          {...register("full_name", { required: "وارد کردن نام الزامی است" })}
          error={errors?.full_name}
        />
      </Form.Label>

      <Form.Label htmlFor="phone">
        تلفن
        <Form.Input
          id="phone"
          disabled={isWorking}
          {...register("phone", { required: "وارد کردن تلفن الزامی است" })}
          error={errors?.phone}
        />
      </Form.Label>

      <Form.Label htmlFor="coach_id">
        ایدی مربی
        <Form.Input
          id="coach_id"
          disabled={isWorking}
          {...register("coach_id", {
            required: "وارد کردن ایدی مربی الزامی است",
          })}
          error={errors?.coach_id}
        />
      </Form.Label>

      <Form.Label htmlFor="note">
        توضیحات
        <Form.Input id="note" disabled={isWorking} {...register("note")} />
      </Form.Label>

      <Form.Label htmlFor="gender">
        جنسیت
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
      </Form.Label>

      <Form.Label htmlFor="membership_type">
        تعداد ماه اشتراک
        <Form.Select
          id="membership_type"
          disabled={isWorking}
          {...register("membership_type", {
            required: "تعداد ماه را مشخص کنید",
          })}
          error={errors?.membership_type}
        >
          <option />
          <option value="3-month">سه ماهه</option>
          <option value="monthly">یک ماهه</option>
        </Form.Select>
      </Form.Label>

      <Form.Label htmlFor="status">
        نوع اشتراک
        <Form.Select
          id="status"
          disabled={isWorking}
          {...register("status", { required: "جنسیت را مشخص کنید" })}
          error={errors?.status}
        >
          <option />
          <option value="active">فعال </option>
          <option value="gold">طلایی</option>
          <option value="expired">منقضی شده</option>
        </Form.Select>
      </Form.Label>
      <Form.Label htmlFor="end_date">پایان عضویت :</Form.Label>
      <PersianDatePicker
        name="end_date"
        control={control}
        disabled={isWorking}
      />

      <Actions>
        <Form.BtnSubmit disabled={isWorking} type="submit">
          "افزودن"
        </Form.BtnSubmit>

        <Form.BtnCancel disabled={isWorking} onClick={close} type="button">
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
