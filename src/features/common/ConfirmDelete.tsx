import styled from "styled-components";
import useDeleteCoach from "../coaches/useDeleteCoach";
import useDeleteMember from "../members/useDeleteMember";
import useDeleteClass from "../classes/useDeleteClass";
import { useContext } from "react";
import ModalContext from "../../context/ModalContext";

const warningsMessage = { coaches: "مربی", members: "عضو", classes: "کلاس" };

interface ConfirmDeleteProps {
  id: number;
  type: "coaches" | "members" | "classes";
}
function ConfirmDelete({ id, type }: ConfirmDeleteProps) {
  const { close } = useContext(ModalContext);
  const { deleteCoach, isDeleting } = useDeleteCoach();
  const { deleteMember, isDeletingMember } = useDeleteMember();
  const { deleteClass, isDeletingClass } = useDeleteClass();

  const disabled = isDeleting || isDeletingMember || isDeletingClass;

  function handleSubmit() {
    if (type === "coaches")
      deleteCoach(id, {
        onSuccess: () => close?.(),
      });
    else if (type === "members") {
      deleteMember(id, {
        onSuccess: () => close?.(),
      });
    } else if (type === "classes") {
      deleteClass(
        { classId: id },
        {
          onSuccess: () => close?.(),
        }
      );
    } else {
      close?.();
    }
  }

  return (
    <div>
      <Warning>
        آیا مطمئن هستید که می‌خواهید این {warningsMessage[type]} را برای همیشه
        حذف کنید؟
        <br /> این اقدام قابل بازگشت نیست.
      </Warning>
      <StyledButtons>
        <Button onClick={handleSubmit} disabled={disabled}>
          حذف
        </Button>
        <CancelBtn onClick={close} disabled={disabled}>
          لغو
        </CancelBtn>
      </StyledButtons>
    </div>
  );
}

export default ConfirmDelete;

const Warning = styled.div`
  font-weight: 500;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  background-color: #f03e3e;
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
const StyledButtons = styled.div`
  display: flex;
  align-items: center;
  padding-left: 3rem;
  gap: 2rem;

  justify-content: end;
`;
