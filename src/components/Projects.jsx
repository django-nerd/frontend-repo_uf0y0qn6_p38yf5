import React from 'react';
import { ServerCog, Cloud, Workflow } from 'lucide-react';

const projects = [
  {
    title: 'Observability Platform',
    icon: <ServerCog className="h-5 w-5" />,
    stack: ['FastAPI', 'Kafka', 'ClickHouse', 'Grafana'],
    desc: 'Streaming metrics ingestion with rollups, cardinality controls, and fast queries at scale.'
  },
  {
    title: 'Data Mesh Pipelines',
    icon: <Workflow className="h-5 w-5" />,
    stack: ['Python', 'Airflow', 'DuckDB', 'S3'],
    desc: 'Domain-owned data products with versioned schemas and lineage-first design.'
  },
  {
    title: 'Edge API Gateway',
    icon: <Cloud className="h-5 w-5" />,
    stack: ['Go', 'Envoy', 'Redis', 'PostgreSQL'],
    desc: 'Low-latency routing, rate limiting, canary releases, and zero-downtime deploys.'
  },
];

const Projects = () => {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">Selected Work</h2>
        <p className="mt-2 max-w-2xl text-white/70">A few systems I’ve designed or led end-to-end. I focus on clear contracts, observability, and practical performance.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <div key={i} className="group rounded-xl border border-white/10 bg-white/5 p-5 text-white backdrop-blur transition hover:bg-white/10">
            <div className="mb-3 inline-flex items-center gap-2 rounded-lg bg-white/10 p-2 text-sm">
              {p.icon}
              <span>{p.title}</span>
            </div>
            <p className="text-sm text-white/70">{p.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span key={s} className="rounded-full border border-white/10 bg-white/10 px-2 py-0.5 text-xs text-white/80">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
