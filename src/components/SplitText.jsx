
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SplitText = ({ text, delay = 0, className = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div ref={ref} className={`overflow-hidden pb-1 inline-block ${className}`}>
            {text.split("").map((char, index) => (
                <motion.span
                    key={index}
                    initial={{ y: "100%" }}
                    animate={isInView ? { y: 0 } : {}}
                    transition={{ duration: 0.5, delay: delay + index * 0.03, ease: "easeOut" }}
                    className="inline-block"
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </div>
    );
};

export default SplitText;
