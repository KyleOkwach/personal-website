interface BlockRendererProps {
    block: Array<any>,
}

const BlockRenderer: React.FC<BlockRendererProps> = ({ block }) => {
    const blockLength = block.length;
    return (
        <>
            { 
            block.map((item: any, index: any) => (
                <span key={index}>
                    <p>
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