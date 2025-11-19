import styled from "styled-components";
import { toPersianDate } from "../../../utils/convertDate";
import RowCellText from "../../../ui/RowCellText";
import RowActions from "../../common/RowActions";

import StatusBadge from "../../../ui/StatusBadge";
import AvatarPhoto from "../../../ui/AvatarPhoto";
import RowPhoneNumber from "../../../ui/RowPhoneNumber";
import MemberType from "../../../types/member";

interface RowMembersProps {
  member: MemberType;
  index: number;
}
function RowMembers({ member, index }: RowMembersProps) {
  const { full_name, phone, end_date, status, profile_image_url, coachData } =
    member;

  const displayFullName = full_name || "نام نامشخص";
  const displayCoachDataFullName = coachData.full_name || "نام نامشخص";
  const displayCoachDataExpertise = coachData.expertise || "نام نامشخص";
  const displayStatus = status || "-";
  const displayPhone = phone || "-";
  const displayEndDate = end_date ? toPersianDate(end_date) : "تاریخ نامشخص";
  const displayProfileImageUrl = profile_image_url || "";

  return (
    <StyledRowMembers $iseven={index % 2 === 0}>
      <AvatarPhoto src={displayProfileImageUrl} alt="profile-img" />

      <RowCellText $type="full_name">{displayFullName}</RowCellText>

      <RowCellText $type="coach_name">
        {displayCoachDataFullName} <p>({displayCoachDataExpertise})</p>
      </RowCellText>

      <RowCellText $type="end_date">{displayEndDate}</RowCellText>

      <StatusBadge type={displayStatus} />

      <RowPhoneNumber>{displayPhone}</RowPhoneNumber>

      <RowActions data={member} type="members" />
    </StyledRowMembers>
  );
}

export default RowMembers;
const StyledRowMembers = styled.div<{ $iseven: boolean }>`
  display: grid;
  grid-template-columns: 0.5fr 1.6fr 1.5fr 1.5fr 1.3fr 1.2fr 0.7fr;
  align-items: center;
  background-color: ${({ $iseven }) => ($iseven ? "#fff" : "#f9f9f9")};
  gap: 2.4rem;
  font-size: 1.6rem;
  padding: 0 1rem;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1.5fr 3.5fr 2.5fr 2.5fr;
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
