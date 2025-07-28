import styled from "styled-components";
import Card from "../../ui/Card";
import { RiPassExpiredLine, RiUserFollowLine } from "react-icons/ri";
import { toPersianDigits } from "../../utils/convertNumberToPersianDigits";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { PiMedalMilitaryDuotone } from "react-icons/pi";
import useGetMembersStatus from "./useGetMembersStatus";
import Spinner from "../../ui/Spinner";
const StyledDashboardMembers = styled.div`
  display: flex;
  gap: 5rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
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
export default function DashboardMembers() {
  const { data: status, isLoading } = useGetMembersStatus();
  if (isLoading) return <Spinner />;
  return (
    <StyledDashboardMembers>
      <Card>
        <HiOutlineUserGroup />
        <div>
          <h3>تعداد کل اعضا</h3>
          <h2>{toPersianDigits(status?.total)}</h2>
          <h4>
            <span>{toPersianDigits("14%")}</span> <p>رشد در این ماه</p>
          </h4>
        </div>
      </Card>
      <Card>
        <RiUserFollowLine />
        <div>
          <h3>اعضای فعال</h3>
          <h2>{toPersianDigits(status?.active)}</h2>
          <h4>
            <span>{toPersianDigits("24%")}</span> <p>رشد در این ماه</p>
          </h4>
        </div>
      </Card>
      <Card type="gray">
        <RiPassExpiredLine />
        <div>
          <h3>اعضای منقضی‌شده</h3>
          <h2>{toPersianDigits(status?.expired)}</h2>
          <h4>
            <span>{toPersianDigits("4%")}</span> <p>رشد در این ماه</p>
          </h4>
        </div>
      </Card>
      <Card type="gold">
        <PiMedalMilitaryDuotone />
        <div>
          <h3>اعضای با اشتراک طلایی</h3>
          <h2>{toPersianDigits(status?.gold)}</h2>
          <h4>
            <span>{toPersianDigits("4%")}</span> <p>رشد در این ماه</p>
          </h4>
        </div>
      </Card>
    </StyledDashboardMembers>
  );
}
