import styled from "styled-components";
import Lottie from "lottie-react";
import pagenotFound from "../assets/pageNotFound.json";

export default function NotFound() {
  return (
    <Wrapper>
      <AnimationBox>
        <Lottie animationData={pagenotFound} loop={true} />
      </AnimationBox>
      <h2> ERROR 404 </h2>
      <p>صفحه مورد نظر یافت نشد.</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  text-align: center;
  color: #444;
  border-radius: 2%;
  background-color: #ffffff;
`;

const AnimationBox = styled.div`
  width: 90rem;
  max-width: 100%;
  height: auto;
`;
