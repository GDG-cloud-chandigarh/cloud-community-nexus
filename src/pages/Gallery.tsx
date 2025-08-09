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
        {[
          "/images/devfest1.jpg",
          "/images/devfest2.jpg",
          "/images/devfest3.jpg",
          "/images/io1.png",
          "/images/io2.png",
          "/images/io3.png",
          "/images/ccd1.jpg",
          "/images/ccd2.jpg",
          "/images/ccd3.jpg",
        ].map((src, i) => (
          <div key={i} className="aspect-square rounded-xl border bg-card overflow-hidden shadow-2xl">
            <img
              src={src}
              alt={`Cloud Community Days gallery image ${i + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
