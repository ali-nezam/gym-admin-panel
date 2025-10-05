import styled from "styled-components";

function Filter({ options }) {
  return (
    <StyledFilter>
      {options.map((option) => (
        <FilterButton key={option}>{option}</FilterButton>
      ))}
    </StyledFilter>
  );
}
export default Filter;

const StyledFilter = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.8rem;
  padding: 0.6rem 0.6rem;
  width: fit-content;
  background-color: #fafbff;
  border-radius: 8px;
  /* border: 8px #000 solid; */
`;

const FilterButton = styled.button`
  background-color: #fafbff;
  border: none;
  color: #b5b7c0;
  cursor: pointer;
  padding: 0.4rem 0.9rem;
  border-radius: 8px;
  &:hover {
    color: #fff;
    background-color: #5932ea;
  }
  &:nth-child(2) {
    color: #fff;
    background-color: #5932ea;
  }
`;
