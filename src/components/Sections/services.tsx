import React from "react";
import styled from "styled-components";
import Container from "../ui/Container";
import SectionDescription from "../ui/SectionDescription";
import ServiceCard from "../ServiceCard";

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  overflow: hidden;
`;

interface serviceCardProps {
  title: string
  description: string
  image: string
  alt: string
}

const services: serviceCardProps[] = [
  {
    title: "Responsive Design & Web Development",
    description:
      "I have experience on different projects since mobile optimization, developed plugins for different CMS platforms, React & Vue advanced level. Figma & Zeplin for web design.",
    image: "/assets/images/services/web-mobile.svg",
    alt: "web-mobile"
  },
  {
    title: "Migrate your source code to version control",
    description:
      "Migrate your codebase to cloud environments using git protocol, allowing your collaborators to easily contribute in the development process.",
    image: "/assets/images/services/version-control.svg",
    alt: "version-control"
  },
  {
    title: "Migrate to cloud environments",
    description:
      "Automation of procceses to validate the quality of the project by setting up unit and functional testing checks and coverage, code standards, automatic builds and automatic deployments to cloud environments.",
    image: "/assets/images/services/launch.svg",
    alt: "migrate-to-cloud"
  },
  {
    title: "Staff Training",
    description:
      "I have imparted different workshops related to new technologies, best practices and product development, which can boost your team by taking them to the next level of collaboration.",
    image: "/assets/images/services/mentoring.svg",
    alt: "staff-training"
  },
  {
    title: "Technical Interview",
    description:
      "I have experience in the technical interview process, I can help you to find the best candidates for your team, I can also help you to prepare for your next interview.",
    image: "/assets/images/services/interview.svg",
    alt: "technical-interview"
  },
  {
    title: "Analysis & Optimization",
    description:
      "Get a detailed report of your website performance, I can help you to improve your website performance and user experience.",
    image: "/assets/images/services/analytics.svg",
    alt: "analytics-and-optimization"
  },
];

const ServicesSection = () => {
  return (
    <Container id="services">
      <SectionDescription title="What Can I Do" description="My Services" />
      <CardContainer>
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </CardContainer>
    </Container>
  );
};

export default ServicesSection;
