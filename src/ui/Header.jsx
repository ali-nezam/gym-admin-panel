// import styled from "styled-components";
// import SearchBox from "./SearchBox";

// const StyledHeader = styled.header`
//   padding: 2.4rem 2.4rem;
//   padding-bottom: 0;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: space-between;
//   align-self: start;
// `;

// function Header() {
//   return (
//     <StyledHeader>
//       <h1>سلام علی 👋</h1>
//       <SearchBox type="#fff" />
//     </StyledHeader>
//   );
// }

// export default Header;
import styled from "styled-components";
import AvatarImg from "../assets/AvatarImg.png"; // عکس پروفایل نمونه
import SearchBox from "./SearchBox";
function Header() {
  return (
    <StyledHeader>
      <SearchBox />

      <UserInfo>
        <img src={AvatarImg} alt="profile" />
        <strong>علی نظام</strong>
      </UserInfo>
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 4rem;
  background: #fff;
  border-bottom: 1px solid #eee;
  @media (max-width: 768px) {
    padding: 1.2rem 2rem; /* کاهش padding افقی در موبایل */
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  img {
    width: 4.6rem;
    height: 4.6rem;
    border-radius: 50%;
  }

  strong {
    font-size: 1.4rem;
    display: block;
  }

  @media (max-width: 768px) {
    gap: 1rem; /* کاهش فاصله بین آیتم‌ها */
    img {
      width: 3.6rem; /* کاهش اندازه عکس */
      height: 3.6rem;
    }
    strong {
      font-size: 1.2rem; /* کاهش اندازه فونت */
    }
  }
`;
