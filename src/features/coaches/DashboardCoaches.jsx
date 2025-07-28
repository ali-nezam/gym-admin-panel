import styled from "styled-components";
import Card from "../../ui/Card";
import { RiUserFollowLine, RiUserForbidLine } from "react-icons/ri";
import { toPersianDigits } from "../../utils/convertNumberToPersianDigits";
import { HiOutlineUserGroup } from "react-icons/hi2";
// import { PiDesktop } from "react-icons/pi";
import useGetcoachesStatus from "./useGetcoachesStatus";
import Spinner from "../../ui/Spinner";
const StyledDashboardCoaches = styled.div`
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

export default function DashboardCoaches() {
  const { data: status, isLoading } = useGetcoachesStatus();

  return (
    <StyledDashboardCoaches>
      <Card
        icon={<HiOutlineUserGroup />}
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
