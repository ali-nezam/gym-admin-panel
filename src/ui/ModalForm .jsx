// components/modals/AddCoachForm.jsx
import styled from "styled-components";
import { useState } from "react";

function ModalForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    expertise: "",
    phone: "",
    joinDate: "",
    status: "active",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // اینجا می‌تونی API بفرستی یا react-query mutation بزنی
    console.log("🔁 داده‌ی ارسال‌شده:", formData);
    onClose(); // بعد از ثبت، مودال بسته بشه
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        نام:
        <Input
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </Label>

      <Label>
        تخصص:
        <Input
          name="expertise"
          value={formData.expertise}
          onChange={handleChange}
          required
        />
      </Label>

      <Label>
        شماره تماس:
        <Input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </Label>

      <Label>
        تاریخ عضویت:
        <Input
          type="date"
          name="joinDate"
          value={formData.joinDate}
          onChange={handleChange}
        />
      </Label>

      <Label>
        وضعیت:
        <Select name="status" value={formData.status} onChange={handleChange}>
          <option value="active">فعال</option>
          <option value="inactive">غیرفعال</option>
        </Select>
      </Label>

      <Actions>
        <Button type="submit">افزودن</Button>
        <CancelBtn type="button" onClick={onClose}>
          انصراف
        </CancelBtn>
      </Actions>
    </Form>
  );
}

export default ModalForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  font-size: 1.2rem;
  border-radius: 0.6rem;
  border: 1px solid #ccc;
`;

const Select = styled.select`
  padding: 0.8rem;
  font-size: 1.2rem;
  border-radius: 0.6rem;
  border: 1px solid #ccc;
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

const Button = styled.button`
  background-color: #5f3dc4;
  color: white;
  padding: 0.8rem 1.6rem;
  border: none;
  border-radius: 0.6rem;
  font-weight: 600;
  cursor: pointer;
`;

const CancelBtn = styled(Button)`
  background-color: #dee2e6;
  color: black;
`;
