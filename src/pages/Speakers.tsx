import { Helmet } from "react-helmet-async";

const speakers = [
  {
    name: "Mohit Gulati",
    title: "Product Management",
    company: "Google",
    photo: "/pfp/mohit.jpeg",
    linkedin: "https://www.linkedin.com/in/mohitgulati/",
  },
  {
    name: "Sejal Sud",
    title: "Content Creator",
    company: "",
    photo: "/pfp/sejal.jpeg",
    linkedin: "https://www.linkedin.com/in/sejal-sud-762664162/",
    twitter: "https://x.com/SejalSud",
    youtube: "https://www.youtube.com/channel/UCaTBVfF34POcHFRnnxz68oA",
  },
  {
    name: "Gaurav Kheterpal",
    title: "CEO & Founder",
    company: "Vanshiv Technologies",
    photo: "/pfp/gaurav.jpeg",
    linkedin: "https://www.linkedin.com/in/gauravkheterpal/",
    twitter: "https://x.com/gauravkheterpal",
  },
  {
    name: "Abhishek Doshi",
    title: "Senior Software Engineer",
    company: "Qvin",
    photo: "/pfp/abhishek.jpeg",
    linkedin: "https://www.linkedin.com/in/gauravkheterpal/",
    twitter: "https://x.com/gauravkheterpal",
  },
  {
    name: "Rishiraj Acharya",
    title: "ML Engineer",
    company: "IntelliTek.ai",
    photo: "/pfp/rishiraj.jpeg",
    linkedin: "https://linkedin.com/in/rishirajacharya",
    twitter: "https://x.com/rishirajacharya",
  },
  {
    name: "Dhaval Kaku",
    title: "Program Curation Manager",
    company: "Innovation Mission Punjab",
    photo: "/pfp/dhaval.jpeg",
    linkedin: "https://www.linkedin.com/in/dhavalkaku/",
  },
];

export default function Speakers() {
  return (
    <>
      {/* Desktop/Laptop header image */}
      <img
        src="/images/header.png"
        alt="Cloud Community Days 2025 Logo"
        className="w-full mb-6 object-contain hidden sm:block"
      />
      {/* Mobile header image */}
      <img
        src="/images/mobile_header.png"
        alt="Cloud Community Days 2025 Mobile Logo"
        className="w-full object-contain block sm:hidden"
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
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {speakers.map((sp, i) => (
            <div
              key={i}
              className="bg-white border-2 border-black border-t-4 border-r-4 shadow-xl flex flex-col p-6 items-center text-center aspect-square"
            >
              <img
                src={sp.photo}
                alt={sp.name}
                className="h-32 w-32 rounded-full mb-4 object-cover"
              />
              <h2 className="font-bold text-lg mb-1">{sp.name}</h2>
              <div className="text-sm text-muted-foreground mb-1">
                {sp.title}
              </div>
              <div className="text-sm text-muted-foreground mb-1">
                {sp.company}
              </div>
              <div className="flex gap-3 mt-2">
                {sp.linkedin && (
                  <a
                    href={sp.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/logos/linkedin.svg"
                      alt="LinkedIn"
                      className="h-6 w-6"
                    />
                  </a>
                )}
                {sp.twitter && (
                  <a
                    href={sp.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/logos/x.png" alt="x" className="h-6 w-6" />
                  </a>
                )}
                {sp.youtube && (
                  <a
                    href={sp.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/logos/youtube.png"
                      alt="YouTube"
                      className="h-6 w-6"
                    />
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
