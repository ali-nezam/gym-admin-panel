import styled from "styled-components";
import useCoaches from "./useCoaches";
import RowDetail from "./RowDetail";
import Spinner from "../../ui/Spinner";
import SearchBox from "../../ui/SearchBox";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { toPersianDigits } from "../../utils/convertNumberToPersianDigits";
import { PiDesktop } from "react-icons/pi";
import { RiUserFollowLine } from "react-icons/ri";

const StyledTable = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  margin-top: 2.4rem;
  padding: 2.4rem;
  padding-right: 3.2rem;
`;

const TittleSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  h3 {
    color: #000;
    font-size: 2.2rem;
    font-weight: 800;
  }

  p {
    font-size: 1.4rem;
    color: #16c098;
    font-weight: 500;
  }
`;

const StyledTableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.5fr 1.6fr 1.5fr 1.5fr 1.3fr 1.2fr 0.5fr;
  padding: 1.3rem 0.3rem 1.3rem 2.4rem;
  border-top-right-radius: 14px;
  border-top-left-radius: 14px;
  border-radius: 30px 30px 0 0;
  gap: 2.4rem;
  font-size: 1.4rem;
  font-weight: 500rem;
  color: #b5b7c0;
`;

const HeadSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1.4rem;
  align-items: center;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1.4rem;
  align-items: center;

  h2 {
    font-size: 1.4rem;
    color: #b5b7c0;
    font-weight: 400;
  }
`;

const CoachesDashboard = styled.div`
  display: flex;
  gap: 5rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  padding: 2.4rem;
  div:not(:last-child) {
    border-left: 0.3rem solid #f0f0f0;
  }
`;

const CardDashboard = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.5fr;
  gap: 2rem;
  svg {
    width: 8.4rem;
    height: 8.4rem;
    padding: 1rem;
    color: #37b24d;
    background-color: #d3f9d8;

    border-radius: 50%;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  h2 {
    color: #333333;
    font-size: 3.2rem;
  }
  h3 {
    font-size: 1.4rem;
  }
  h4 {
    color: #333333;
    font-weight: 400;
    display: flex;
    gap: 0.2rem;
    font-size: 1.2rem;
  }

  span {
    color: #00ac4f;
    font-size: 1.4rem;
    font-weight: 400;
  }
`;

function Table() {
  const { coaches, isLoading /*error*/ } = useCoaches();

  if (isLoading) return <Spinner />;

  return (
    <>
      <CoachesDashboard>
        <CardDashboard>
          <RiUserFollowLine />
          <div>
            <h3>همه مربی ها</h3>
            <h2>5,423</h2>
            <h4>
              <span>{toPersianDigits("14%")}</span> <p>رشد در این ماه</p>
            </h4>
          </div>
        </CardDashboard>
        <CardDashboard>
          <HiOutlineUserGroup />
          <div>
            <h3>مشتریان </h3>
            <h2>15,423</h2>
            <h4>
              <span>{toPersianDigits("24%")}</span> <p>رشد در این ماه</p>
            </h4>
          </div>
        </CardDashboard>
        <CardDashboard>
          <PiDesktop />
          <div>
            <h3>مربیان فعال</h3>
            <h2>236</h2>
            <h4>
              <span>{toPersianDigits("4%")}</span> <p>رشد در این ماه</p>
            </h4>
          </div>
        </CardDashboard>
      </CoachesDashboard>
      <StyledTable>
        <HeadSection>
          <TittleSection>
            <h3>مربیان</h3>
            <p>مربیان فعال</p>
          </TittleSection>
          <SearchBox />
        </HeadSection>

        <StyledTableHeader>
          <div> </div>
          <div>نام</div>
          <div>تخصص</div>
          <div>تاریخ عضویت</div>

          <div>وضعیت</div>
          <div>تلفن</div>
          <div>عملیات</div>
        </StyledTableHeader>

        {coaches.map((coach, index) => (
          <RowDetail coach={coach} key={coach.id} index={index} />
        ))}
        <FooterSection>
          <h2>نمایش اطلاعات 1 تا 8 از 256 داده</h2>
          <h2>dsadsafsaf</h2>
        </FooterSection>
      </StyledTable>
    </>
  );
}

export default Table;
