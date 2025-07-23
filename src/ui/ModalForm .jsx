import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { createNewCoach } from "../services/apiCoaches";
import toast from "react-hot-toast";
import PersianDatePicker from "./PersianDatePicker";

function ModalForm({ onClose }) {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();

  const queryClient = useQueryClient();

  const onSubmit = (newCoach) => {
    const pickerValue = newCoach.Membership_date;
    // const shamsi = pickerValue?.format("MM/DD/YYYY"); // شمسی
    // console.log(shamsi);
    const miladi = pickerValue?.toDate().toISOString().split("T")[0];
    newCoach.Membership_date = miladi; // میلادی
    mutate({ ...newCoach });
  };

  const { mutate, isLoading } = useMutation({
    mutationFn: createNewCoach,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["coaches"] });
      toast.success("new cabin successfuly created");
      reset();
      onClose();
    },
    onError: (error) => {
      toast.error(error || "Error creating coach");
      reset();
      onClose();
    },
  });
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label>
        نام:
        <Input
          id="full_name"
          type="text"
          disabled={isLoading}
          {...register("full_name", { required: "نام اجباری است" })}
        />
        {errors?.full_name?.message && (
          <ErrorMessage>{errors.full_name.message}</ErrorMessage>
        )}
      </Label>

      <Label>
        تخصص:
        <Input
          disabled={isLoading}
          id="expertise"
          type="text"
          {...register("expertise", {
            required: "تخصص مربی مورد نظر را با دفت وارد کنید",
          })}
        />
        {errors?.expertise?.message && (
          <ErrorMessage>{errors.expertise.message}</ErrorMessage>
        )}
      </Label>

      <Label>
        شماره تماس:
        <Input
          disabled={isLoading}
          type="text"
          id="phone"
          {...register("phone", {
            required: "شماره را بدون صفر و +98 وارد کنید",
          })}
        />
        {errors?.phone?.message && (
          <ErrorMessage>{errors.phone.message}</ErrorMessage>
        )}
      </Label>

      <Label>
        وضعیت:
        <Select
          disabled={isLoading}
          {...register("coach_status", { required: true })}
        >
          <option value="true">فعال</option>
          <option value="false">غیرفعال</option>
        </Select>
      </Label>

      <Label>تاریخ عضویت:</Label>
      <PersianDatePicker name="Membership_date" control={control} />

      <Actions>
        <Button disabled={isLoading} type="submit">
          افزودن
        </Button>
        <CancelBtn type="button" onClick={onClose}>
          انصراف
        </CancelBtn>
      </Actions>
    </Form>
  );
}

export default ModalForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  font-size: 1.2rem;
  border-radius: 0.6rem;
  border: 1px solid #ccc;
`;

const Select = styled.select`
  padding: 0.8rem;
  font-size: 1.2rem;
  border-radius: 0.6rem;
  border: 1px solid #ccc;
`;

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

const ErrorMessage = styled.span`
  color: red;
`;
