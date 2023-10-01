import React from 'react'

interface CardProps {
    children: React.ReactNode
}

const Card: React.FC<CardProps> = ({ children }) => {
    return (
        <div className="w-full h-full bg-gray-300 dark:bg-slate-800 dark:hover:shadow-lime-400 rounded-md shadow-lg dark:shadow-md p-4 hover:scale-105 group-hover:scale-105 transition-all duration-200 ease-in-out">
            {children}
        </div>
    )
}

export default Card
