import styled from "styled-components";
import useDeleteCoach from "../coaches/useDeleteCoach";
import useDeleteMember from "../members/useDeleteMember";
const warningsMessage = { coaches: "مربی", members: "عضو" };
function ConfirmAction({ onClose, id, type }) {
  const { deleteCoach, isDeleting } = useDeleteCoach();
  const { deleteMember, isDeletingMember } = useDeleteMember();
  const disabeld = isDeleting || isDeletingMember;

  function handleSubmit() {
    if (type === "coaches")
      deleteCoach(id, {
        onSuccess: () => onClose(),
      });
    else {
      deleteMember(id, {
        onSuccess: () => onClose(),
      });
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
        <Button onClick={handleSubmit} disabled={disabeld}>
          حذف
        </Button>
        <CancelBtn onClick={onClose} disabled={disabeld}>
          لغو
        </CancelBtn>
      </StyledButtons>
    </div>
  );
}

export default ConfirmAction;

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
