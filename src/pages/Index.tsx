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

      <section className="container pt-16 pb-20 md:pt-16 md:pb-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 animate-fade-in">
            <img src="/images/ccd-logo.png" alt="Cloud Community Days 2025 Logo" className="w-full max-w-xs md:max-w-md" style={{ height: "auto" }} />
            <p className="text-lg text-muted-foreground max-w-prose">
              The biggest, most exciting cloud community event of the year -
              focused on Cloud, DevOps, AI/ML, and developer networking.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-5 py-2 rounded-full bg-black text-white">Chandigarh • Sep 2025</span>
              <span className="px-5 py-2 rounded-full bg-black text-white">In-person</span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="/register"
                className="w-36 h-10 flex items-center justify-center bg-white border-2 border-black border-t-4 border-r-4 rounded-none font-medium text-black text-center transition hover:bg-black hover:text-white bg-gradient-to-r from-[hsl(var(--brand-blue))]/10 via-[hsl(var(--brand-green))]/10 to-[hsl(var(--brand-yellow))]/10"
              >
                Register Now
              </a>
              <Link
                to="/agenda"
                className="w-36 h-10 flex items-center justify-center bg-white border-2 border-black border-t-4 border-r-4 rounded-none font-medium text-black text-center transition hover:bg-black hover:text-white bg-gradient-to-r from-[hsl(var(--brand-blue))]/10 via-[hsl(var(--brand-green))]/10 to-[hsl(var(--brand-yellow))]/10"
              >
                View Agenda
              </Link>
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
              src="/images/hero-section.png"
              alt="Audience at Cloud Community Days in Chandigarh"
              className="absolute inset-0 w-full h-full object-contain animate-enter"
              decoding="async"
            />
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
            <article key={c.title} className="p-6 border bg-card shadow-soft animate-fade-in bg-white border-black border-t-4 border-r-4 font-medium bg-gradient-to-r from-[hsl(var(--brand-blue))]/10 via-[hsl(var(--brand-green))]/10 to-[hsl(var(--brand-yellow))]/10">
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

      {/* Location */}
      <section id="location" className="container pb-20 animate-fade-in">
        <header className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl md:text-3xl">Location — CGC Jhanjeri</h2>
            <p className="text-muted-foreground mt-2">Mohali, Punjab • Interactive map</p>
          </div>
          <Button asChild variant="outline"><Link to="/venue">Open full map</Link></Button>
        </header>
        <article className="rounded-xl border bg-card overflow-hidden shadow-soft">
          <iframe
            title="CGC Jhanjeri on Google Maps"
            src="https://www.google.com/maps?q=CGC%20Jhanjeri&z=15&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full aspect-[16/4]"
          />
        </article>
      </section>

      {/* Register CTA */}
      <section id="register" className="container pb-20 animate-fade-in">
        <div className="border-2 bg-gradient-to-r from-[hsl(var(--brand-blue))]/10 via-[hsl(var(--brand-green))]/10 to-[hsl(var(--brand-yellow))]/10 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-black bg-white border-black border-t-4 border-r-4 font-medium ">
          <div>
            <h2 className="font-display text-2xl md:text-3xl">Ready to join Cloud Community Days?</h2>
            <p className="text-muted-foreground mt-2">Limited seats. Save your spot today.</p>
          </div>
          <div className="flex gap-3">
            <Button asChild size="lg" className="flex text-black items-center justify-center bg-white border-2 border-black border-t-4 border-r-4 rounded-none font-medium transition hover:bg-black hover:text-white"><a href="/register">Register Now</a></Button>
            <Button asChild size="lg" className="flex text-black items-center justify-center bg-white border-2 border-black border-t-4 border-r-4 rounded-none font-medium transition hover:bg-black hover:text-white"><Link to="/about">Why attend?</Link></Button>
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
          {[
            "/images/devfest1.jpg",
            "/images/io1.png",
            "/images/ccd1.jpg",
          ].map((src, i) => (
            <div key={i} className="rounded-xl overflow-hidden border bg-card hover-scale">
              <img
                src={src}
                alt={`Cloud Community Days gallery image ${i + 1}`}
                loading="lazy"
                className="w-full h-48 object-cover animate-enter"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container pb-24 animate-fade-in">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left: Contact Info */}
          <div>
            <header className="mb-6">
              <h2 className="font-display text-2xl md:text-3xl">Contact Us</h2>
              <p className="text-muted-foreground mt-2 max-w-prose">
                Have questions about tickets, speaking, or sponsorships? We’d love to help.
              </p>
            </header>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="w-32 h-10 flex items-center justify-center bg-white border-2 border-black border-t-4 border-r-4 rounded-none font-medium transition hover:bg-black hover:text-white bg-gradient-to-r from-[hsl(var(--brand-blue))]/10 via-[hsl(var(--brand-green))]/10 to-[hsl(var(--brand-yellow))]/10"
              >
                Get in touch
              </Link>
              <a
                href="#sponsors"
                className="w-32 h-10 flex items-center justify-center bg-white border-2 border-black border-t-4 border-r-4 rounded-none font-medium transition hover:bg-black hover:text-white story-link bg-gradient-to-r from-[hsl(var(--brand-blue))]/10 via-[hsl(var(--brand-green))]/10 to-[hsl(var(--brand-yellow))]/10"
              >
                Sponsorship
              </a>
            </div>
          </div>
          {/* Right: Image */}
          <div className="flex justify-center">
            <img
              src="/images/contactus.png"
              alt="Cloud Community Days Chandigarh"
              className="rounded-xl border shadow-soft w-full max-w-md object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default Index;
