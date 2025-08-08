import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Cloud, Cpu, GitBranch, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="bg-grid-subtle">
      <Helmet>
        <title>Cloud Community Days — Cloud • DevOps • AI/ML</title>
        <meta name="description" content="Join Cloud Community Days for world-class talks on Cloud, DevOps, and AI/ML, plus hands-on sessions and networking." />
        <link rel="canonical" href="/" />
      </Helmet>

      <section className="container pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="font-display text-4xl md:text-6xl leading-tight">
              Cloud Community Days 2025
            </h1>
            <p className="text-lg text-muted-foreground max-w-prose">
              The biggest, most exciting cloud community event of the year —
              focused on Cloud, DevOps, AI/ML, and developer networking.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground">Chandigarh • Sep 2025</span>
              <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground">In‑person</span>
            </div>
            <div className="flex items-center gap-3">
              <Button asChild size="lg" variant="hero">
                <a href="/register">Register Now</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/agenda">View Agenda</Link>
              </Button>
            </div>
            <div className="flex gap-6 pt-2 text-muted-foreground">
              <div className="flex items-center gap-2"><Cloud /><span>Cloud</span></div>
              <div className="flex items-center gap-2"><Cpu /><span>AI/ML</span></div>
              <div className="flex items-center gap-2"><GitBranch /><span>DevOps</span></div>
              <div className="flex items-center gap-2"><Rocket /><span>Launchpad</span></div>
            </div>
          </div>
          <div className="relative h-72 md:h-[420px] rounded-2xl border bg-gradient-to-br from-[hsl(var(--brand-blue))]/15 via-[hsl(var(--brand-green))]/15 to-[hsl(var(--brand-yellow))]/15 shadow-soft animate-scale-in">
            <div className="absolute inset-0 rounded-2xl" style={{background:"var(--gradient-hero)" as any, opacity:0.15}} />
            <div className="absolute inset-0" aria-hidden>
              <div className="w-40 h-40 rounded-xl bg-[hsl(var(--brand-blue))] opacity-20 blur-2xl absolute -top-10 -left-10" />
              <div className="w-40 h-40 rounded-xl bg-[hsl(var(--brand-green))] opacity-20 blur-2xl absolute bottom-0 right-10" />
              <div className="w-40 h-40 rounded-xl bg-[hsl(var(--brand-yellow))] opacity-20 blur-2xl absolute top-10 right-0" />
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: 'Keynotes & Breakouts', desc: 'Hear from engineers and community leaders shaping cloud-native and AI.' },
            { title: 'Hands-on Labs', desc: 'Ship faster with guided labs on Kubernetes, serverless, and MLOps.' },
            { title: 'Networking', desc: 'Connect with builders, founders, and recruiters at Community Night.' },
          ].map((c) => (
            <article key={c.title} className="p-6 rounded-xl border bg-card shadow-soft animate-fade-in">
              <h3 className="font-medium text-lg">{c.title}</h3>
              <p className="text-muted-foreground mt-2">{c.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
