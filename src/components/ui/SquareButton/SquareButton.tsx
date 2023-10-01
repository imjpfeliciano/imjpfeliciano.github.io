import React from 'react'
import clsx from 'clsx'

interface SquareButtonProps {
    children: React.ReactNode
    onClick: () => void
}

const SquareButton: React.FC<SquareButtonProps> = ({ children, onClick }) => (
    <button className={clsx(
        'border border-blue-200 dark:border-lime-400 dark:text-white hover:text-blue-600 dark:hover:text-lime-400 hover:scale-105 rounded-md shadow-md px-4 py-2 transition-all duration-200 ease-in-out',
    )} onClick={onClick}>{children}</button>
)

export default SquareButton
