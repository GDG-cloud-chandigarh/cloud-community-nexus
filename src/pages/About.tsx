import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      <img
        src="/images/header.png"
        alt="Cloud Community Days 2025 Logo"
        className="w-full mb-6 object-contain"
      />
      <section className="container pb-16">
        <Helmet>
          <title>About • Cloud Community Days</title>
          <meta
            name="description"
            content="Learn about Cloud Community Days — our mission, values, and why developers love attending."
          />
          <link rel="canonical" href="/about" />
        </Helmet>
        <h1 className="font-display text-4xl mb-6">
          About Cloud Community Days
        </h1>
        <p className="text-muted-foreground max-w-prose">
          Cloud Community Days is an independent, community-driven conference
          focusing on Cloud, DevOps, and AI/ML. Our mission is to bring
          practitioners together for practical learning, best practices, and
          meaningful connections.
        </p>
      </section>
    </>
  );
}
