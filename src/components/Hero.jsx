import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Server, Database } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-start justify-center px-6 py-20">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white backdrop-blur">
          <Server className="h-3.5 w-3.5" />
          <span>Backend Engineer</span>
        </div>

        <h1 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-6xl">
          Building reliable, scalable systems
          <br />
          with a minimalist mindset
        </h1>
        
        <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          I design APIs, data pipelines, and infrastructure that quietly power great products. Clean interfaces, observable services, and pragmatic performance.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90"
          >
            View Work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
          >
            <Database className="h-4 w-4" />
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
