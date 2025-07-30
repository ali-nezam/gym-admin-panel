import styled from "styled-components";
import Card from "../../ui/Card";
import { RiUserFollowLine } from "react-icons/ri";
import { HiOutlineUserGroup } from "react-icons/hi2";
// import { PiDesktop } from "react-icons/pi";
const StyledDashboardClasses = styled.div`
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

export default function DashboardClasses() {
  return (
    <StyledDashboardClasses>
      <Card
        icon={<HiOutlineUserGroup />}
        title="تعداد کل مربی ها"
        value={85}
        percent={"14%"}
        percentText="رشد در این ماه"
      />
      <Card
        icon={<RiUserFollowLine />}
        title="مربیان فعال"
        value={11}
        percent={"14%"}
        percentText="رشد در این ماه"
      />
      <Card
        type="red"
        icon={<RiUserFollowLine />}
        title="مربیان غیر فعال"
        value={35}
        percent={"14%"}
        percentText="رشد در این ماه"
      />
    </StyledDashboardClasses>
  );
}
