import styled, { keyframes } from "styled-components";
import { Dumbbell } from "lucide-react";

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-12px);
  }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(255, 255, 255, 0.95);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SpinnerIcon = styled(Dumbbell)`
  /* width: 4rem; */
  /* height: 4rem; */
  width: 6.4rem;
  height: 6.4rem;
  stroke: #5932ea;
  animation: ${bounce} 1s infinite ease-in-out;
`;

const LoadingText = styled.p`
  margin-top: 1rem;
  font-size: 1.4rem;
  color: #555;
`;

function FullScreenSpinner({ text = "در حال بارگذاری..." }) {
  return (
    <Overlay>
      <SpinnerIcon />
      <LoadingText>{text}</LoadingText>
    </Overlay>
  );
}

export default FullScreenSpinner;
