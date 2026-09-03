import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-rule">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          {siteConfig.name}
          <span className="px-2" aria-hidden="true">
            ·
          </span>
          {siteConfig.brandLine}
        </p>
        <nav aria-label="Footer">
          <ul className="flex gap-5">
            <li>
              <Link href="/learn" className="hover:text-ink">
                Learn
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
