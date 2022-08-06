import React from 'react';
import styled from 'styled-components';
import Card from '../ui/Card';
import Container from '../ui/Container/Container';
import InputField, { Textarea } from '../ui/InputField';
import Checkbox from '../ui/InputField/Checkbox';
import SectionDescription from '../ui/SectionDescription';

const FormContainer = styled.form`
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

// This form id comes from formspree.io, if you want to generate your own form id, go to formspree.io
const FORM_ID = 'xgeqwqnl';

// TODO: Add calendly widget to book a call
const ContactSection = () => {
    return (
        <Container id="contact">
            <SectionDescription
                title="Get in Touch"
                description="contact me"
            />

            <Card>
                <FormContainer
                    action={`https://formspree.io/f/${FORM_ID}`}
                    method="POST"
                >
                    <FormLabel>To help you choose properly</FormLabel>
                    <InputContainer>
                        <InputField
                            type="text"
                            name="name"
                            placeholder="Name"
                            required
                        />
                        <InputField
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                        />
                    </InputContainer>

                    <Textarea
                        name="message"
                        placeholder="Message"
                        required
                    />
                    
                    <b>GDPR Agreement *</b>
    
                    <Checkbox
                        name="agreement"
                        label="I consent to having this website store my submitted information so they can respond to my inquiry."
                        required
                    />

                    <RoundedButton type="submit">Submit</RoundedButton>
                </FormContainer>

            </Card>
        </Container>
    )
}

export default ContactSection;
