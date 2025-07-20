import styled from "styled-components";

const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.5fr;
  gap: 2rem;
  svg {
    width: 8.4rem;
    height: 8.4rem;
    padding: 1rem;
    color: #37b24d;
    background-color: #d3f9d8;

    border-radius: 50%;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  h2 {
    color: #333333;
    font-size: 3.2rem;
  }
  h3 {
    font-size: 1.4rem;
  }
  h4 {
    color: #333333;
    font-weight: 400;
    display: flex;
    gap: 0.2rem;
    font-size: 1.2rem;
  }

  span {
    color: #00ac4f;
    font-size: 1.4rem;
    font-weight: 400;
  }
`;

export default Card;
