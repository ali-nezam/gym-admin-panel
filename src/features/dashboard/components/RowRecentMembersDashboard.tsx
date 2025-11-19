import styled from "styled-components";
import RowCellText from "../../../ui/data-display/RowCellText";

import StatusBadge from "../../../ui/data-display/StatusBadge";
import AvatarPhoto from "../../../ui/data-display/AvatarPhoto";
import RowPhoneNumber from "../../../ui/data-display/RowPhoneNumber";
import MemberType from "../../../types/member";
interface RowRecentMembersDashboardProps {
  member: Partial<MemberType>;
  index: number;
}
function RowRecentMembersDashboard({
  member,
  index,
}: RowRecentMembersDashboardProps) {
  // console.log(member);
  const { full_name, phone, status, profile_image_url, coachData } = member;

  const displayFullName = full_name || "نام نامشخص";
  const displayCoachDataExpertise = coachData?.expertise || "نام نامشخص";
  const displayStatus = status || "-";
  const displayPhone = phone || "-";
  const displayProfileImageUrl = profile_image_url || "";

  return (
    <StyledRowRecentMembersDashboard index={index}>
      <AvatarPhoto src={displayProfileImageUrl} alt="profile-img" />

      <RowCellText $type="full_name">{displayFullName}</RowCellText>

      <RowCellText $type="expertise">{displayCoachDataExpertise}</RowCellText>

      <StatusBadge type={displayStatus} $type="statusdashboard" />

      <RowPhoneNumber>{displayPhone}</RowPhoneNumber>
    </StyledRowRecentMembersDashboard>
  );
}

export default RowRecentMembersDashboard;
const StyledRowRecentMembersDashboard = styled.div<{ index: number }>`
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr 1fr 1fr;
  align-items: center;
  background-color: #ffffff;
  gap: 2.4rem;
  font-size: 1.6rem;

  padding: 0.2rem;
  border-bottom: 0.1rem solid #dddddd;

  border-top: ${({ index }) => (index === 0 ? "0.1rem solid #dddddd" : "none")};
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-template-rows: auto auto;
    gap: 1.4rem 1rem;
    padding: 1.2rem 2.2rem 1.2rem 1.2rem;
    border: 1px solid #eee;
    border-radius: 12px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.03);
    align-items: center;
    background-color: #fff;
    margin-bottom: 0.8rem;
  }
`;
