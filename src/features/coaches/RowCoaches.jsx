import styled from "styled-components";
import { toPersianDate } from "../../utils/convertDate";
import RowActions from "../common/RowActions";
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

      <RowCellText $type="full_name">{full_name}</RowCellText>

      <RowCellText $type="expertise">{expertise} </RowCellText>

      <RowCellText $type="Membership_date">
        {toPersianDate(Membership_date)}
      </RowCellText>

      <StatusBadge type={coach_status} />

      <RowPhoneNumber>{phone}</RowPhoneNumber>

      <RowActions data={coach} type="coaches" />
    </StyledRowCoaches>
  );
}

export default RowCoaches;
