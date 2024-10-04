import Link from "next/link"
import React from "react"

interface CustomButtonProps {
    href?: string,
    onClick?: () => void,
    children?: React.ReactNode
    className?: string
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, className, href, onClick }) => {
    return (
        <Link className={`relative px-6 py-2 group ${className}`} href={href || ''} onClick={onClick}>
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-primary-custom group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-background-custom border-2 border-primary-custom group-hover:bg-primary-custom"></span>
            <span className="relative text-primary-custom group-hover:text-background-custom"> {children} </span>
        </Link>
)
}

export default CustomButton;