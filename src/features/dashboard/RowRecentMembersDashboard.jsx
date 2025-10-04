import styled from "styled-components";
import RowCellText from "../../ui/RowCellText";

import StatusBadge from "../../ui/StatusBadge";
import AvatarPhoto from "../../ui/AvatarPhoto";
import RowPhoneNumber from "../../ui/RowPhoneNumber";

const StyledRowRecentMembersDashboard = styled.div`
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
function RowRecentMembersDashboard({ member, index }) {
  const { full_name, phone, status, profile_image_url, coachData } = member;
  return (
    <StyledRowRecentMembersDashboard index={index}>
      <AvatarPhoto src={profile_image_url} alt="profile-img" />

      <RowCellText $type="full_name">{full_name}</RowCellText>

      <RowCellText $type="expertise">{coachData.expertise}</RowCellText>

      <StatusBadge type={status} $type="statusdashboard" />

      <RowPhoneNumber>{phone}</RowPhoneNumber>
    </StyledRowRecentMembersDashboard>
  );
}

export default RowRecentMembersDashboard;
