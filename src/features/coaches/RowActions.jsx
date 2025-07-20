import styled from "styled-components";
import Icon from "../../ui/Icon";
import { GrEdit } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { HiEye } from "react-icons/hi2";

const StyledRowActions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.2rem;
`;

function RowActions() {
  return (
    <StyledRowActions>
      <Icon type="edit" icon={<GrEdit />} />
      <Icon type="delete" icon={<MdDelete />} />
      <Icon type="details" icon={<HiEye />} />
    </StyledRowActions>
  );
}

export default RowActions;
