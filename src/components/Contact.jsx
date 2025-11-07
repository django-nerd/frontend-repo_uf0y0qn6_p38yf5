import React, { useState } from 'react';
import { Mail, CopyCheck, Copy } from 'lucide-react';

const Contact = () => {
  const email = 'hello@example.com';
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-white backdrop-blur">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-2xl font-semibold">Let’s build resilient systems</h3>
            <p className="mt-2 text-white/70">I’m open to collaborating on backend-heavy products, platform work, and technical leadership roles.</p>
          </div>
          <div className="flex items-center gap-3">
            <a href={`mailto:${email}`} className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90">
              <Mail className="h-4 w-4" />
              Email me
            </a>
            <button onClick={copy} className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10">
              {copied ? <CopyCheck className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {copied ? 'Copied' : email}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
