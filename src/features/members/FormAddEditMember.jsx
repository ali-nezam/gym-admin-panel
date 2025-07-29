import { useForm } from "react-hook-form";
import styled from "styled-components";
import Form from "../../Compound component/Form";
import PersianDatePicker from "../../ui/PersianDatePicker";
function FormAddEditMember({ onClose, member = {} }) {
  const {
    register,
    handleSubmit,
    //reset,
    control,
    formState: { errors },
  } = useForm({ defaultValues: member });
  function onSubmit(memberData) {
    console.log(memberData);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Label htmlFor="full_name">نام و نام خانوادگی</Form.Label>
      <Form.Input
        id="full_name"
        {...register("full_name", { required: "وارد کردن نام الزامی است" })}
        error={errors?.full_name}
      />
      <Form.Label htmlFor="phone">تلفن</Form.Label>
      <Form.Input
        id="phone"
        {...register("phone", { required: "وارد کردن نام الزامی است" })}
        error={errors?.phone}
      />
      <Form.Label htmlFor="note">توضیحات</Form.Label>
      <Form.Input
        id="note"
        {...register("note", { required: "وارد کردن نام الزامی است" })}
        error={errors?.note}
      />
      <Form.Label htmlFor="gender">جنسیت</Form.Label>
      <Form.Select
        id="gender"
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
        {...register("status", { required: "جنسیت را مشخص کنید" })}
        error={errors?.status}
      >
        <option />
        <option value="unactive">فعال </option>
        <option value="gold">طلایی</option>
        <option value="experid">منقضی شده</option>
      </Form.Select>

      <Form.Label>تاریخ تولد:</Form.Label>
      <PersianDatePicker name="Membership_date" control={control} />
      <Button>ذخیره</Button>
      {/* <CancelBtn disabled={isWorking} type="button" onClick={onClose}>
        انصراف
      </CancelBtn> */}
    </Form>
  );
}

export default FormAddEditMember;

const Button = styled.button`
  background-color: #5932ea;
  color: white;
  padding: 0.8rem 1.6rem;
  border: none;
  border-radius: 0.6rem;
  font-weight: 600;
  cursor: pointer;
`;
