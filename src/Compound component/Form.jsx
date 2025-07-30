import { forwardRef } from "react";
import styled from "styled-components";

function Form({ children, onSubmit }) {
  return <form onSubmit={onSubmit}>{children}</form>;
}

Form.Label = function FormLabel({ children, htmlFor }) {
  return <Label htmlFor={htmlFor}>{children}</Label>;
};

Form.Input = function FormInput(props, ref) {
  const { error, ...rest } = props;
  return (
    <>
      <Input ref={ref} {...rest} />
      {error?.message && <ErrorMessage>{error?.message}</ErrorMessage>}
    </>
  );
};

Form.Select = function FormSelect(props, ref) {
  const { error, children, ...rest } = props;
  return (
    <>
      <Select ref={ref} {...rest}>
        {children}
      </Select>
      ;{error?.message && <ErrorMessage>{error?.message}</ErrorMessage>}
    </>
  );
};

Form.BtnSubmit = function FormBtnSubmit({ children, ...props }) {
  return <BtnSubmit {...props}>{children}</BtnSubmit>;
};

Form.BtnCancel = function FormBtnCancel({ children, ...props }) {
  return <BtnCancel {...props}>{children}</BtnCancel>;
};

Form.Input = forwardRef(Form.Input);
Form.Select = forwardRef(Form.Select);
export default Form;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
`;
const Input = styled.input`
  flex: 1; // اضافه شد

  padding: 0.8rem;
  font-size: 1.2rem;
  border-radius: 0.6rem;
  border: 1px solid #ccc;
  margin-top: 0.75rem;
  margin-bottom: 1rem;
`;

const ErrorMessage = styled.span`
  color: red;
`;

const Select = styled.select`
  padding: 0.8rem;
  font-size: 1.2rem;
  border-radius: 0.6rem;
  border: 1px solid #ccc;
`;

const BtnSubmit = styled.button`
  background-color: #5932ea;
  color: white;
  padding: 0.8rem 1.6rem;
  border: none;
  border-radius: 0.6rem;
  font-weight: 600;
  cursor: pointer;
`;

const BtnCancel = styled(BtnSubmit)`
  background-color: #dee2e6;
  color: black;
`;
