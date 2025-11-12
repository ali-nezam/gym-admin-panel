import styled from "styled-components";

interface IconProps {
  type: "delete" | "edit" | "details" | "create";
  // type?: any;
  icon: React.ReactNode;
  // icon?: any;
  // onClick?: any;
  onClick?: () => void;
  // text?: any;
  text?: string;
}

function Icon({ type, icon, onClick, text }: IconProps) {
  return (
    <StyleIcon onClick={onClick} type={type}>
      <>{icon}</>
      <>{text}</>
    </StyleIcon>
  );
}

export default Icon;

const hoverColors = {
  delete: "#cc1f3d",
  edit: "#0c8599",
  details: "#37b24d",
  create: "#ffffff",
};

const colors = {
  delete: "#6e6b7b",
  edit: "#6e6b7b",
  details: "#6e6b7b",
  create: "#ffffff",
};

const StyleIcon = styled.div<{ type: keyof typeof colors }>`
  cursor: pointer;
  transition: color 80ms ease-in-out;
  /* color: #6e6b7b; */
  svg {
    width: 2rem;
    height: 2rem;
  }
  color: ${({ type }) => colors[type] || "#6e6b7b"};
  &:hover {
    color: ${({ type }) => hoverColors[type] || "#6e6b7b"};
  }
  display: flex;
  gap: 1rem;
`;
