import React from 'react'

const TitleDecorator = () => (
  <span className="w-[2rem] h-[5px] bg-black dark:bg-white" />
)

interface SectionDescriptionProps {
  title: string
  description: string
}

const SectionDescription: React.FC<SectionDescriptionProps> = ({
  title,
  description,
}) => {
  return (
    <div className="flex flex-col text-black dark:text-white mb-[2rem] justify-center items-center">
      <h3 className="text-xl uppercase flex flex-row items-center gap-2 font-bold">
        <TitleDecorator /> {description}
      </h3>
      <h2 className="capitalize text-2xl font-bold text-blue-500 dark:text-lime-400">
        {title}
      </h2>
    </div>
  )
}

export default SectionDescription
