import Link from "next/link";
import { withBasePath } from "@/lib/base-path";
import { nav, site } from "@/lib/site-data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/85">
      <div className="page-shell flex h-14 items-center justify-between gap-4">
        <Link
          href="/"
          className="shrink-0 text-sm font-medium tracking-tight text-foreground sm:text-base"
        >
          <span className="sm:hidden">Mehrshad B.</span>
          <span className="hidden sm:inline">{site.name}</span>
        </Link>

        <nav aria-label="Primary" className="-mr-4 overflow-x-auto sm:mr-0">
          <ul className="flex items-center gap-1 px-4 sm:gap-2 sm:px-0">
            {nav.map((item) => (
              <li key={item.href} className="shrink-0">
                {item.href.startsWith("#") ? (
                  <a
                    href={item.href}
                    className="inline-flex min-h-10 items-center rounded-md px-3 text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                ) : (
                  <a
                    href={withBasePath(item.href)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-10 items-center rounded-md px-3 text-sm text-muted transition-colors hover:text-foreground"
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
