interface HeadingProps {
    children: React.ReactNode,
    icon?: React.ReactNode
}

const Heading: React.FC<HeadingProps> = ({ children, icon }) => {
    return (
        <div className="flex flex-col gap-2 w-auto">
            <h3 className="flex flex-row pr-16 items-center gap-4 justify-start text-3xl font-mono font-semibold text-primary-custom">{ icon }{ children }</h3>
            <span className="w-full h-[1px] bg-primary-custom/50"></span>
        </div>
    )
}

export default Heading;