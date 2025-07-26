import styled from "styled-components";
import { toPersianDate } from "../../utils/convertDate";
import RowCellText from "../../ui/RowCellText";
import RowActions from "../coaches/RowActions";

import StatusBadge from "../../ui/StatusBadge";
import AvatarPhoto from "../../ui/AvatarPhoto";
import RowPhoneNumber from "../../ui/RowPhoneNumber";

const StyledRowMembers = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1.6fr 1.5fr 1.5fr 1.3fr 1.2fr 0.7fr;
  align-items: center;
  background-color: ${({ $isEven }) => ($isEven ? "#fff" : "#f9f9f9")};
  gap: 2.4rem;
  font-size: 1.6rem;
  padding: 0 1rem;
`;

function RowMembers({ member, index }) {
  const { full_name, phone, end_date, status, profile_image_url, coachData } =
    member;

  return (
    <StyledRowMembers $isEven={index % 2 === 0}>
      <AvatarPhoto src={profile_image_url} alt="profile-img" />

      <RowCellText>{full_name}</RowCellText>

      <RowCellText>
        {coachData.full_name} <p>({coachData.expertise})</p>
      </RowCellText>

      <RowCellText>{toPersianDate(end_date)}</RowCellText>

      <StatusBadge type={status} />

      <RowPhoneNumber>{phone}</RowPhoneNumber>

      <RowActions coach={member} type="members" />
    </StyledRowMembers>
  );
}

export default RowMembers;
