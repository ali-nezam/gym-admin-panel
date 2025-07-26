import styled from "styled-components";
import { toPersianDate } from "../../utils/convertDate";
import RowActions from "./RowActions";
import AvatarPhoto from "../../ui/AvatarPhoto";
import StatusBadge from "../../ui/StatusBadge";
import RowCellText from "../../ui/RowCellText";
import RowPhoneNumber from "../../ui/RowPhoneNumber";

const StyledRowCoaches = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1.6fr 1.5fr 1.5fr 1.3fr 1.2fr 0.7fr;
  align-items: center;
  background-color: ${({ $isEven }) => ($isEven ? "#fff" : "#f9f9f9")};
  gap: 2.4rem;
  font-size: 1.6rem;
  padding: 0 1rem;
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

      <StatusBadge type={coach_status} />

      <RowPhoneNumber>{phone}</RowPhoneNumber>

      <RowActions coach={coach} />
    </StyledRowCoaches>
  );
}

export default RowCoaches;
