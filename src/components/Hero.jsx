
import { motion } from "framer-motion";
import BlurText from "./BlurText";
import TextPressure from './TextPressure';
import LightRays from "./LightRays"; // Import LightRays

const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden z-10 px-4 pt-32">
            {/* Replaced static grid background with LightRays */}
            <div className="absolute inset-0 bg-[#000000] -z-20">
                <LightRays
                    raysColor="#5227ff" // Use hex color standard for this component
                    raysSpeed={0.5}
                    rayLength={2}
                    lightSpread={1}
                    className="absolute inset-0"
                />
                {/* Optional overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black z-[-5 pointer-events-none]"></div>
            </div>

            <div className="text-center w-full max-w-5xl mx-auto z-20 flex flex-col items-center">
                {/* Added margin-top and padding to prevent cut-off */}
                <div className="mb-4 w-full relative flex items-center justify-center p-4 mt-8" style={{ height: '350px' }}>
                    <TextPressure
                        text="SARTHAK PARDESHI"
                        flex={true}
                        alpha={false}
                        stroke={false}
                        width={true}
                        weight={true}
                        italic={true}
                        textColor="#ffffff"
                        minFontSize={36}
                    />
                </div>

                <div className="mt-2 text-center">
                    <BlurText
                        text="Creative Developer & UI/UX Enthusiast"
                        className="text-2xl md:text-3xl text-gray-400 font-light"
                        delay={0.5}
                    />
                </div>
                <div className="mt-4 text-center">
                    <BlurText
                        text="Crafting digital experiences with code and passion."
                        className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto"
                        delay={0.8}
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="mt-12 flex gap-4 justify-center"
                >
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-colors"
                    >
                        Contact
                    </motion.a>
                    <motion.a
                        href="#projects"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 border border-white/20 text-white rounded-full font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm"
                    >
                        View Work
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
