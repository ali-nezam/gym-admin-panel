import { useForm } from "react-hook-form";
import styled from "styled-components";
import LoginImg from "../../assets/LoginImg.svg";
import Button from "../../ui/Button";

function MainLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log("Login data:", data);
  }
  return (
    <StyledMainLogin>
      <Right>
        <img alt="svg" src={LoginImg} />
      </Right>

      <Left>
        <Logo>Gym Admin</Logo>
        <Title>مدیریت هوشمند باشگاه ورزشی</Title>
        <Detail>
          به حساب کاربری خود وارد شوید و مدیریت باشگاه را آغاز کنید
        </Detail>
        <LoginCard onSubmit={handleSubmit(onSubmit)}>
          <label>شماره تلفن</label>
          <input
            {...register("email", { required: "ایمیل اجباری است" })}
            type="text"
            placeholder="09131234567"
          />
          {errors.email && <Error>{errors.email.message}</Error>}

          <label>رمز عبور</label>
          <input
            {...register("password", { required: "رمز عبور اجباری است" })}
            type="password"
            // placeholder="رمز "
          />
          {errors.password && <Error>{errors.password.message}</Error>}

          <Buttons>
            <Button type="Secondary">ثبت نام</Button>
            <Button type="Primary">ورود</Button>
          </Buttons>
        </LoginCard>

        <FooterLinks>
          <span>© ۱۴۰۳ - مدیریت باشگاه ورزشی Gym Admin</span>
          <a href="/#">سیاست حفظ حریم خصوصی</a>
          <a href="/#">شرایط استفاده</a>
        </FooterLinks>
      </Left>
    </StyledMainLogin>
  );
}

export default MainLogin;

const StyledMainLogin = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr 1fr;
`;

// استایل‌ها
const Left = styled.div`
  /* box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1); */
  padding: 4rem 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  background-color: #ffff;
`;

const LoginCard = styled.form`
  width: 50rem;
  display: flex;
  flex-direction: column;

  gap: 1rem;

  input {
    padding: 0.8rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
  }
  label {
    color: #5932ea;
  }
`;

const Logo = styled.div`
  color: #5932ea;
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 10rem;
  /* display: flex; */
  display: flex;
  justify-content: flex-end;
`;
const Title = styled.div`
  color: #5932ea;
  font-size: 3.6rem;
`;
const Detail = styled.div`
  margin-bottom: 2rem;
`;
const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
  margin-top: 2rem;
  margin-bottom: 8.5rem;
`;

const FooterLinks = styled.div`
  position: absolute;
  bottom: 20px; /* فاصله از پایین */
  left: 25%;
  transform: translateX(-50%);
  display: flex;
  font-size: 1rem;
  gap: 2.5rem;
  a {
    cursor: pointer;
    &:hover {
      color: #4f46e5;
    }
  }
`;

const Error = styled.span`
  color: red;
  font-size: 0.85rem;
`;

const Right = styled.div`
  width: 50%;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.5rem 2rem;
  justify-content: center;
  align-items: center;
  background-color: #f9fafb;

  img {
    max-width: 50%;
    max-height: 50%;
    object-fit: contain;
  }
`;
