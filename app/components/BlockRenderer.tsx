interface BlockRendererProps {
    block: Array<any>,
    className?: string
}

const BlockRenderer: React.FC<BlockRendererProps> = ({ block, className }) => {
    const blockLength = block.length;
    return (
        <>
            { 
            block.map((item: any, index: any) => (
                <span key={index}>
                    <p className={ className }>
                        {item.children.map((child: any, index: any) => (
                            <span key={index}>{ child.text }</span>
                        ))}
                    </p>
                    { index !== blockLength - 1 && <br /> }
                </span>
                )
            )}
        </>
    );
};
export default BlockRenderer;