import styled from "styled-components";
import Card from "../../ui/Card";
import {
  RiGroupLine,
  RiPassExpiredLine,
  RiUserFollowLine,
} from "react-icons/ri";
import { PiMedalMilitaryDuotone } from "react-icons/pi";
import useGetMembersStatus from "./useGetMembersStatus";

export default function DashboardMembers() {
  const { data: status, isLoading } = useGetMembersStatus();

  return (
    <StyledDashboardMembers>
      <Card
        icon={<RiGroupLine />}
        // icon={<HiOutlineUserGroup />}
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

const StyledDashboardMembers = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  padding: 2.4rem;

  @media (min-width: 770px) {
    div:not(:last-child) {
      border-left: 0.3rem solid #f0f0f0;
    }
    div:not(:first-child) {
      padding-right: 2.5rem;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2.9rem;
    background-color: #f8f9fc;
    box-shadow: none;
    /* padding-top: 0; */
  }
`;
