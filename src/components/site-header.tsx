import Link from "next/link";
import { withBasePath } from "@/lib/base-path";
import { nav, site } from "@/lib/site-data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-2xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6 sm:px-6 sm:py-6">
        <Link href="/" className="shrink-0">
          <span className="text-base font-medium tracking-tight text-foreground">
            {site.name}
          </span>
        </Link>
        <nav aria-label="Primary" className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:overflow-visible sm:px-0">
          <ul className="flex w-max items-center gap-x-1 sm:w-auto sm:flex-wrap sm:gap-x-5 sm:gap-y-2">
            {nav.map((item) => (
              <li key={item.href} className="shrink-0">
                {item.href.startsWith("#") ? (
                  <a
                    href={item.href}
                    className="inline-flex min-h-10 items-center rounded-sm px-3 text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                ) : (
                  <a
                    href={withBasePath(item.href)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-10 items-center rounded-sm px-3 text-sm text-muted transition-colors hover:text-foreground"
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
