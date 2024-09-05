import { motion } from "framer-motion";
import { useEffect, useState, ReactNode, useRef } from "react";

interface CustomCursorProps {
    children?: ReactNode,
    className?: string,
    maskSize?: number,
    setMaskSize: React.Dispatch<React.SetStateAction<number>>
}

const getMousePosition = (ref: React.RefObject<HTMLDivElement>) => {
    const [mousePosition, setMousePosition] = useState({ x:0, y:0 })
    const rect = ref.current?.getBoundingClientRect();

    const updateMousePosition = (e: MouseEvent) => {
      rect ? setMousePosition({ x: e.clientX - rect?.left, y: e.clientY- rect?.top }): setMousePosition({ x: e.clientX, y: e.clientY });
      // console.log(rect?.left, rect?.top.toString());
    }

    useEffect(() => {
        window.addEventListener("mousemove", updateMousePosition);
        return () => window.removeEventListener("mousemove", updateMousePosition);
    }, []);

    return mousePosition
}

const CustomCursor: React.FC<CustomCursorProps> = ({ children, className, maskSize = 32, setMaskSize }) => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = getMousePosition(containerRef);

    return (
        <motion.div
        ref={containerRef}
          animate={{
            WebkitMaskPosition: `${mousePosition.x - maskSize/2}px ${mousePosition.y - maskSize/2}px`,
            WebkitMaskSize: `${maskSize}px`,
          }}
          transition={{ type: "tween", ease: "backOut" }}
          className={`fixed mask w-full h-full ${className} ${children && !isHovered ? '' : ''}`}
        >
          <div
            className="h-auto w-auto"
            onMouseEnter={() => {setIsHovered(true); setMaskSize(360)}}
            onMouseLeave={() => {setIsHovered(false); setMaskSize(32)}}
          >
            {children}
          </div>

        </motion.div>
    )
}

export default CustomCursor;