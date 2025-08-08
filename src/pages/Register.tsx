import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";

export default function Register() {
  return (
    <section className="container py-16">
      <Helmet>
        <title>Register • Cloud Community Days</title>
        <meta name="description" content="Register for Cloud Community Days via Google Forms or Eventbrite." />
        <link rel="canonical" href="/register" />
      </Helmet>
      <h1 className="font-display text-4xl mb-6">Register</h1>
      <p className="text-muted-foreground">Secure your spot. Limited seats available!</p>
      <div className="mt-6 flex gap-3">
        <Button asChild size="lg" variant="hero">
          <a href="#" target="_blank" rel="noreferrer">Google Form</a>
        </Button>
        <Button asChild size="lg" variant="outline">
          <a href="#" target="_blank" rel="noreferrer">Eventbrite</a>
        </Button>
      </div>
    </section>
  );
}
