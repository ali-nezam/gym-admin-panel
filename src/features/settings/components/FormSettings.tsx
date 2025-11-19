import styled from "styled-components";
import Form from "../../../ui/Compound_component/Form";
import { useForm } from "react-hook-form";
import useEditsettings from "../hooks/useEditSettings";
import useGetSettings from "../hooks/useGetSettings";
import { useEffect } from "react";
import FullScreenSpinner from "../../../ui/Spinner";
import { toEditedPrice } from "../../../utils/convertToEditedPirce";
import settings from "../../../types/settings";

function FormSettings() {
  const { settingsData, isLoading } = useGetSettings();
  const { editsettings, isEditing } = useEditsettings();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<settings>({
    defaultValues: {
      gym_name: "",
      Address: "",
      working_hours: "",
      Meal_plan_tuition: 0,
      simple_subscription_tuition: 0,
      gold_subscription_tuition: 0,
    },
  });

  useEffect(() => {
    const setting = settingsData?.[0];
    if (!setting) return;

    reset(settingsData[0]);
  }, [settingsData, reset]);

  const onSubmit = (newSettings: settings) => {
    console.log(newSettings);
    editsettings(
      {
        settingsEdited: { ...newSettings },
        id: newSettings.id,
      },
      {
        onSuccess: () => {
          reset();
        },
      }
    );
  };

  if (isLoading) return <FullScreenSpinner />;

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <StyledForm>
        <Form.Label htmlFor="gym_name">
          نام باشگاه
          <Form.Input
            id="gym_name"
            disabled={isEditing}
            type="text"
            error={errors?.gym_name}
            {...register("gym_name", { required: "نام باشگاه را وارد کنید" })}
          />
        </Form.Label>
        <Form.Label htmlFor="Address">
          آدرس باشگاه
          <Form.Input
            id="Address"
            disabled={isEditing}
            type="text"
            error={errors?.Address}
            {...register("Address", { required: "آدرس باشگاه را وارد کنید" })}
          />
        </Form.Label>
        <Form.Label htmlFor="working_hours">
          ساعات کاری
          <Form.Input
            id="working_hours"
            disabled={isEditing}
            type="text"
            error={errors?.working_hours}
            {...register("working_hours", {
              required: "ساعات کاری باشگاه را وارد کنید",
            })}
          />
        </Form.Label>
        <Form.Label htmlFor="Meal_plan_tuition">
          هزیینه برنامه غذایی
          <InputWithPreview>
            <Form.Input
              id="Meal_plan_tuition"
              disabled={isEditing}
              type="number"
              error={errors?.Meal_plan_tuition}
              {...register("Meal_plan_tuition", {
                required: "هزیینه برنامه غذایی را وارد کنید",
                valueAsNumber: true,
              })}
            />
            <PerviewPrive>
              {toEditedPrice(watch("Meal_plan_tuition"))}
            </PerviewPrive>
          </InputWithPreview>
        </Form.Label>

        <Form.Label htmlFor="personal_training_tuition">
          هزیینه اشتراک ساده
          <InputWithPreview>
            <Form.Input
              id="simple_subscription_tuition"
              disabled={isEditing}
              type="number"
              error={errors?.simple_subscription_tuition}
              {...register("simple_subscription_tuition", {
                required: "هزیینه اشتراک معمولی را وارد کنید",
                valueAsNumber: true,
              })}
            />
            <PerviewPrive>
              {toEditedPrice(watch("simple_subscription_tuition"))}
            </PerviewPrive>
          </InputWithPreview>
        </Form.Label>
        <Form.Label htmlFor="gold_subscription_tuition">
          هزیینه اشتراک طلایی
          <InputWithPreview>
            <Form.Input
              id="gold_subscription_tuition"
              disabled={isEditing}
              type="number"
              error={errors?.gold_subscription_tuition}
              {...register("gold_subscription_tuition", {
                required: "هزیینه اشتراک طلایی را وارد کنید",
                valueAsNumber: true,
              })}
            />
            <PerviewPrive>
              {toEditedPrice(watch("gold_subscription_tuition"))}
            </PerviewPrive>
          </InputWithPreview>
        </Form.Label>
      </StyledForm>
      <Actions>
        <Form.BtnSubmit disabled={isEditing} type="submit">
          ویرایش
        </Form.BtnSubmit>

        <Form.BtnCancel
          disabled={isEditing}
          type="button"
          onClick={() => reset()}
        >
          انصراف
        </Form.BtnCancel>
      </Actions>
    </Form>
  );
}

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 30rem 3rem 30rem;
  @media (max-width: 768px) {
    padding: 0 5rem 3rem 5rem;
  }
`;
const Actions = styled.div`
  display: flex;
  justify-content: center;
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
export default FormSettings;
