import styled from "styled-components";
import RowMembers from "./RowMembers";
import { useGetRecentMember } from "./useGetRecentMember";
import Spinner from "../../ui/Spinner";

function RecentMembers() {
  const { recentMembers, isLoading } = useGetRecentMember();
  if (isLoading) return <Spinner />;
  const recentMembers2 = recentMembers.data;
  return (
    <StyledRecentMembers>
      <StyledTitle>اخرین اعضای ثبت نام شده</StyledTitle>
      {recentMembers2.map((member, index) => (
        <RowMembers member={member} key={member.id} index={index} />
      ))}
    </StyledRecentMembers>
  );
}

export default RecentMembers;

const StyledRecentMembers = styled.div`
  background-color: #ffffff;
  border-radius: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  min-height: 350px; // همان مقدار Chart
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  grid-column: 1;
`;
const StyledTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 600;
  padding-bottom: 2rem;
  color: #444;
`;
