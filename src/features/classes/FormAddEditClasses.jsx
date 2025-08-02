import styled from "styled-components";
import { useForm } from "react-hook-form";
import Form from "../../Compound component/Form";
import { toEditedPrice } from "../../utils/convertToEditedPirce";
import useCreateNewClass from "./useCreateNewClass";

function FormAddEditClasses({ onClose, cls = {} }) {
  const editedSeasion = Boolean(cls.id);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const { createClass, isCreating } = useCreateNewClass();

  const onSubmit = (formData) => {
    createClass(
      { newClass: { ...formData } },
      {
        onSuccess: () => {
          onClose?.();
          reset();
        },
      }
    );
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Label>
        نام کلاس :
        <Form.Input
          id="class_name"
          type="text"
          error={errors?.class_name}
          {...register("class_name", { required: "نام کلاس اجباری است" })}
        />
      </Form.Label>
      <Form.Label>
        نام مربی:
        <Form.Input
          type="text"
          error={errors?.coach_name}
          id="coach_name"
          {...register("coach_name", {
            required: "نام مربی کلاس مورد نظر را با دفت وارد کنید",
          })}
        />
      </Form.Label>

      <Form.Label>
        شهریه:
        <InputWithPreview>
          <Form.Input
            id="price"
            type="number"
            error={errors?.price}
            {...register("price", {
              required: "شهریه کلاس مورد نظر را با دفت وارد کنید",
            })}
          />
          <PerviewPrive>{toEditedPrice(watch("price"))}</PerviewPrive>
        </InputWithPreview>
      </Form.Label>

      <Form.Label>
        ظرفیت:
        <Form.Input
          type="number"
          error={errors?.capacity}
          id="capacity"
          {...register("capacity", {
            required: "ظرفیت کلاس مورد نظر را با دفت وارد کنید",
          })}
        />
      </Form.Label>

      <Actions>
        <Form.BtnSubmit type="submit">
          {editedSeasion ? "ویرایش" : "افزودن"}
        </Form.BtnSubmit>

        <Form.BtnCancel onClick={onClose} type="button">
          انصراف
        </Form.BtnCancel>
      </Actions>
    </Form>
  );
}

export default FormAddEditClasses;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;
const PerviewPrive = styled.div`
  min-width: 80px;
  color: #5932ea;
  font-weight: bold;
`;
const InputWithPreview = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
