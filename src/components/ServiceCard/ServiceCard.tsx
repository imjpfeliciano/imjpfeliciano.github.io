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

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  alt: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  title,
  description,
  alt,
}) => {
  return (
    <ServiceContent>
      <Card>
        <ServiceItemCardContent className="text-center">
          <ServiceImage src={image} alt={alt} />
          <span className="text-2xl text-gray-100 font-bold">{title}</span>

          <p className="text-gray-200 text-base">{description}</p>
        </ServiceItemCardContent>
      </Card>
    </ServiceContent>
  );
};

export default ServiceCard;
