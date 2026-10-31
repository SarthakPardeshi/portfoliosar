import { motion } from "framer-motion";
import BlurText from "./BlurText";
import TextPressure from "./TextPressure";
import LightRays from "./LightRays";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden z-10 px-4 pt-20">
            {/* LightRays background */}
            <div className="absolute inset-0 bg-[#000000] -z-20">
                <LightRays
                    raysColor="#5227ff"
                    raysSpeed={0.5}
                    rayLength={2}
                    lightSpread={1}
                    className="absolute inset-0"
                />
                {/* Depth overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black pointer-events-none"></div>
            </div>

            <div className="text-center w-full max-w-5xl mx-auto z-20 flex flex-col items-center">
                {/* Single-line balanced container */}
                <div
                    className="relative w-full max-w-4xl mx-auto mb-6 flex items-center justify-center px-2"
                    style={{ height: "clamp(65px, 10vw, 115px)" }}
                >
                    <TextPressure
                        text="SARTHAK PARDESHI"
                        flex={true}
                        alpha={false}
                        stroke={false}
                        width={true}
                        weight={true}
                        italic={false}
                        scale={false}
                        textColor="#ffffff"
                        minFontSize={28}
                        fitFactor={0.65}
                    />
                </div>

                <div className="mt-2 text-center">
                    <BlurText
                        text="Creative Developer & UI/UX Enthusiast"
                        className="text-2xl md:text-3xl text-gray-300 font-light"
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