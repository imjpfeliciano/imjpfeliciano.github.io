import Container from "../ui/Container";
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
    <Container id="contact">
      <SectionDescription title="Get in Touch" description="contact me" />

      <div className="flex flex-col gap-4">
        <div className="flex flex-row">
          <div className="text-2xl text-black dark:text-white font-bold uppercase">
            Text
          </div>
          <div>
            form
          </div>
        </div>
      </div>

    </Container >
  );
};

export default ContactSection;
