import React from "react";
import Card from "../ui/Card";
import styled from "styled-components";

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
    <div className="w-full">
      <Card>
        <div className="text-center flex flex-col gap-2">
          <ServiceImage src={image} alt={alt} />
          <h4 className="text-2xl text-black dark:text-white font-bold">{title}</h4>

          <p className="text-slate-400 dark:text-slate-400 text-base">{description}</p>
        </div>
      </Card>
    </div>
  );
};

export default ServiceCard;
