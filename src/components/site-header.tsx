import Link from "next/link";
import { withBasePath } from "@/lib/base-path";
import { nav, site } from "@/lib/site-data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-2xl items-baseline justify-between gap-6 px-6 py-6">
        <Link href="/" className="group">
          <span className="text-base font-medium tracking-tight text-foreground">
            {site.name}
          </span>
        </Link>
        <nav aria-label="Primary">
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-muted">
            {nav.map((item) => (
              <li key={item.href}>
                {item.href.startsWith("#") ? (
                  <a href={item.href} className="transition-colors hover:text-foreground">
                    {item.label}
                  </a>
                ) : (
                  <a
                    href={withBasePath(item.href)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
