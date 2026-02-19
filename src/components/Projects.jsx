
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import BlurText from "./BlurText";

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const projects = [
        {
            id: 1,
            name: "GramSevak",
            description: "A comprehensive digital platform streamlining rural administration and connecting citizens with services.",
            tech: ["MongoDB", "Express", "React", "Node.js"],
            image: "/Mern.gif", // Use image property for GIF
        },
        {
            id: 2,
            name: "CyberSecurity Lab",
            description: "Advanced penetration testing environment focused on mobile application security.",
            tech: ["App testing", "Frida", "root", "emulator bypass"],
            video: "https://videos.pexels.com/video-files/5377684/5377684-uhd_2560_1440_25fps.mp4", // Placeholder video
        },
        {
            id: 3,
            name: "Weather App",
            description: "Real-time weather forecasting application using OpenWeatherMap API.",
            tech: ["React", "API", "CSS"],
            video: "https://videos.pexels.com/video-files/855018/855018-hd_1920_1080_30fps.mp4", // Cloud time-lapse
        },
    ];

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section id="projects" className="py-20 px-4 bg-black text-white relative z-10">
            <div ref={ref} className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent inline-block pb-2">
                        Selected Works
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Showcasing some of my recent digital creations.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            variants={variants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="group relative rounded-2xl overflow-hidden bg-gray-900 border border-white/10 hover:border-purple-500/50 transition-colors cursor-pointer"
                        >
                            {/* Video/Image Placeholder */}
                            <div className="aspect-video w-full bg-gray-800 overflow-hidden relative">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                                    />
                                ) : (
                                    <video
                                        src={project.video}
                                        autoPlay
                                        muted
                                        loop
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                                    />
                                )}
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{project.name}</h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t) => (
                                        <span key={t} className="px-3 py-1 text-xs bg-white/5 rounded-full text-gray-300 border border-white/5">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
