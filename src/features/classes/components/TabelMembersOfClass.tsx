import styled from "styled-components";
import Icon from "../../../ui/Icon";
import { MdDelete } from "react-icons/md";
import RowPhoneNumber from "../../../ui/RowPhoneNumber";
import { useDleteMemberOfClass } from "../hooks/useDleteMemberOfClass";
import SpinnerMini from "../../../ui/SpinnerMini";
import { MemberOfClassType } from "../../../types/class";

interface TabelMembersOfClassProps {
  listOfMemberOfClass: MemberOfClassType[] | null | undefined;
}

function TabelMembersOfClass({
  listOfMemberOfClass,
}: TabelMembersOfClassProps) {
  const members = listOfMemberOfClass;
  const { deleteMemberOfClass, isDeleting } = useDleteMemberOfClass();

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

export default TabelMembersOfClass;

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
