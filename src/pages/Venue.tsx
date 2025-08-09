import { Helmet } from "react-helmet-async";

export default function Venue() {
  return (
    <section className="container py-16">
      <Helmet>
        <title>Venue — CGC Jhanjeri Map • Cloud Community Days</title>
        <meta name="description" content="See the Cloud Community Days venue at CGC Jhanjeri, with an interactive map and directions." />
        <link rel="canonical" href="/venue" />
      </Helmet>
      <h1 className="font-display text-4xl mb-6">Venue — CGC Jhanjeri</h1>
      <p className="text-muted-foreground mb-6">View the exact location and plan your route.</p>
      <div className="rounded-xl overflow-hidden border bg-card shadow-soft">
        <iframe
          title="CGC Jhanjeri on Google Maps"
          src="https://www.google.com/maps?q=CGC%20Jhanjeri&z=15&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[420px]"
        />
      </div>
    </section>
  );
}
