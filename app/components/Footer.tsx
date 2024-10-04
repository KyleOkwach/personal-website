interface FooterProps {
    className?: string,
}

const Footer:React.FC<FooterProps> = ({ className }) => {
    return (
        <footer className={`w-full ${className}`}>
            <div className="flex flex-row items-center justify-center w-full">
                <h3>&copy</h3>
            </div>
        </footer>
    )
}

export default Footer;