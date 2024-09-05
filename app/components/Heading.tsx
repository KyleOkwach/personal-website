interface HeadingProps {
    children: React.ReactNode,
    icon?: React.ReactNode
}

const Heading: React.FC<HeadingProps> = ({ children, icon }) => {
    return (
        <div className="flex flex-row justify-center items-center gap-4 text-primary-custom w-full">
                <span className="flex-grow h-[1px] bg-primary-custom/50"></span>
                {icon}
                <div className="flex flex-row gap-4 items-center justify-center">
                    <h3 className="text-2xl text-text-custom">{children}</h3>
                </div>
                <span className="flex-grow h-[1px] bg-primary-custom/50"></span>
            </div>
    )
}