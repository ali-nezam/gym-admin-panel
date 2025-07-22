import styled from "styled-components";
import Lottie from "lottie-react";
// import emptyAnimation from "../../assets/empty.json";
import emptyAnimation from "../assets/empty.json";

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  padding: 4rem 2rem;
  text-align: center;
  color: #444;
`;

const AnimationBox = styled.div`
  width: 400px;
  max-width: 100%;
  margin-bottom: 2rem;
`;

export default function EmptyState() {
  return (
    <Wrapper>
      <AnimationBox>
        <Lottie animationData={emptyAnimation} loop={true} />
      </AnimationBox>
      <h2>چیزی برای نمایش نیست!</h2>
      <p>هنوز هیچ داده‌ای ثبت نشده.</p>
    </Wrapper>
  );
}
