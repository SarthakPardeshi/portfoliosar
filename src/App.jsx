
import Hero from './components/Hero';
import About from './components/About';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <main className="bg-black min-h-screen text-white antialiased selection:bg-purple-500/30 font-inter">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}

export default App;
