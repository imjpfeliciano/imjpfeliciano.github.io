import React from 'react'

interface CardProps {
    children: React.ReactNode
}

const Card: React.FC<CardProps> = ({ children }) => {
    return (
        <div className="w-full h-full bg-gray-200 dark:bg-slate-800 rounded-md shadow-lg p-4">
            {children}
        </div>
    )
}

export default Card
