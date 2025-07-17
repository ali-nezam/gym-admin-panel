import styled from "styled-components";

const StyledRowDetail = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1.6fr 1.5fr 1.5fr 1.3fr 1.2fr;
  grid-template-columns: 1.6fr 1.5fr 1.5fr 1.3fr 1.2fr;
  padding: 0 0.3rem 0 2.4rem;
  border: 0 0.3rem 0.3rem 0.3rem solid #f4ede3;
  align-items: center;
  gap: 2.4rem;
  font-size: 1.6rem;
  font-weight: 600;
  div:not(:last-child) {
    border-left: 0.3rem solid #f4ede3;
  }
  background-color: ${({ $isEven }) => ($isEven ? "#fcf9f2" : "#f8f6ee")};
`;

// const Img = styled.img`
//   width: 6rem;
//   height: 6rem;
//   object-fit: cover;
//   border-radius: 8px;
//   border-radius: 50%;
//   box-shadow: 0 0 0 1px #e2e8f0;
// `;

const Name = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  padding-top: 1.2rem;
  padding-bottom: 1.2rem;
`;

function RowDetail({ coach, index }) {
  const {
    // coach_status,
    expertise,
    full_name,
    price_Subscription,
    phone,
    //profile_img,
    //    id,
  } = coach;

  return (
    <StyledRowDetail $isEven={index % 2 === 0}>
      {/* <Img src={profile_img} alt="x" /> */}
      <Name>{full_name}</Name>
      <Name>{expertise}</Name>
      <Name>{price_Subscription}</Name>
      {/* <Name>{coach_status ? "✅" : "❌"}</Name> */}
      <Name>{phone}</Name>
      <Name>عملیلات</Name>
    </StyledRowDetail>
  );
}

export default RowDetail;
