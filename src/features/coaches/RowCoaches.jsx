import styled from "styled-components";
import { toPersianDate } from "../../utils/convertDate";
import { toPersianDigits } from "../../utils/convertNumberToPersianDigits";
import RowActions from "./RowActions";
import AvatarPhoto from "../../ui/AvatarPhoto";
import StatusBadge from "../../ui/StatusBadge";
import RowCellText from "./RowCellText";

const StyledRowCoaches = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1.6fr 1.5fr 1.5fr 1.3fr 1.2fr 0.5fr;
  padding-left: 1.2rem;
  align-items: center;
  background-color: ${({ $isEven }) => ($isEven ? "#fff" : "#f9f9f9")};
  gap: 2.4rem;
  font-size: 1.6rem;
`;

function RowCoaches({ coach, index }) {
  const {
    coach_status,
    expertise,
    full_name,
    Membership_date,
    phone,
    profile_img,
  } = coach;
  return (
    <StyledRowCoaches $isEven={index % 2 === 0}>
      <AvatarPhoto src={profile_img} alt="profile-img" />

      <RowCellText>{full_name}</RowCellText>

      <RowCellText>{expertise}</RowCellText>

      <RowCellText>{toPersianDate(Membership_date)}</RowCellText>

      {coach_status ? (
        <StatusBadge type={coach_status} />
      ) : (
        <StatusBadge type={coach_status} />
      )}

      <RowCellText>{toPersianDigits(phone)}</RowCellText>

      <RowActions />
    </StyledRowCoaches>
  );
}

export default RowCoaches;
