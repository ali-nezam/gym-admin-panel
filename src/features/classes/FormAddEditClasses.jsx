import styled from "styled-components";
import { useForm } from "react-hook-form";
import Form from "../../Compound component/Form";
import { toEditedPrice } from "../../utils/convertToEditedPirce";
import useCreateNewClass from "./useCreateNewClass";
import useEditClass from "./useEditclass";

function FormAddEditClasses({ onClose, cls = {} }) {
  // console.log(cls);
  const editedSeasion = Boolean(cls.id);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: editedSeasion ? cls : {} });

  const { createClass, isCreating } = useCreateNewClass();
  const { editClass, isEditing } = useEditClass();
  const isWorking = isCreating || isEditing;

  const onSubmit = (formData) => {
    console.log(formData);

    if (editedSeasion) {
      editClass(
        { editedClass: { ...formData }, id: formData.id },
        {
          onSuccess: () => {
            onClose?.();
            reset();
          },
        }
      );
    } else {
      createClass(
        { newClass: { ...formData } },
        {
          onSuccess: () => {
            onClose?.();
            reset();
          },
        }
      );
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Label>
        نام کلاس :
        <Form.Input
          id="class_name"
          disabled={isWorking}
          type="text"
          error={errors?.class_name}
          {...register("class_name", { required: "نام کلاس اجباری است" })}
        />
      </Form.Label>
      <Form.Label>
        نام مربی:
        <Form.Input
          disabled={isWorking}
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
            disabled={isWorking}
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
          disabled={isWorking}
          error={errors?.capacity}
          id="capacity"
          {...register("capacity", {
            required: "ظرفیت کلاس مورد نظر را با دفت وارد کنید",
          })}
        />
      </Form.Label>

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
