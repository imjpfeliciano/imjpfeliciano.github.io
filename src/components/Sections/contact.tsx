import React from "react";
import styled from "styled-components";
import Card from "../ui/Card";
import Container from "../ui/Container/Container";
import InputField, { Textarea } from "../ui/InputField";
import Checkbox from "../ui/InputField/Checkbox";
import SectionDescription from "../ui/SectionDescription";

// const FormContainer = styled.form`
//   display: flex;
//   flex-direction: column;
//   font-size: 1rem;
//   // color: ${(props) => props.theme.font.color.primary};
// `;

// const FormLabel = styled.p`
//   font-size: 1rem;
//   // color: ${(props) => props.theme.font.color.primary};
// `;
// const InputContainer = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;

//   @media (max-width: 768px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const RoundedButton = styled.button`
//   padding: 0.5rem 1rem;
//   border-radius: 25px;
//   font-size: 1rem;
//   font-weight: bold;
//   outline: none;
//   cursor: pointer;
//   border: 0;
//   background-color: ${(props) => props.theme.colors.primaryDark};
//   // color: ${(props) => props.theme.colors.buttonText};
//   margin-top: 1rem;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

//   &:hover {
//     opacity: 0.8;
//   }
// `;

// This form id comes from formspree.io, if you want to generate your own form id, go to formspree.io
const FORM_ID = "xgeqwqnl";

// TODO: Add calendly widget to book a call
const ContactSection = () => {
  return (
    <Container id="contact" className="text-slate-400 dark:text-slate-400">
      <SectionDescription title="Get in Touch" description="contact me" />

      <Card>
        <form
          action={`https://formspree.io/f/${FORM_ID}`}
          method="POST"
        >
          <label>To help you choose properly</label>
          <div>
            <InputField type="text" name="name" placeholder="Name" required />
            <InputField
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>

          <Textarea name="message" placeholder="Message" required />

          <b>GDPR Agreement *</b>

          <Checkbox
            name="agreement"
            label="I consent to having this website store my submitted information so they can respond to my inquiry."
            required
          />

          <button type="submit" className="text-gray-700 font-bold uppercase">Submit</button>
        </form>
      </Card>
    </Container>
  );
};

export default ContactSection;
