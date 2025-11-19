import { forwardRef } from "react";
import { FieldError } from "react-hook-form";
import styled from "styled-components";

interface FormProps {
  children: React.ReactNode;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
}

function Form({ children, onSubmit }: FormProps) {
  return <form onSubmit={onSubmit}>{children}</form>;
}
///////////////////////////
interface LabelProps {
  children: React.ReactNode;
  htmlFor?: string;
}
Form.Label = function FormLabel({ children, htmlFor }: LabelProps) {
  return <Label htmlFor={htmlFor}>{children}</Label>;
};
///////////////////////////
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError;
}
const InputField = forwardRef<HTMLInputElement, InputProps>(
  ({ error, ...rest }, ref) => {
    return (
      <>
        <Input ref={ref} {...rest} />
        {error?.message && <ErrorMessage>{error.message}</ErrorMessage>}
      </>
    );
  }
);
// Form.Input = function FormInput(props, ref) {
//   const { error, ...rest } = props;
//   return (
//     <>
//       <Input ref={ref} {...rest} />
//       {error?.message && <ErrorMessage>{error?.message}</ErrorMessage>}
//     </>
//   );
// };
///////////
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: FieldError;
  children?: React.ReactNode;
}

const SelectField = forwardRef<HTMLSelectElement, SelectProps>(
  ({ error, children, ...rest }, ref) => {
    return (
      <>
        <Select ref={ref} {...rest}>
          {children}
        </Select>
        {error?.message && <ErrorMessage>{error.message}</ErrorMessage>}
      </>
    );
  }
);

// Form.Select = function FormSelect(props, ref) {
//   const { error, children, ...rest } = props;
//   return (
//     <>
//       <Select ref={ref} {...rest}>
//         {children}
//       </Select>
//       {error?.message && <ErrorMessage>{error?.message}</ErrorMessage>}
//     </>
//   );
// };
/////////////
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

Form.BtnSubmit = function FormBtnSubmit({ children, ...props }: ButtonProps) {
  return <BtnSubmit {...props}>{children}</BtnSubmit>;
};
//////////////////////

Form.BtnCancel = function FormBtnCancel({ children, ...props }: ButtonProps) {
  return <BtnCancel {...props}>{children}</BtnCancel>;
};
///////////

// Form.Input = forwardRef(Form.Input);
// Form.Select = forwardRef(Form.Select);

Form.Input = InputField;
Form.Select = SelectField;

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
  margin-top: 0.75rem;
  margin-bottom: 1rem;
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
