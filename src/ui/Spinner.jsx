// import styled, { keyframes } from "styled-components";

// const rotate = keyframes`
//   to {
//     transform: rotate(1turn)
//   }
// `;

// const Spinner = styled.div`
//   margin: 4.8rem auto;

//   width: 6.4rem;
//   aspect-ratio: 1;
//   border-radius: 50%;
//   background: radial-gradient(farthest-side, var(--color-brand-600) 94%, #0000)
//       top/10px 10px no-repeat,
//     conic-gradient(#0000 30%, var(--color-brand-600));
//   -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 10px), #000 0);
//   animation: ${rotate} 1.5s infinite linear;
// `;

// export default Spinner;

// components/SportySpinner.jsx

/* import styled, { keyframes } from "styled-components";
import { CgGym } from "react-icons/cg"; // آیکون دمبل

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const DumbbellIcon = styled(CgGym)`
  font-size: 6.4rem;
  color: #5932ea;
  animation: ${spin} 1s linear infinite;
`;

function SportySpinner() {
  return (
    <SpinnerWrapper>
      <DumbbellIcon />
    </SpinnerWrapper>
  );
}

export default SportySpinner; */

// components/SportySpinner.jsx

/* import styled, { keyframes } from "styled-components";
import { CgGym } from "react-icons/cg"; // آیکون دمبل

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const DumbbellIcon = styled(CgGym)`
  font-size: 3rem;
  color: #5932ea;
  animation: ${spin} 1s linear infinite;
`;

function SportySpinner() {
  return (
    <SpinnerWrapper>
      <DumbbellIcon />
    </SpinnerWrapper>
  );
}

export default SportySpinner; */

// components/FullScreenSpinner.jsx

/* <Dumbbell />; */

// components/FullScreenSpinner.jsx

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
