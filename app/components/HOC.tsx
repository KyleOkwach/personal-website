interface HOCProps {
    component: React.ReactNode,
    href: string
};

const HOC: React.FC<HOCProps> = ({
    component,
    href
}) => {
    return (
        <section id={ href } className="flex items-center justify-center w-full min-h-screen 2xl:px-[512px] xl:px-80 md:px-40 px-10">
            { component }
        </section>
    )
}

export default HOC;