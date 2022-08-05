import styled from "styled-components";

const StyledIArea = styled.textarea`
    border: 1px solid #e2e8f0;
    padding: 0.5rem;
    border-radius: 5px;
    font-size: 1rem;
    margin: 0.5rem 0;
    margin-right: 0.5rem;

    &:last-of-type {
        margin-right: 0;
    }
`;

interface InputFieldProps {
    placeholder: string;
}

const InputField = (inputProps: InputFieldProps) => {
    return (
        <StyledIArea {...inputProps} />
    )
}

export default InputField;