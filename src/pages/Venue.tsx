import { Helmet } from "react-helmet-async";
import Map from "@/components/Map";

export default function Venue() {
  return (
    <section className="container py-16">
      <Helmet>
        <title>Venue • Cloud Community Days</title>
        <meta name="description" content="Find the Cloud Community Days venue, directions, and travel tips." />
        <link rel="canonical" href="/venue" />
      </Helmet>
      <h1 className="font-display text-4xl mb-6">Venue</h1>
      <p className="text-muted-foreground mb-6">Chandigarh — details coming soon.</p>
      <Map />
    </section>
  );
}
