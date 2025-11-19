import styled from "styled-components";
import { toPersianDate } from "../../../utils/convertDate";
import RowActions from "../../common/RowActions";
import AvatarPhoto from "../../../ui/data-display/AvatarPhoto";
import StatusBadge from "../../../ui/data-display/StatusBadge";
import RowCellText from "../../../ui/data-display/RowCellText";
import RowPhoneNumber from "../../../ui/data-display/RowPhoneNumber";
import { CoachType } from "../../../types/coaches";

interface RowCoachesProps {
  coach: CoachType;
  index: number;
}

function RowCoaches({ coach, index }: RowCoachesProps) {
  const {
    coach_status,
    expertise,
    full_name,
    Membership_date,
    phone,
    profile_img,
  } = coach;

  const displayName = full_name || "نام نامشخص";
  const displayExpertise = expertise || "-";
  const displayPhone = phone || "-";
  const displayProfileImageUrl = profile_img || "";
  const displayDate = Membership_date
    ? toPersianDate(Membership_date)
    : "تاریخ نامشخص";

  return (
    <StyledRowCoaches $isEven={index % 2 === 0}>
      <AvatarPhoto src={displayProfileImageUrl} alt={displayName} />

      <RowCellText $type="full_name">{displayName}</RowCellText>

      <RowCellText $type="expertise">{displayExpertise} </RowCellText>

      <RowCellText $type="Membership_date">{displayDate}</RowCellText>

      <StatusBadge type={coach_status} />

      <RowPhoneNumber>{displayPhone}</RowPhoneNumber>

      <RowActions data={coach} type="coaches" />
    </StyledRowCoaches>
  );
}

export default RowCoaches;

const StyledRowCoaches = styled.div<{ $isEven: boolean }>`
  display: grid;
  grid-template-columns: 0.5fr 1.6fr 1.5fr 1.5fr 1.3fr 1.2fr 0.7fr;
  align-items: center;
  background-color: ${({ $isEven }) => ($isEven ? "#fff" : "#f9f9f9")};
  gap: 2.4rem;
  font-size: 1.6rem;
  padding: 0 1rem;

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
