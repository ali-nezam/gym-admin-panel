import styled from "styled-components";

const statusStyles = {
  true: {
    color: "#37b24d",
    background: "#d3f9d8",
    label: "فعال",
  },
  active: {
    color: "#37b24d",
    background: "#d3f9d8",
    label: "فعال",
  },
  false: {
    color: "#f03e3e",
    background: "#ffc9c9",
    label: "غیرفعال",
  },
  gold: {
    color: "#f59f00",
    // color: "#a17900", // طلایی تیره (متالیک‌تر)
    background: "#fff3bf",
    // background: "#fff8e1", // زمینه روشن و گرم‌تر
    label: "طلایی",
  },
  expired: {
    color: "#868e96",
    background: "#e9ecef",
    label: "منقضی شده",
  },
};

const StyledStatusWarper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledStatusBadge = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 5.6rem;
  width: 7.4rem;
  height: 2.8rem;
  border-radius: 6px;

  color: ${({ $color }) => $color};
  background-color: ${({ $background }) => $background};
`;
function StatusBadge({ type }) {
  const { color, background, label } = statusStyles[type] || {
    color: "#adb5bd",
    background: "#f1f3f5",
    label: "نامشخص",
  };

  return (
    <StyledStatusWarper>
      <StyledStatusBadge $color={color} $background={background}>
        {label}
      </StyledStatusBadge>
    </StyledStatusWarper>
  );
}
export default StatusBadge;
