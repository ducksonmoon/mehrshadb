import { site } from "@/lib/site-data";

const footerLinks = [
  { label: "Email", href: `mailto:${site.email}` },
  { label: "LinkedIn", href: site.links.linkedin, external: true },
  { label: "GitHub", href: site.links.github, external: true },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-border">
      <div className="page-shell py-10 text-sm text-muted">
        <ul className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-5 sm:gap-y-2">
          {footerLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                {...("external" in link && link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="link-inline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-4">{site.location}</p>
      </div>
    </footer>
  );
}
