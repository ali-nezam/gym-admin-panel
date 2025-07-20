import styled from "styled-components";
import Card from "../../ui/Card";
import { RiUserFollowLine } from "react-icons/ri";
import { toPersianDigits } from "../../utils/convertNumberToPersianDigits";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { PiDesktop } from "react-icons/pi";

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
  return (
    <StyledDashboardCoaches>
      <Card>
        <RiUserFollowLine />
        <div>
          <h3>همه مربی ها</h3>
          <h2>5,423</h2>
          <h4>
            <span>{toPersianDigits("14%")}</span> <p>رشد در این ماه</p>
          </h4>
        </div>
      </Card>
      <Card>
        <HiOutlineUserGroup />
        <div>
          <h3>مشتریان </h3>
          <h2>15,423</h2>
          <h4>
            <span>{toPersianDigits("24%")}</span> <p>رشد در این ماه</p>
          </h4>
        </div>
      </Card>
      <Card>
        <PiDesktop />
        <div>
          <h3>مربیان فعال</h3>
          <h2>236</h2>
          <h4>
            <span>{toPersianDigits("4%")}</span> <p>رشد در این ماه</p>
          </h4>
        </div>
      </Card>
    </StyledDashboardCoaches>
  );
}
