import { GrEdit } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import styled, { css } from "styled-components";
import { toPersianDate } from "../../utils/convertDate";
import { toPersianDigits } from "../../utils/convertNumberToPersianDigits";
const StyledRowDetail = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1.6fr 1.5fr 1.5fr 1.3fr 1.2fr 0.5fr;

  padding: 0 0.3rem 0 2.4rem;
  align-items: center;
  gap: 2.4rem;
  font-size: 1.6rem;
  /* div:not(:last-child) {
    border-left: 0.3rem solid #f4ede3;
  } */
  background-color: ${({ $isEven }) => ($isEven ? "#fff" : "#f9f9f9")};
`;

const Img = styled.img`
  width: 4rem;
  height: 4rem;
  object-fit: cover;
  border-radius: 8px;
  border-radius: 50%;
`;

const Name = styled.div`
  font-size: 1.4rem;
  font-weight: 400;
  padding-top: 1.2rem;
  padding-bottom: 1.2rem;
  color: #292d32;
`;

const EditIcon = styled(GrEdit)`
  cursor: pointer;
  transition: color 80ms ease-in-out;
  width: 2rem;
  height: 2rem;
  color: #6e6b7b;
  &:hover {
    color: #1669bb;
  }
`;

const DeleteIcon = styled(MdDelete)`
  cursor: pointer;
  transition: color 80ms ease-in-out;
  width: 2rem;
  height: 2rem;
  color: #6e6b7b;
  &:hover {
    color: #cc1f3d;
  }
`;

const Actions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.2rem;
`;

const Status = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  width: fit-content;
  display: grid;
  justify-content: center;

  padding: 0.5rem 1rem;
  border-radius: 6px;
  ${(props) =>
    props.type === "green" &&
    css`
      color: #37b24d;
      background-color: #d3f9d8;
    `}

  ${(props) =>
    props.type === "red" &&
    css`
      color: #f03e3e;
      background-color: #ffc9c9;
    `}
`;

function RowDetail({ coach, index }) {
  const {
    coach_status,
    expertise,
    full_name,
    Membership_date,
    phone,
    profile_img,
  } = coach;
  return (
    <StyledRowDetail $isEven={index % 2 === 0}>
      <Img src={profile_img} alt="profile-img" />
      <Name>{full_name}</Name>
      <Name>{expertise}</Name>
      <Name>{toPersianDate(Membership_date)}</Name>
      {coach_status ? (
        <Status type="green">فعال</Status>
      ) : (
        <Status type="red">غیر فعال</Status>
      )}
      <Name>{toPersianDigits(phone)}</Name>
      <Actions>
        <EditIcon />
        <DeleteIcon />
      </Actions>
    </StyledRowDetail>
  );
}

export default RowDetail;
