
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-4 bg-black text-white relative">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                        Have a project in mind or just want to chat? Feel free to reach out.
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-4">
                        <motion.a
                            href="mailto:sarthakpardeshi2005@gmail.com"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block px-8 py-4 bg-white text-black font-bold rounded-full text-lg hover:bg-gray-200 transition-colors"
                        >
                            Say Hello
                        </motion.a>

                        <motion.a
                            href="https://www.linkedin.com/in/sarthak-pardeshi-4b4069278"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full text-lg hover:bg-white/10 transition-colors backdrop-blur-sm"
                        >
                            LinkedIn
                        </motion.a>

                        <motion.a
                            href="https://github.com/SarthakPardeshi"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full text-lg hover:bg-white/10 transition-colors backdrop-blur-sm"
                        >
                            GitHub
                        </motion.a>
                    </div>

                    <footer className="mt-20 pt-10 border-t border-white/10 text-gray-500 text-sm">
                        <p>© {new Date().getFullYear()} Sarthak Pardeshi. All rights reserved.</p>
                    </footer>
                </motion.div>
            </div>
            <div className="absolute left-0 top-1/2 -z-10 h-[300px] w-[300px] bg-purple-600/10 rounded-full blur-[100px]"></div>
        </section>
    );
};

export default Contact;
