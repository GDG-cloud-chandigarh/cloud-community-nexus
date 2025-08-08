import { Helmet } from "react-helmet-async";

const schedule = [
  { time: '09:00', title: 'Registration & Breakfast', track: 'General' },
  { time: '10:00', title: 'Opening Keynote', track: 'Main Stage' },
  { time: '11:00', title: 'Kubernetes in Production', track: 'Cloud' },
  { time: '12:00', title: 'Lunch & Expo', track: 'Expo' },
  { time: '13:30', title: 'Generative AI for Builders', track: 'AI/ML' },
  { time: '15:00', title: 'DevOps Panel', track: 'DevOps' },
  { time: '17:00', title: 'Community Night', track: 'Social' },
];

export default function Agenda() {
  return (
    <section className="container py-16">
      <Helmet>
        <title>Agenda • Cloud Community Days</title>
        <meta name="description" content="Explore the full Cloud Community Days agenda with talks, labs, and networking." />
        <link rel="canonical" href="/agenda" />
      </Helmet>
      <h1 className="font-display text-4xl mb-8">Agenda</h1>
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
        <ul className="space-y-6">
          {schedule.map((s) => (
            <li key={s.time} className="relative pl-10">
              <span className="absolute left-0 top-2 h-3 w-3 rounded-full bg-[hsl(var(--brand-blue))]" />
              <div className="p-4 border rounded-lg bg-card shadow-soft">
                <div className="text-sm text-muted-foreground">{s.time} • {s.track}</div>
                <div className="font-medium mt-1">{s.title}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
