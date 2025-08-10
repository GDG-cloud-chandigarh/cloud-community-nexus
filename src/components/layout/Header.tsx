import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Agenda", to: "/agenda" },
  { label: "Speakers", to: "/speakers" },
  { label: "Sponsors", to: "/sponsors" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  const linkCls = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
      <nav className="container flex items-center justify-between h-16">
        <NavLink
          to="/"
          className="flex items-center gap-2 font-display text-lg"
        >
          <img
            src="/images/gdgcloudchd.png"
            alt="Google Developer Groups Cloud Chandigarh"
            className="h-auto w-auto"
            style={{ maxWidth: "180px" }}
          />
        </NavLink>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkCls} end>
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button asChild variant="outline" className="hidden sm:inline-flex">
            <a href="/register">Register</a>
          </Button>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
