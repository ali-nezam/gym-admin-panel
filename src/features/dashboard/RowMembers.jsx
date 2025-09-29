import styled from "styled-components";
// import { toPersianDate } from "../../utils/convertDate";
import RowCellText from "../../ui/RowCellText";

import StatusBadge from "../../ui/StatusBadge";
import AvatarPhoto from "../../ui/AvatarPhoto";
import RowPhoneNumber from "../../ui/RowPhoneNumber";

const StyledRowMembers = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr 1fr 1fr;
  align-items: center;
  background-color: #ffffff;
  gap: 2.4rem;
  font-size: 1.6rem;

  padding: 0.2rem;
  border-bottom: 0.1rem solid #dddddd;

  border-top: ${({ index }) => (index === 0 ? "0.1rem solid #dddddd" : "none")};
`;
function RowMembers({ member, index }) {
  const { full_name, phone, status, profile_image_url, coachData } = member;
  return (
    <StyledRowMembers index={index}>
      <AvatarPhoto src={profile_image_url} alt="profile-img" />

      <RowCellText>{full_name}</RowCellText>

      <RowCellText>{coachData.expertise}</RowCellText>

      <StatusBadge type={status} />

      <RowPhoneNumber>{phone}</RowPhoneNumber>
    </StyledRowMembers>
  );
}

export default RowMembers;
