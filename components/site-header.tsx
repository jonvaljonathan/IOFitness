import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="border-b border-rule">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link href="/" className="font-display text-lg tracking-tight text-ink">
          {siteConfig.name}
        </Link>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-5 text-sm sm:gap-6">
            <li>
              <Link href="/learn" className="text-muted hover:text-ink">
                Learn
              </Link>
            </li>
            <li>
              <Link href="/#early-access" className="text-muted hover:text-ink">
                Early access
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
