import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";

export default function Sponsors() {
  return (
    <section className="container py-16">
      <Helmet>
        <title>Sponsors • Cloud Community Days</title>
        <meta name="description" content="Thanks to our sponsors and partners who make Cloud Community Days possible." />
        <link rel="canonical" href="/sponsors" />
      </Helmet>
      <h1 className="font-display text-4xl mb-8">Sponsors & Partners</h1>
      <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="h-20 rounded-lg border bg-card shadow-soft flex items-center justify-center text-muted-foreground">
            Logo #{i + 1}
          </div>
        ))}
      </div>
      <div className="mt-8">
        <Button variant="hero" size="lg">Become a Sponsor</Button>
      </div>
    </section>
  );
}
