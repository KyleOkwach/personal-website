interface HOCProps {
    children: React.ReactNode,
    href: string,
    className: string,
};

const HOC: React.FC<HOCProps> = ({
    children,
    href,
    className,
}) => {
    return (
        <section id={ href } className={ `flex relative items-center justify-center w-full min-h-screen 2xl:px-[512px] xl:px-80 md:px-40 px-10 ${className}`}>
            { children }
        </section>
    )
}

export default HOC;