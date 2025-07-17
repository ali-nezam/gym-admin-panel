import styled from "styled-components";

const StyledRowDetail = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1.6fr 1.5fr 1.5fr 1.3fr 1.2fr;
  padding: 0.3rem 0.3rem 0.3rem 2.4rem;
  border-bottom: 0.3rem solid #e9eaec;
  align-items: center;
  gap: 2.4rem;
  background-color: #f8f6ee;
  font-size: 1.6rem;
  font-weight: 600;
`;

const Img = styled.img`
  width: 6rem;
  height: 6rem;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 0 0 1px #e2e8f0;
`;

const Name = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
`;

function RowDetail({ coach }) {
  const {
    coach_status,
    expertise,
    full_name,
    price_Subscription,
    profile_img,
    //    id,
  } = coach;
  return (
    <StyledRowDetail>
      <Img src={profile_img} alt="x" />
      <Name>{full_name}</Name>
      <Name>{expertise}</Name>
      <Name>{price_Subscription}</Name>
      <Name>{coach_status ? "✅" : "❌"}</Name>
      <Name>عملیلات</Name>
    </StyledRowDetail>
  );
}

export default RowDetail;
