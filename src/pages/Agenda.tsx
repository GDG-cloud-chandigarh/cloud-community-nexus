import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const schedule = [
  { time: "09:00 AM", title: "Reporting Starts" },
  { time: "10:00 AM", title: "Opening remarks" },
  { time: "10:10 AM", title: "Keynote", speaker: "Cherish Santoshi" },
  {
    time: "10:30 AM",
    title: "TBD",
    speaker: "Mohit Gulati",
  },
  {
    time: "11:05 AM",
    title: "TBD",
    speaker: "Sejal Sud",
  },
  {
    time: "11:40 AM",
    title: "TBD",
    speaker: "Abhishek Doshi",
  },
  {
    time: "12:20 AM",
    title: "TBD",
    speaker: "Rishiraj Acharya",
  },
  // {
  //   time: "12:10 PM",
  //   title: "Content Contest",
  //   speaker: "GDG Cloud Chandigarh Team",
  // },
  { time: "12:55 PM", title: "Lunch Break" },
  {
    time: "1:55 PM",
    title: "TBD",
    speaker: "Gaurav Kheterpal",
  },
  {
    time: "2:35 PM",
    title: "Panel Discussion",
  },
  {
    time: "3:20 PM",
    title: "Quiz / Competition",
  },
  { time: "3:50 PM", title: "Facilitation Ceremony" },
  { time: "4:20 PM", title: "Group Picture" },
  { time: "4:50 PM", title: "Swag Distribution & Networking" },
];

export default function Agenda() {
  return (
    <>
      <Helmet>
        <title>Agenda • Cloud Community Days</title>
        <meta
          name="description"
          content="Explore the full Cloud Community Days agenda with talks, labs, and networking."
        />
        <link rel="canonical" href="/agenda" />
      </Helmet>
      {/* Desktop/Laptop header image */}
      <img
        src="/images/header.png"
        alt="Cloud Community Days 2025 Logo"
        className="w-full mb-6 object-contain rounded-xl shadow hidden sm:block"
      />
      {/* Mobile header image */}
      <img
        src="/images/mobile_header.png"
        alt="Cloud Community Days 2025 Mobile Logo"
        className="w-full object-contain block sm:hidden"
      />
      <section className="container py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sticky Agenda Section */}
          <aside className="md:col-span-1 md:sticky md:top-24 h-fit">
            <div className="p-6 flex flex-col text-center">
              <h2 className="font-display text-xl md:text-4xl mb-4">Agenda</h2>
              <p className="text-muted-foreground text-sm md:text-base mb-6">
                Full day of keynotes, breakouts, and hands-on labs.
              </p>
            </div>
          </aside>
          {/* Schedule Section */}
          <main className="md:col-span-2">
            <ul className="space-y-6">
              {schedule.map((item, idx) => (
                <li key={idx} className="relative">
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center justify-center min-w-[80px]">
                      <div className="bg-[hsl(var(--brand-blue))] text-white font-bold px-3 py-2 text-xs md:text-sm shadow">
                        {item.time}
                      </div>
                    </div>
                    <div className="flex-1 p-4 border-2 border-black border-t-4 border-r-4 bg-white shadow-soft">
                      <div className="font-medium text-base md:text-lg">
                        {item.title}
                      </div>
                      {item.speaker && (
                        <div className="text-xs md:text-sm text-muted-foreground mt-1">
                          <span className="font-semibold">by</span>{" "}
                          {item.speaker}
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </main>
        </div>
      </section>
    </>
  );
}
