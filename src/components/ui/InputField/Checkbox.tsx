import styled from "styled-components";

const CheckContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 1rem;

    label {
        margin-left: 0.5rem;
    }
`;

interface CheckboxProps {
    name: string;
    label: string;
    required?: boolean;
}

const Checkbox = ({ name, label, required}: CheckboxProps) => {
    return (
        <CheckContainer>
            <input type="checkbox" name={name} required={required} id={name}/>
            <label htmlFor={name}>{label}</label>
        </CheckContainer>
    )
}

export default Checkbox;