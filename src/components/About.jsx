import React from 'react';
import { ShieldCheck, Gauge, Boxes } from 'lucide-react';

const About = () => {
  const items = [
    {
      icon: <ShieldCheck className="h-5 w-5" />, 
      title: 'Reliability by design',
      desc: 'Defensive coding, graceful degradation, end-to-end observability, and SLO-driven priorities.'
    },
    {
      icon: <Gauge className="h-5 w-5" />, 
      title: 'Performance with purpose',
      desc: 'Latency budgets, backpressure, caching layers, and data layouts that matter.'
    },
    {
      icon: <Boxes className="h-5 w-5" />, 
      title: 'Composable systems',
      desc: 'Modular APIs, event-driven architectures, and clean contracts that evolve with the product.'
    },
  ];

  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">Principles</h2>
        <p className="mt-2 max-w-2xl text-white/70">Simple foundations, sharp edges removed. I favor clarity, correctness, and measurable outcomes over buzzwords.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, idx) => (
          <div key={idx} className="rounded-xl border border-white/10 bg-white/5 p-5 text-white backdrop-blur transition hover:bg-white/10">
            <div className="mb-3 inline-flex items-center justify-center rounded-lg bg-white/10 p-2">
              {item.icon}
            </div>
            <h3 className="text-lg font-medium">{item.title}</h3>
            <p className="mt-1 text-sm text-white/70">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
