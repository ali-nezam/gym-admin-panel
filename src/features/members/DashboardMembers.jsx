import styled from "styled-components";
import Card from "../../ui/Card";
import { RiPassExpiredLine, RiUserFollowLine } from "react-icons/ri";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { PiMedalMilitaryDuotone } from "react-icons/pi";
import useGetMembersStatus from "./useGetMembersStatus";
const StyledDashboardMembers = styled.div`
  display: flex;
  gap: 5rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
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

  return (
    <StyledDashboardMembers>
      <Card
        icon={<HiOutlineUserGroup />}
        title="تعداد کل اعضا"
        value={status?.total}
        percent={"14%"}
        percentText="رشد در این ماه"
        isLoading={isLoading}
      />
      <Card
        icon={<RiUserFollowLine />}
        title="اعضای فعال"
        value={status?.active}
        percent={"24%"}
        percentText="رشد در این ماه"
        isLoading={isLoading}
      />
      <Card
        icon={<RiPassExpiredLine />}
        type="gray"
        title="اعضای منقضی‌شده"
        value={status?.expired}
        percent={"4%"}
        percentText="رشد در این ماه"
        isLoading={isLoading}
      />
      <Card
        icon={<PiMedalMilitaryDuotone />}
        type="gold"
        title="اعضای با اشتراک طلایی"
        value={status?.gold}
        percent={"4%"}
        percentText="رشد در این ماه"
        isLoading={isLoading}
      />
    </StyledDashboardMembers>
  );
}
