
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 backdrop-blur-md bg-black/30 border-b border-white/10"
        >
            <div
                className="flex items-center gap-4 cursor-pointer"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                {/* Logo removed, keeping only the name */}
                <div className="text-4xl font-ms-madi font-normal tracking-wide hover:text-purple-400 transition-colors">
                    Sarthak
                </div>
            </div>

            <ul className="flex gap-6 text-sm font-medium text-gray-300 hidden md:flex">
                <li className="hover:text-white transition-colors cursor-pointer">
                    <a href="#">Home</a>
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                    <a href="#projects">Projects</a>
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                    <a href="#about">About</a>
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                    <a href="#contact">Contact</a>
                </li>
            </ul>

            <a href="mailto:sarthakpardeshi2005@gmail.com" className="hidden md:block px-4 py-2 text-xs font-semibold bg-white text-black rounded-full hover:bg-gray-200 transition-colors">
                Let's Talk
            </a>
        </motion.nav>
    );
};

export default Navbar;
