import styled from "styled-components";
import { toPersianDate } from "../../utils/convertDate";
import RowCellText from "../../ui/RowCellText";
import RowActions from "../common/RowActions";

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

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1.5fr 3.5fr 2.5fr 2.5fr;
    grid-template-rows: auto auto;
    gap: 0.8rem 1.6rem;
    padding: 1.2rem;
    border: 1px solid #eee;
    border-radius: 12px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.03);
    align-items: center;
    background-color: #fff;
    margin-bottom: 0.8rem;
  }
`;

function RowMembers({ member, index }) {
  const { full_name, phone, end_date, status, profile_image_url, coachData } =
    member;

  return (
    <StyledRowMembers $isEven={index % 2 === 0}>
      <AvatarPhoto src={profile_image_url} alt="profile-img" />

      <RowCellText $isFullName={true}>{full_name}</RowCellText>

      <RowCellText $iscoach={true}>
        {coachData.full_name} <p>({coachData.expertise})</p>
      </RowCellText>

      <RowCellText $isEndDate={true}>{toPersianDate(end_date)}</RowCellText>

      <StatusBadge type={status} />

      <RowPhoneNumber>{phone}</RowPhoneNumber>

      <RowActions data={member} type="members" />
    </StyledRowMembers>
  );
}

export default RowMembers;
