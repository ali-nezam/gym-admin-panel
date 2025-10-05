import styled from "styled-components";
import Card from "../../ui/Card";
import { HiOutlineUsers } from "react-icons/hi2";
import { MdAttachMoney, MdOutlineClass } from "react-icons/md";
import useGetClassesStats from "./useGetDashboard";
import { toEditedPrice } from "../../utils/convertToEditedPirce";

export default function DashboardClasses() {
  const { stats, isLoading } = useGetClassesStats();
  return (
    <StyledDashboardClasses>
      <Card
        type="gold"
        icon={<MdAttachMoney />}
        title="هزینه دریافتی"
        value={stats ? toEditedPrice(stats?.totalRevenue) : ""}
        percent={"14%"}
        percentText="رشد در این ماه"
        isLoading={isLoading}
        textType="price"
      />

      <Card
        icon={<HiOutlineUsers />}
        title="ظرفیت کل / تکمیل‌شده"
        value={`${stats?.totalCapacity}  / ${"    "} ${stats?.totalRegistered}`}
        percent={"14%"}
        percentText="رشد در این ماه"
        isLoading={isLoading}
      />
      <Card
        icon={<MdOutlineClass />}
        title="تعداد کل کلاس ها"
        value={stats?.totalClasses}
        percent={"14%"}
        percentText="رشد در این ماه"
        type="blue"
        isLoading={isLoading}
      />
    </StyledDashboardClasses>
  );
}
const StyledDashboardClasses = styled.div`
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
