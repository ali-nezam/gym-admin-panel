import { useForm } from "react-hook-form";
import styled from "styled-components";
import LoginImg from "../../assets/LoginImg.svg";
import Button from "../../ui/Button";
import useCreateNewLoginData from "./useCreateNewLoginData";
import Spinner from "../../ui/Spinner";
import { useNavigate } from "react-router-dom";
function MainLogin() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createNewLoginData, isCreating } = useCreateNewLoginData();

  function onSubmit(data) {
    createNewLoginData(
      { newlogin: data },
      {
        onSuccess: () => navigate("/dashboard"),
      }
    );
  }
  if (isCreating) return <Spinner />;
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
          <label>ایمیل</label>
          <input
            {...register("email", {
              required: "ایمیل اجباری است",
              pattern: {
                message: "ایمیل نامعتبر است",
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              },
            })}
            type="email"
            placeholder="info@example.com"
          />
          {errors.email && <Error>{errors.email.message}</Error>}

          <label>رمز عبور</label>
          <input
            {...register("password", {
              required: "رمز عبور اجباری است",
              minLength: {
                value: 8,
                message: "رمز عبور باید حداقل شامل 8 کاراکتر باشد",
              },
              pattern: {
                message: "رمز عبور باید شامل حروف و عدد باشد",
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              },
            })}
            type="password"
          />
          {errors.password && <Error>{errors.password.message}</Error>}

          <Buttons>
            <Button type="Primary">ثبت نام</Button>
            <Button type="Secondary">ورود</Button>
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
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

// استایل‌ها
const Left = styled.div`
  padding: 4rem 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffff;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    padding: 2rem;
    align-items: center;
    text-align: center;
  }
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
    @media (max-width: 768px) {
      width: 100%;
      height: 100%;
      padding: 1rem;
      img {
        max-width: 70%;
        max-height: 70%;
      }
    }
  }
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
    justify-content: start;
  }
  @media (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
    label {
      display: flex;
      justify-content: start;
    }
  }
`;

const Logo = styled.div`
  color: #5932ea;
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 10rem;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 768px) {
    margin-bottom: 0rem;
    justify-content: center;
  }
`;
const Title = styled.div`
  color: #5932ea;
  font-size: 3.6rem;
  @media (max-width: 768px) {
    font-size: 2.5rem; /
  }
`;
const Detail = styled.div`
  margin-bottom: 2rem;
  @media (max-width: 768px) {
  }
`;
const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
  margin-top: 2rem;
  margin-bottom: 8.5rem;
  @media (max-width: 768px) {
    justify-content: center;
    margin-bottom: 2rem;
  }
`;

const FooterLinks = styled.div`
  position: absolute;
  bottom: 20px;
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
  @media (max-width: 768px) {
    position: static;
    transform: none;
    margin-top: 4rem;
    gap: 0.5rem;
    flex-direction: row;
    margin-top: 1rem;
  }
`;

const Error = styled.span`
  color: red;
  font-size: 0.85rem;
`;
