import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="mx-auto max-w-5xl px-5 py-24 sm:px-8">
      <h1 className="font-sans text-4xl tracking-tight">Page not found</h1>
      <p className="mt-4 max-w-xl text-lg leading-8 text-muted">
        That page is not on the site. Head back home or to Learn.
      </p>
      <p className="mt-8">
        <Link href="/" className="text-accent hover:text-accent-hover">
          IOFitness home
        </Link>
      </p>
    </main>
  );
}
