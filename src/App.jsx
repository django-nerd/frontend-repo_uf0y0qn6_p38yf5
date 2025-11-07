import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { User } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Minimal header */}
      <header className="fixed left-0 right-0 top-0 z-50 mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-1.5 text-sm font-medium backdrop-blur transition hover:bg-white/15">
          <User className="h-4 w-4" />
          <span>Backend Engineer</span>
        </a>
        <nav className="hidden gap-6 text-sm text-white/80 sm:flex">
          <a className="hover:text-white" href="#about">About</a>
          <a className="hover:text-white" href="#projects">Projects</a>
          <a className="hover:text-white" href="#contact">Contact</a>
        </nav>
      </header>

      <main className="">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="mx-auto max-w-6xl px-6 pb-10 text-xs text-white/60">
        <p>© {new Date().getFullYear()} • Built with a focus on reliability, performance, and minimalism.</p>
      </footer>
    </div>
  );
}

export default App;
