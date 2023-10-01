import React from "react";
import Card from "../ui/Card";


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
        <div className="text-center flex flex-col gap-2 p-2">
          {/* eslint-disable-next-line */}
          <img src={image} alt={alt} className="flex m-auto mb-5 w-cover h-[250px]" />
          <h4 className="text-2xl text-black dark:text-white font-bold">{title}</h4>

          <p className="text-slate-400 dark:text-slate-400 text-base">{description}</p>
        </div>
      </Card>
    </div>
  );
};

export default ServiceCard;
