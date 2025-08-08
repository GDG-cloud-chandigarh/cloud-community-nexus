import { Helmet } from "react-helmet-async";

export default function Gallery() {
  return (
    <section className="container py-16">
      <Helmet>
        <title>Gallery • Cloud Community Days</title>
        <meta name="description" content="Photos and videos from past Cloud Community Days events." />
        <link rel="canonical" href="/gallery" />
      </Helmet>
      <h1 className="font-display text-4xl mb-8">Gallery</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="aspect-[4/3] rounded-xl border bg-gradient-to-br from-[hsl(var(--brand-blue))]/15 via-[hsl(var(--brand-green))]/15 to-[hsl(var(--brand-yellow))]/15 shadow-soft" />
        ))}
      </div>
    </section>
  );
}
