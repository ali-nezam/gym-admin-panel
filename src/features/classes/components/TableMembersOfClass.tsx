import styled from "styled-components";
import Icon from "../../../ui/data-display/Icon";
import { MdDelete } from "react-icons/md";
import RowPhoneNumber from "../../../ui/data-display/RowPhoneNumber";
import { useDeleteMemberOfClass } from "../hooks/useDeleteMemberOfClass";
import SpinnerMini from "../../../ui/feedback/SpinnerMini";
import { MemberOfClassType } from "../../../types/class";

interface TableMembersOfClassProps {
  listOfMemberOfClass: MemberOfClassType[] | null | undefined;
}

function TableMembersOfClass({
  listOfMemberOfClass,
}: TableMembersOfClassProps) {
  const members = listOfMemberOfClass;
  const { deleteMemberOfClass, isDeleting } = useDeleteMemberOfClass();

  function handleDelete(id: number) {
    deleteMemberOfClass(id, {
      onSuccess: () => {
        console.log("yeah booy");
      },
    });
  }

  if (isDeleting) return <SpinnerMini />;

  if (!members) return null;

  return (
    <Table2>
      {members.length < 1 ? (
        <EmpetyMessage>موردی برای نمایش موجود ندارد </EmpetyMessage>
      ) : (
        members?.map((member) => (
          <Table key={member.id}>
            <h3>{member.name_member}</h3>
            <RowPhoneNumber>{member.number}</RowPhoneNumber>
            <Icon
              type="delete"
              icon={<MdDelete />}
              onClick={() => handleDelete(member.id)}
            />
          </Table>
        ))
      )}
    </Table2>
  );
}

export default TableMembersOfClass;

const Table = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;
`;
const Table2 = styled.div`
  padding: 1rem;
`;

const EmpetyMessage = styled.div`
  color: red;
`;
