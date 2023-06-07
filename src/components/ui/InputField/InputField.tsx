import styled from "styled-components";

const StyledInput = styled.input`
  border: 1px solid #e2e8f0;
  padding: 0.5rem;
  border-radius: 5px;
  font-size: 1rem;
  margin: 0.5rem 0;
  margin-right: 0.5rem;

  &:last-of-type {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

interface InputFieldProps {
  type: "text" | "email" | "password";
  name: string;
  placeholder: string;
  required?: boolean;
}
const InputField = (inputProps: InputFieldProps) => {
  return <StyledInput {...inputProps} className="placeholder:text-gray-500"/>;
};

export default InputField;
