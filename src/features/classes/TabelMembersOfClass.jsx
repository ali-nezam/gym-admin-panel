import styled from "styled-components";
import useGetMemberOfClass from "./useGetMemberOfClass";
import Icon from "../../ui/Icon";
import { MdDelete } from "react-icons/md";
import RowPhoneNumber from "../../ui/RowPhoneNumber";
import { useDleteMemberOfClass } from "./useDleteMemberOfClass";
import SpinnerMini from "../../ui/SpinnerMini";

function TabelMembersOfClass({ classId, enabled }) {
  const { data: response, isLoading } = useGetMemberOfClass(classId, enabled);
  const members = response?.data;
  const { deleteMemberOfClass, isDeleting } = useDleteMemberOfClass();
  function handleDelete(id) {
    deleteMemberOfClass(
      { memberId: id },
      {
        onSuccess: () => {
          console.log("yeah booy");
        },
      }
    );
  }

  if (isLoading || isDeleting) return <SpinnerMini />;

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
              disabled={isDeleting}
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
