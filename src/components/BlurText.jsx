
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const BlurText = ({ text, delay = 0, className = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <h3 ref={ref} className={`flex flex-wrap overflow-hidden pb-4 ${className}`}>
            {text.split(" ").map((word, index) => (
                <motion.span
                    key={index}
                    initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
                    animate={isInView ? { filter: "blur(0px)", opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: delay + index * 0.1, ease: "easeOut" }}
                    className="inline-block mr-2"
                >
                    {word}&nbsp;
                </motion.span>
            ))}
        </h3>
    );
};
export default BlurText;
