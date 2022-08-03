import React from 'react';
import styled from 'styled-components';
import Card from '../ui/Card';
import Container from '../ui/Container/Container';
import InputField, { Textarea } from '../ui/InputField';
import SectionDescription from '../ui/SectionDescription';

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    color: ${props => props.theme.colors.gray};
`

const FormLabel = styled.p`
    font-size: 1rem;
    color: ${props => props.theme.colors.gray};
`;
const InputContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

const CheckContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 1rem;
`;

const RoundedButton = styled.button`
    padding: 0.5rem 1rem;
    border-radius: 25px;
    font-size: 1rem;
    outline: none;
    cursor: pointer;
    border: 0;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
    margin-top: 1rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    &:hover {
        opacity: 0.8;
    }
`;

// TODO: Add calendly widget to book a call
const ContactSection = () => {
    return (
        <Container id="contact">
            <SectionDescription
                title="Get in Touch"
                description="contact me"
            />

            <Card>
                <FormContainer>
                    <FormLabel>To help you choose properly</FormLabel>
                    <InputContainer>
                        <InputField type="text" placeholder="Name" />
                        <InputField type="text" placeholder="Email" />
                    </InputContainer>

                    <Textarea placeholder="Message" />
                    {/* FIXME: Placeholder font family */}
                    

                    <b>GDPR Agreement *</b>
                    <CheckContainer>
                        <input type="checkbox" />
                        <label>I consent to having this website store my submitted information so they can respond to my inquiry.</label>
                    </CheckContainer>

                    <RoundedButton onClick={() => { }}>Submit</RoundedButton>
                </FormContainer>

            </Card>
        </Container>
    )
}

export default ContactSection;
