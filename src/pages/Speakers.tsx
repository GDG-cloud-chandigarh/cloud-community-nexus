import { Helmet } from "react-helmet-async";

const speakers = [
  {
    name: "Mohit Gulati",
    title: "Product Management",
    company: "Google",
    photo: "/photos/mohit.jpeg",
    linkedin: "https://www.linkedin.com/in/mohitgulati/",
  },
  {
    name: "Sejal Sud",
    title: "Content Creator",
    company: "",
    photo: "/photos/sejal.jpeg",
    linkedin: "https://www.linkedin.com/in/sejal-sud-762664162/",
	twitter: "https://x.com/SejalSud",
	youtube: "https://www.youtube.com/channel/UCaTBVfF34POcHFRnnxz68oA",
  },
  {
    title: "More adding soon...",
    company: "on 18th Aug",
  },
];

export default function Speakers() {
  return (
    <>
      <img
        src="/images/header.png"
        alt="Cloud Community Days 2025 Logo"
        className="w-full mb-6 object-contain"
      />
      <section className="container py-16">
        <Helmet>
          <title>Speakers • Cloud Community Days</title>
          <meta
            name="description"
            content="Meet the Cloud Community Days speakers and community leaders."
          />
          <link rel="canonical" href="/speakers" />
        </Helmet>
        <h1 className="font-display text-4xl mb-8">Speakers</h1>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
          {speakers.map((sp, i) => (
            <div
              key={i}
              className="bg-white border-2 border-black border-t-4 border-r-4 shadow-xl px-12 py-6 flex flex-col items-center text-center"
            >
              <img
                src={sp.photo}
                alt={sp.name}
                className="h-32 w-32 rounded-full mb-4 object-cover"
              />
              <h2 className="font-bold text-lg mb-1">{sp.name}</h2>
              <div className="text-sm text-muted-foreground mb-1">{sp.title}</div>
              <div className="text-sm text-muted-foreground mb-1">{sp.company}</div>
              <div className="flex gap-3 mt-2">
                {sp.linkedin && (
                  <a href={sp.linkedin} target="_blank" rel="noopener noreferrer">
                    <img src="/logos/linkedin.svg" alt="LinkedIn" className="h-6 w-6" />
                  </a>
                )}
                {sp.twitter && (
                  <a href={sp.twitter} target="_blank" rel="noopener noreferrer">
                    <img src="/logos/x.png" alt="x" className="h-6 w-6" />
                  </a>
                )}
                {sp.youtube && (
                  <a href={sp.youtube} target="_blank" rel="noopener noreferrer">
                    <img src="/logos/youtube.png" alt="YouTube" className="h-6 w-6" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
