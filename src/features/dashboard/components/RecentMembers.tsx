import styled from "styled-components";
import RowRecentMembersDashboard from "./RowRecentMembersDashboard";
import { useGetRecentMember } from "../hooks/useGetRecentMember";
import Spinner from "../../../ui/Spinner";

function RecentMembers() {
  const { recentMembers, isLoading } = useGetRecentMember();
  if (isLoading) return <Spinner />;
  if (!recentMembers) return;
  return (
    <StyledRecentMembers>
      <StyledTitle>اخرین اعضای ثبت نام شده</StyledTitle>
      {recentMembers.map((member, index) => (
        <RowRecentMembersDashboard
          member={member}
          index={index}
          key={member.id}
        />
      ))}
    </StyledRecentMembers>
  );
}

export default RecentMembers;

const StyledRecentMembers = styled.div`
  background-color: #ffffff;
  border-radius: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  min-height: 350px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  grid-column: 1/2;

  @media (max-width: 768px) {
    grid-column: 1/-1;
  }
`;
const StyledTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 600;
  padding-bottom: 2rem;
  color: #444;
`;
