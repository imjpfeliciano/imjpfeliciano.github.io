import React from "react";
import styled from "styled-components";

// const Description = styled.h3`
//   text-transform: uppercase;
//   font-size: 1.25rem;
//   margin-bottom: 0;
//   font-weight: inherit;

// TODO: Copy this into the Title decorator component
//   &:before {
//     display: inline-block;
//     content: "";
//     width: 2rem;
//     height: 3px;
//     margin: 0 1rem 0 0;
//     transform: translateY(-5px);
//     background: linear-gradient(
//       90deg,
//       #c3dafe,
//       ${({ theme }) => theme.colors.primaryDark}
//     );
//   }
// `;

const Title = styled.h2`
  font-size: 1.875rem;
  text-transform: capitalize;
`;

const TitleDecorator = () => (
  <span className="w-[2rem] h-[5px] bg-black dark:bg-white" />
);

interface SectionDescriptionProps {
  title: string;
  description: string;
}

const SectionDescription: React.FC<SectionDescriptionProps> = ({
  title,
  description,
}) => {
  return (
    <div className="flex flex-col text-black dark:text-white mb-[2rem]">
      <h3 className="text-xl uppercase flex flex-row items-center gap-2 font-bold"><TitleDecorator /> {description}</h3>
      <h2 className="capitalize text-2xl font-bold">{title}</h2>
    </div>
  );
};

export default SectionDescription;
