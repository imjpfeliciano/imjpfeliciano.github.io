import Container from "../ui/Container";
import SectionDescription from "../ui/SectionDescription";

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
