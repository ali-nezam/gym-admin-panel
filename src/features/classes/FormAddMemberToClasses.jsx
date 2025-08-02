import { useForm } from "react-hook-form";
import styled from "styled-components";
import Form from "../../Compound component/Form";
import useAddMembertoClass from "./useAddMemberToClass";

function FormAddMemberToClasses({ onClose, classId }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({});
  const { addMemberToClass, isCreating } = useAddMembertoClass();

  function onSubmit(memberData) {
    memberData.class_id = classId;
    addMemberToClass(
      { newMemberToClass: { ...memberData } },
      {
        onSuccess: () => {
          onClose?.();
          reset();
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Label htmlFor="name_member">
        نام و نام خانوادگی
        <Form.Input
          id="name_member"
          disabled={isCreating}
          {...register("name_member", { required: "وارد کردن نام الزامی است" })}
          error={errors?.name_member}
        />
      </Form.Label>

      <Form.Label htmlFor="number">
        تلفن
        <Form.Input
          id="number"
          type="number"
          disabled={isCreating}
          {...register("number", {
            required: "وارد کردن تلفن الزامی است",
            maxLength: {
              value: 10,
              message: "شماره نباید بیش از ۱۰ رقم داشته باشد",
            },
            pattern: {
              value: /^[1-9]\d{9}$/,
              message: "شماره باید ۱۰ رقمی و بدون صفر ابتدایی باشد",
            },
          })}
          error={errors?.number}
        />
      </Form.Label>

      <Form.Label htmlFor="note">
        توضیحات
        <Form.Input
          id="note"
          disabled={isCreating}
          {...register("note")}
          error={errors?.note}
        />
      </Form.Label>

      <Actions>
        <Form.BtnSubmit>"افزودن"</Form.BtnSubmit>

        <Form.BtnCancel>انصراف</Form.BtnCancel>
      </Actions>
    </Form>
  );
}

export default FormAddMemberToClasses;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;
