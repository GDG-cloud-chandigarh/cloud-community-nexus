import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-24 border-t">
      <div className="container py-10 grid gap-6 md:grid-cols-2">
        <div>
          <h3 className="font-display text-xl">Cloud Community Days</h3>
          <p className="text-muted-foreground mt-2 max-w-prose">
            A community-first event celebrating cloud computing, DevOps, and AI/ML —
            built by developers, for developers.
          </p>
        </div>
        <div className="md:text-right flex md:justify-end items-center gap-4">
          <a className="text-muted-foreground hover:text-foreground" href="#" aria-label="Twitter">
            <Twitter className="h-5 w-5" />
          </a>
          <a className="text-muted-foreground hover:text-foreground" href="#" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </a>
          <a className="text-muted-foreground hover:text-foreground" href="#" aria-label="GitHub">
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-6 text-xs text-muted-foreground flex flex-col sm:flex-row items-center justify-between">
          <p>© {new Date().getFullYear()} Cloud Community Days</p>
          <p>Made with passion by the community</p>
        </div>
      </div>
    </footer>
  );
}
