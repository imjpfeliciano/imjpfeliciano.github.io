import React from "react";
import Card from "../ui/Card";
import styled from "styled-components";

const ServiceContent = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    width: 48%;
  }

  @media (min-width: 1366px) {
    width: 33%;
  }
`;

const ServiceItemCardContent = styled.div`
  margin: 0;

  display: flex;
  flex-direction: column;
`;

const ServiceImage = styled.img`
  display: flex;
  margin: 0 auto;
  margin-bottom: 1.25rem;
  width: -webkit-fill-available;
  height: 250px;

  & svg {
    path {
      fill: red;
    }
  }
`;

const ServiceTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
  height: 33%;

  color: ${({ theme }) => theme.font.color.serviceTitle};
`;

const ServiceDescription = styled.p`
  color: #718096;
  font-size: 1rem;
  text-align: center;
  height: 33%;
`;

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <ServiceContent>
      <Card>
        <ServiceItemCardContent>
          <ServiceImage src={image} />
          <ServiceTitle>{title}</ServiceTitle>

          <ServiceDescription>{description}</ServiceDescription>
        </ServiceItemCardContent>
      </Card>
    </ServiceContent>
  );
};

export default ServiceCard;
