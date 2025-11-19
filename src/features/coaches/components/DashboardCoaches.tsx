import styled from "styled-components";
import Card from "../../../ui/Card";
import { RiUserFollowLine } from "react-icons/ri";
// import { HiOutlineUserGroup } from "react-icons/hi2";
import { PiDesktop } from "react-icons/pi";
import useGetcoachesStatus from "../hooks/useGetcoachesStatus";

export default function DashboardCoaches() {
  const { data: status, isLoading } = useGetcoachesStatus();

  return (
    <StyledDashboardCoaches>
      <Card
        // icon={<HiOutlineUserGroup />}
        icon={<PiDesktop />}
        title="تعداد کل مربی ها"
        value={status?.total}
        percent={"14%"}
        percentText="رشد در این ماه"
        isLoading={isLoading}
      />
      <Card
        icon={<RiUserFollowLine />}
        title="مربیان فعال"
        value={status?.active}
        percent={"14%"}
        percentText="رشد در این ماه"
        isLoading={isLoading}
      />
      <Card
        type="red"
        icon={<RiUserFollowLine />}
        title="مربیان غیر فعال"
        value={status?.unactive}
        percent={"14%"}
        percentText="رشد در این ماه"
        isLoading={isLoading}
      />
    </StyledDashboardCoaches>
  );
}
const StyledDashboardCoaches = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
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
      padding-right: 5.5rem;
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
