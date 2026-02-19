
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import BlurText from "./BlurText";
import ElectricBorder from "./BorderBeam"; // Renaming the import to match file content

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const techStack = [
        "React", "Framer Motion", "Tailwind CSS", "JavaScript",
        "Node.js", "Express", "MongoDB", "Git"
    ];

    return (
        <section id="about" className="relative min-h-screen flex flex-col justify-center py-20 px-4 bg-black text-white">
            <div ref={ref} className="max-w-4xl mx-auto w-full z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent mb-6">
                        About Me
                    </h2>
                    <div className="h-1 w-20 bg-purple-500 rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6 text-lg text-gray-300 leading-relaxed"
                    >
                        <p>
                            Hi, I'm <span className="text-white font-semibold">Sarthak Pardeshi</span>.
                            I am a passionate developer who loves to create interactive and immersive web experiences.
                        </p>
                        <p>
                            My journey involves constantly exploring new technologies and pushing the boundaries of what's possible on the web.
                            I specialize in building modern applications with a focus on performance, accessibility, and clean design.
                        </p>
                        <p>
                            When I'm not coding, I'm likely exploring new design trends or contributing to open source projects.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative"
                    >
                        <ElectricBorder
                            color="#a855f7"
                            speed={1}
                            chaos={0.35}
                            borderRadius={24}
                            className="bg-white/5 p-8 backdrop-blur-sm"
                        >
                            <h3 className="text-2xl font-semibold mb-6 text-white relative z-10">Tech Stack</h3>
                            <div className="flex flex-wrap gap-3 relative z-10">
                                {techStack.map((tech, index) => (
                                    <motion.span
                                        key={tech}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ delay: 0.5 + (index * 0.1), type: "spring" }}
                                        className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm md:text-base border border-white/5 transition-colors cursor-default"
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </ElectricBorder>
                    </motion.div>
                </div>
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute right-0 bottom-0 -z-10 h-[400px] w-[400px] bg-blue-600/10 rounded-full blur-[120px]"></div>
        </section>
    );
};
export default About;
