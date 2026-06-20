import { site } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-2xl px-6 py-10 text-sm text-muted">
        <p>
          <a
            href={`mailto:${site.email}`}
            className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
          >
            {site.email}
          </a>
          <span className="mx-2 text-border">·</span>
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground"
          >
            LinkedIn
          </a>
          <span className="mx-2 text-border">·</span>
          <a
            href={site.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground"
          >
            GitHub
          </a>
        </p>
        <p className="mt-3">{site.location}</p>
      </div>
    </footer>
  );
}
