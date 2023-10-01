import React from 'react'

interface CardProps {
    children: React.ReactNode
}

const Card: React.FC<CardProps> = ({ children }) => {
    return (
        <div className="bg-slate-800 mb-2 rounded-md shadow-sm p-1">{children}</div>
    )
}

export default Card
