import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Cloud, Cpu, GitBranch, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

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
          <div className="relative h-72 md:h-[420px] overflow-hidden">
            <img
              src="/lovable-uploads/291e325e-c1d3-4076-8418-32eb97bc803c.png"
              alt="Audience at Cloud Community Days in Chandigarh"
              className="absolute inset-0 w-full h-full object-contain animate-enter"
              decoding="async"
            />
            {/* <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{background:"var(--gradient-hero)" as any, opacity:0.25}} />
            <div className="absolute inset-0 pointer-events-none" aria-hidden>
              <div className="w-40 h-40 rounded-xl bg-[hsl(var(--brand-blue))] opacity-20 blur-2xl absolute -top-10 -left-10" />
              <div className="w-40 h-40 rounded-xl bg-[hsl(var(--brand-green))] opacity-20 blur-2xl absolute bottom-0 right-10" />
              <div className="w-40 h-40 rounded-xl bg-[hsl(var(--brand-yellow))] opacity-20 blur-2xl absolute top-10 right-0" />
            </div> */}
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
      {/* About */}
      <section id="about" className="container pb-20 animate-fade-in">
        <header className="mb-6">
          <h2 className="font-display text-2xl md:text-3xl">About Cloud Community Days</h2>
          <p className="text-muted-foreground mt-2 max-w-prose">
            Cloud Community Days is a community-first conference celebrating cloud computing, DevOps, and AI/ML — built by developers, for developers.
          </p>
        </header>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="hover-scale">
            <CardHeader>
              <CardTitle>Mission</CardTitle>
              <CardDescription>Learn, share, and build together</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              We bring practitioners and leaders together to explore real-world cloud architectures, hands-on demos, and the future of AI-enhanced engineering.
            </CardContent>
          </Card>
          <Card className="hover-scale">
            <CardHeader>
              <CardTitle>Who should attend?</CardTitle>
              <CardDescription>Engineers • DevOps • Data/AI • Students</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Whether you’re shipping to prod daily or getting started with cloud-native, you’ll find tracks, labs, and mentors to level up.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Agenda Preview */}
      <section id="agenda" className="container pb-20 animate-fade-in">
        <header className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl md:text-3xl">Agenda Highlights</h2>
            <p className="text-muted-foreground mt-2">A full day of keynotes, breakouts, and hands-on labs.</p>
          </div>
          <Button asChild variant="outline"><Link to="/agenda">View full agenda</Link></Button>
        </header>
        <div className="grid gap-4 md:grid-cols-3">
          {[{t:'09:30', s:'Opening Keynote', d:'Cloud, DevOps, AI — what’s next'}, {t:'11:00', s:'Kubernetes at Scale', d:'Production patterns and pitfalls'}, {t:'14:00', s:'MLOps in Practice', d:'From notebooks to serving'}].map(i => (
            <Card key={i.s} className="hover-scale">
              <CardHeader>
                <CardTitle className="text-xl">{i.s}</CardTitle>
                <CardDescription>{i.t} • {i.d}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Speakers Preview */}
      <section id="speakers" className="container pb-20 animate-fade-in">
        <header className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl md:text-3xl">Featured Speakers</h2>
            <p className="text-muted-foreground mt-2">Leaders and builders from the cloud and AI community.</p>
          </div>
          <Button asChild variant="outline"><Link to="/speakers">Meet all speakers</Link></Button>
        </header>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[1,2,3,4].map((n) => (
            <Card key={n} className="hover-scale overflow-hidden">
              <div className="aspect-[4/3] bg-muted">
                <img src="/placeholder.svg" alt="Cloud Community Days speaker portrait" loading="lazy" className="w-full h-full object-cover animate-enter" />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">Speaker {n}</CardTitle>
                <CardDescription>Role • Company</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Sponsors */}
      <section id="sponsors" className="container pb-20 animate-fade-in">
        <header className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl md:text-3xl">Sponsors & Partners</h2>
            <p className="text-muted-foreground mt-2">Thanks to our amazing partners supporting the community.</p>
          </div>
          <Button asChild variant="outline"><Link to="/sponsors">Become a sponsor</Link></Button>
        </header>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
          {[...Array(10)].map((_,i) => (
            <div key={i} className="p-4 rounded-xl border bg-card flex items-center justify-center h-20 hover-scale">
              <img src="/placeholder.svg" alt="Cloud Community Days sponsor logo" loading="lazy" className="h-10 w-auto opacity-70 animate-enter" />
            </div>
          ))}
        </div>
      </section>

      {/* Venue Preview */}
      <section id="venue" className="container pb-20 animate-fade-in">
        <header className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl md:text-3xl">Venue</h2>
            <p className="text-muted-foreground mt-2">Join us in Chandigarh • Sep 2025</p>
          </div>
          <Button asChild variant="outline"><Link to="/venue">View venue & map</Link></Button>
        </header>
        <article className="rounded-xl border bg-card overflow-hidden">
          <div className="aspect-[16/9] bg-gradient-to-br from-[hsl(var(--brand-blue))]/15 via-[hsl(var(--brand-green))]/15 to-[hsl(var(--brand-yellow))]/15" />
        </article>
      </section>

      {/* Register CTA */}
      <section id="register" className="container pb-20 animate-fade-in">
        <div className="rounded-2xl border bg-gradient-to-r from-[hsl(var(--brand-blue))]/10 via-[hsl(var(--brand-green))]/10 to-[hsl(var(--brand-yellow))]/10 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-2xl md:text-3xl">Ready to join Cloud Community Days?</h2>
            <p className="text-muted-foreground mt-2">Limited seats. Save your spot today.</p>
          </div>
          <div className="flex gap-3">
            <Button asChild size="lg" variant="hero"><a href="/register">Register Now</a></Button>
            <Button asChild size="lg" variant="outline"><Link to="/about">Why attend?</Link></Button>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="container pb-20 animate-fade-in">
        <header className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl md:text-3xl">Gallery</h2>
            <p className="text-muted-foreground mt-2">Moments from past community events.</p>
          </div>
          <Button asChild variant="outline"><Link to="/gallery">See more</Link></Button>
        </header>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {[1,2,3,4,5,6].map((n) => (
            <div key={n} className="rounded-xl overflow-hidden border bg-card hover-scale">
              <img src="/placeholder.svg" alt="Cloud Community Days gallery image" loading="lazy" className="w-full h-48 object-cover animate-enter" />
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container pb-24 animate-fade-in">
        <header className="mb-6">
          <h2 className="font-display text-2xl md:text-3xl">Contact Us</h2>
          <p className="text-muted-foreground mt-2 max-w-prose">Have questions about tickets, speaking, or sponsorships? We’d love to help.</p>
        </header>
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="outline"><Link to="/contact">Get in touch</Link></Button>
          <Button asChild variant="ghost"><a href="#sponsors" className="story-link">Sponsorship</a></Button>
        </div>
      </section>

    </div>
  );
};

export default Index;
