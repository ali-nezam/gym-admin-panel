import styled from "styled-components";
import Card from "../../ui/Card";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { MdAttachMoney, MdOutlineClass } from "react-icons/md";
import useDashboardCard from "./useDashboardCard";
import { toEditedPrice } from "../../utils/convertToEditedPirce";

export default function DashboardCard() {
  const { cards, isLoading } = useDashboardCard();

  return (
    <StyledDashboardCard>
      <Card
        type="blue"
        icon={<MdOutlineClass />}
        title="تعداد کل کلاس ها"
        value={cards?.classesCount || 0}
        percent={"14%"}
        percentText="رشد در این ماه"
        isLoading={isLoading}
      />
      <Card
        icon={<HiOutlineUserGroup />}
        title="تعداد کل مربیان"
        value={cards?.coachesCount || 0}
        percent={"24%"}
        percentText="رشد در این ماه"
        isLoading={isLoading}
      />
      <Card
        icon={<HiOutlineUserGroup />}
        type="gray"
        title="تعداد کل اعضا"
        value={cards?.membersCount || 0}
        percent={"4%"}
        percentText="رشد در این ماه"
        isLoading={isLoading}
      />
      <Card
        icon={<MdAttachMoney />}
        type="gold"
        title="مجموع درآمد"
        value={cards ? toEditedPrice(cards?.totalRevenue) : ""}
        percent={"4%"}
        percentText="رشد در این ماه"
        fontsmall={true}
        texttype="price-small"
        isLoading={isLoading}
      />
    </StyledDashboardCard>
  );
}

const StyledDashboardCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  padding: 2.4rem;
  grid-column: 1/-1;

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
