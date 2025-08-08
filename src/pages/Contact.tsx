import { Helmet } from "react-helmet-async";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    toast({ title: 'Message sent', description: 'We will be in touch shortly!' });
    (e.currentTarget as HTMLFormElement).reset();
  }

  return (
    <section className="container py-16">
      <Helmet>
        <title>Contact • Cloud Community Days</title>
        <meta name="description" content="Contact the Cloud Community Days team for partnerships, volunteering, and general queries." />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <h1 className="font-display text-4xl mb-6">Contact Us</h1>
      <form className="grid gap-4 max-w-xl" onSubmit={onSubmit}>
        <input className="border rounded-md px-3 py-2 bg-background" placeholder="Your name" required />
        <input className="border rounded-md px-3 py-2 bg-background" type="email" placeholder="Email" required />
        <textarea className="border rounded-md px-3 py-2 bg-background min-h-32" placeholder="Message" required />
        <button className="h-11 px-6 rounded-md bg-primary text-primary-foreground hover:bg-primary/90">Send</button>
      </form>
    </section>
  );
}
