import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Cloud, Cpu, GitBranch, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Index = () => {
  // Countdown logic
  const targetDate = new Date("2025-08-23T00:00:00");
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          mins: Math.floor((diff / (1000 * 60)) % 60),
          secs: Math.floor((diff / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, mins: 0, secs: 0 });
        clearInterval(timer);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const agendaPreview = [
    { time: "09:00 AM", title: "Reporting Starts" },
    { time: "12:10 PM", title: "Content Contest", speaker: "GDG Cloud Chandigarh Team", },
    // { time: "11:20 AM", title: "Dart on Cloud Run for Flutter developers to go full-stack!", speaker: "Aditya Thakur" },
    { time: "5:00 PM", title: "Closing Remarks" },
  ];

  return (
    <div className="bg-grid-subtle">
      <Helmet>
        <title>Cloud Community Days — Cloud • DevOps • AI/ML</title>
        <meta name="description" content="Join Cloud Community Days for world-class talks on Cloud, DevOps, and AI/ML, plus hands-on sessions and networking." />
        <link rel="canonical" href="/" />
      </Helmet>

      {/* Hero Section */}
      <section className="container pt-8 pb-10 md:pt-16 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div className="space-y-6 animate-fade-in">
            <img src="/images/ccd-logo.png" alt="Cloud Community Days 2025 Logo" className="w-80 md:w-full max-w-xs md:max-w-md" style={{ height: "auto" }} />
            <p className="text-base md:text-lg text-muted-foreground max-w-prose mx-auto">
              The biggest, most exciting cloud community event of the year - focused on Cloud, DevOps, AI/ML, and developer networking.
            </p>
            <div className="flex flex-wrap gap-2 md:gap-3">
              <span className="px-4 py-2 bg-black text-white text-xs md:text-base">Chandigarh • Sep 2025</span>
              <span className="px-4 py-2 bg-black text-white text-xs md:text-base">In-person</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href="/register"
                className="w-full sm:w-36 h-10 flex items-center justify-center bg-white border-2 border-black border-t-4 border-r-4 rounded-none font-medium text-black text-center transition hover:bg-black hover:text-white bg-gradient-to-r from-[hsl(var(--brand-blue))]/10 via-[hsl(var(--brand-green))]/10 to-[hsl(var(--brand-yellow))]/10"
              >
                Register Now
              </a>
              <Link
                to="/agenda"
                className="w-full sm:w-36 h-10 flex items-center justify-center bg-white border-2 border-black border-t-4 border-r-4 rounded-none font-medium text-black text-center transition hover:bg-black hover:text-white bg-gradient-to-r from-[hsl(var(--brand-blue))]/10 via-[hsl(var(--brand-green))]/10 to-[hsl(var(--brand-yellow))]/10"
              >
                View Agenda
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 pt-2 text-muted-foreground justify-center">
              <div className="flex items-center gap-2"><Cloud /><span>Cloud</span></div>
              <div className="flex items-center gap-2"><Cpu /><span>AI/ML</span></div>
              <div className="flex items-center gap-2"><GitBranch /><span>DevOps</span></div>
              <div className="flex items-center gap-2"><Rocket /><span>Launchpad</span></div>
            </div>
          </div>
          <div className="relative h-48 sm:h-72 md:h-[420px] overflow-hidden mt-6 md:mt-0">
            <img
              src="/images/hero-section.png"
              alt="Audience at Cloud Community Days in Chandigarh"
              className="absolute inset-0 w-full h-full object-contain animate-enter"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* Countdown */}
      <section className="w-full border-black px-4 sm:px-8 py-8 mb-8 md:mb-12 flex flex-col items-center justify-center animate-fade-in">
        <h2 className="font-display text-xl md:text-5xl mb-4 text-center">Countdown to Cloud Community Days</h2>
        <div className="flex flex-wrap justify-center gap-6 md:gap-20 text-3xl md:text-7xl font-bold text-black">
          <div className="flex flex-col items-center">
            <span>{timeLeft.days}</span>
            <span className="text-xs font-normal">Days</span>
          </div>
          <div className="flex flex-col items-center">
            <span>{timeLeft.hours}</span>
            <span className="text-xs font-normal">Hours</span>
          </div>
          <div className="flex flex-col items-center">
            <span>{timeLeft.mins}</span>
            <span className="text-xs font-normal">Minutes</span>
          </div>
          <div className="flex flex-col items-center">
            <span>{timeLeft.secs}</span>
            <span className="text-xs font-normal">Seconds</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container pb-20">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {[
            { title: 'Keynotes & Breakouts', desc: 'Hear from engineers and community leaders shaping cloud-native and AI.' },
            { title: 'Hands-on Labs', desc: 'Ship faster with guided labs on Kubernetes, serverless, and MLOps.' },
            { title: 'Networking', desc: 'Connect with builders, founders, and recruiters at Community Night.' },
          ].map((c) => (
            <article key={c.title} className="p-4 md:p-6 border bg-card shadow-soft animate-fade-in bg-white border-black border-t-4 border-r-4 font-medium bg-gradient-to-r from-[hsl(var(--brand-blue))]/10 via-[hsl(var(--brand-green))]/10 to-[hsl(var(--brand-yellow))]/10">
              <h3 className="font-medium text-base md:text-lg">{c.title}</h3>
              <p className="text-muted-foreground mt-2 text-sm md:text-base">{c.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="container pb-20 animate-fade-in">
        <header className="mb-6">
          <h2 className="font-display text-xl md:text-3xl">About Cloud Community Days</h2>
          <p className="text-muted-foreground mt-2 max-w-prose text-sm md:text-base">
            Cloud Community Days is a community-first conference celebrating cloud computing, DevOps, and AI/ML — built by developers, for developers.
          </p>
        </header>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="w-full bg-white border-2 border-black border-t-4 border-r-4 rounded-none font-medium text-black bg-gradient-to-r from-[hsl(var(--brand-blue))]/10 via-[hsl(var(--brand-green))]/10 to-[hsl(var(--brand-yellow))]/10">
            <CardHeader>
              <CardTitle>Mission</CardTitle>
              <CardDescription>Learn, share, and build together</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              We bring practitioners and leaders together to explore real-world cloud architectures, hands-on demos, and the future of AI-enhanced engineering.
            </CardContent>
          </Card>
          <Card className="w-full bg-white border-2 border-black border-t-4 border-r-4 rounded-none font-medium text-black bg-gradient-to-r from-[hsl(var(--brand-blue))]/10 via-[hsl(var(--brand-green))]/10 to-[hsl(var(--brand-yellow))]/10">
            <CardHeader>
              <CardTitle>Who should attend?</CardTitle>
              <CardDescription>Engineers • DevOps • Data/AI • Students</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Whether you're shipping to prod daily or getting started with cloud-native, you'll find tracks, labs, and mentors to level up.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Agenda Preview */}
      <section id="agenda" className="container pb-20 animate-fade-in">
        <header className="mb-6 flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-xl md:text-3xl">Agenda Highlights</h2>
            <p className="text-muted-foreground mt-2 text-sm md:text-base">
              Glimpse of the day: keynotes, breakouts, and hands-on labs.
            </p>
          </div>
          <Button asChild variant="outline" className="flex text-black items-center justify-center bg-white border-2 border-black border-t-4 border-r-4 rounded-none font-medium transition hover:bg-black hover:text-white w-full md:w-auto bg-gradient-to-r from-[hsl(var(--brand-blue))]/10 via-[hsl(var(--brand-green))]/10 to-[hsl(var(--brand-yellow))]/10">
            <Link to="/agenda">View full agenda</Link>
          </Button>
        </header>
        <div className="grid gap-6 md:grid-cols-3">
          {agendaPreview.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-4 border-2 border-black border-t-4 border-r-4 bg-white shadow-lg bg-gradient-to-r from-[hsl(var(--brand-blue))]/10 via-[hsl(var(--brand-green))]/10 to-[hsl(var(--brand-yellow))]/10"
            >
              <div className="flex flex-col items-center justify-center min-w-[70px]">
                <div className="bg-[hsl(var(--brand-blue))] text-white font-bold px-3 py-1 text-xs md:text-sm shadow">
                  {item.time}
                </div>
              </div>
              <div>
                <div className="font-medium text-base md:text-lg">{item.title}</div>
                {item.speaker && (
                  <div className="text-xs md:text-sm text-muted-foreground mt-1">
                    <span className="font-semibold">by</span> {item.speaker}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>  

      {/* Sponsors */}
      <section id="sponsors" className="container pb-20 animate-fade-in">
        <header className="mb-6 flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-xl md:text-3xl">Sponsors & Partners</h2>
            <p className="text-muted-foreground mt-2 text-sm md:text-base">Thanks to our amazing partners supporting the community.</p>
          </div>
          <Button asChild variant="outline" className="w-full md:w-auto"><Link to="/sponsors">Become a sponsor</Link></Button>
        </header>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 items-center">
          {[...Array(10)].map((_,i) => (
            <div key={i} className="p-2 md:p-4 rounded-xl border bg-card flex items-center justify-center h-16 md:h-20 hover-scale">
              <img src="/placeholder.svg" alt="Cloud Community Days sponsor logo" loading="lazy" className="h-8 md:h-10 w-auto opacity-70 animate-enter" />
            </div>
          ))}
        </div>
      </section>

      {/* Location */}
      <section id="location" className="container pb-20 animate-fade-in">
        <header className="mb-6 flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-xl md:text-3xl">Location — Chandigarh University</h2>
            <p className="text-muted-foreground mt-2 text-sm md:text-base">Mamupur, Punjab • Interactive map</p>
          </div>
        </header>
        <article className="rounded-xl border bg-card overflow-hidden shadow-soft">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3428.2062520807226!2d76.57060829678954!3d30.768790200000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ffb140bd63e07%3A0x68591e334d17a988!2sChandigarh%20University!5e0!3m2!1sen!2sin!4v1754969616756!5m2!1sen!2sin"
            loading="lazy"
            allowfullscreen=""
            referrerpolicy="no-referrer-when-downgrade"
            className="w-full aspect-[16/9] md:aspect-[16/4]"
          />
        </article>
      </section>

      {/* Register CTA */}
      <section id="register" className="container pb-20 animate-fade-in">
        <div className="border-2 bg-gradient-to-r from-[hsl(var(--brand-blue))]/10 via-[hsl(var(--brand-green))]/10 to-[hsl(var(--brand-yellow))]/10 p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-black bg-white border-black border-t-4 border-r-4 font-medium">
          <div className="mb-4 md:mb-0">
            <h2 className="font-display text-xl md:text-3xl">Ready to join Cloud Community Days?</h2>
            <p className="text-muted-foreground mt-2 text-sm md:text-base">Limited seats. Save your spot today.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
            <Button asChild size="lg" className="flex text-black items-center justify-center bg-white border-2 border-black border-t-4 border-r-4 rounded-none font-medium transition hover:bg-black hover:text-white w-full md:w-auto"><a href="/register">Register Now</a></Button>
            <Button asChild size="lg" className="flex text-black items-center justify-center bg-white border-2 border-black border-t-4 border-r-4 rounded-none font-medium transition hover:bg-black hover:text-white w-full md:w-auto"><Link to="/about">Why attend?</Link></Button>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="container pb-20 animate-fade-in">
        <header className="mb-6 flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-xl md:text-3xl">Gallery</h2>
            <p className="text-muted-foreground mt-2 text-sm md:text-base">Moments from past community events.</p>
          </div>
          <Link to="/gallery" className="w-full md:w-32 h-10 flex items-center justify-center bg-white border-2 border-black border-t-4 border-r-4 rounded-none font-medium transition hover:bg-black hover:text-white bg-gradient-to-r from-[hsl(var(--brand-blue))]/10 via-[hsl(var(--brand-green))]/10 to-[hsl(var(--brand-yellow))]/10 mt-4 md:mt-0" >See more</Link>
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
                className="w-full object-cover animate-enter"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container pb-24 animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Contact Info */}
          <div>
            <header className="mb-6">
              <h2 className="font-display text-xl md:text-3xl">Contact Us</h2>
              <p className="text-muted-foreground mt-2 max-w-prose text-sm md:text-base">
                Have questions about tickets, speaking, or sponsorships? We'd love to help.
              </p>
            </header>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <Link
                to="/contact"
                className="w-full sm:w-32 h-10 flex items-center justify-center bg-white border-2 border-black border-t-4 border-r-4 rounded-none font-medium transition hover:bg-black hover:text-white bg-gradient-to-r from-[hsl(var(--brand-blue))]/10 via-[hsl(var(--brand-green))]/10 to-[hsl(var(--brand-yellow))]/10"
              >
                Get in touch
              </Link>
              <a
                href="#sponsors"
                className="w-full sm:w-32 h-10 flex items-center justify-center bg-white border-2 border-black border-t-4 border-r-4 rounded-none font-medium transition hover:bg-black hover:text-white story-link bg-gradient-to-r from-[hsl(var(--brand-blue))]/10 via-[hsl(var(--brand-green))]/10 to-[hsl(var(--brand-yellow))]/10"
              >
                Sponsorship
              </a>
            </div>
          </div>
          {/* Right: Image */}
          <div className="hidden lg:flex justify-center mt-8 md:mt-0">
            <img
              src="/images/contactus.png"
              alt="Cloud Community Days Chandigarh"
              className="rounded-xl border shadow-soft w-full max-w-xs md:max-w-md object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
