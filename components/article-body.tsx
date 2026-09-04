import type { ArticleBlock, ArticleSource } from "@/content/learn";

function renderTextWithCitations(text: string) {
  const segments = text.split(/(\[[^\]]+\]\([^)]+\)|\[\d+\])/g);

  return segments.map((segment, index) => {
    const linkMatch = segment.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const [, label, href] = linkMatch;
      const external = /^https?:\/\//.test(href);
      return (
        <a
          key={index}
          href={href}
          className="text-accent hover:text-accent-hover"
          {...(external
            ? { rel: "noopener noreferrer", target: "_blank" }
            : {})}
        >
          {label}
        </a>
      );
    }

    const citationMatch = segment.match(/^\[(\d+)\]$/);
    if (citationMatch) {
      return (
        <a
          key={index}
          href={`#source-${citationMatch[1]}`}
          className="text-accent hover:text-accent-hover"
        >
          [{citationMatch[1]}]
        </a>
      );
    }

    return <span key={index}>{segment}</span>;
  });
}

export function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div className="mt-10 space-y-6 text-base leading-8 text-ink sm:text-lg sm:leading-9">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "p":
            return (
              <p key={index} className="text-muted">
                {renderTextWithCitations(block.text)}
              </p>
            );
          case "h2":
            return (
              <h2
                key={index}
                className="font-display pt-6 text-2xl tracking-tight text-ink sm:text-3xl"
              >
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3
                key={index}
                className="pt-2 text-xl font-semibold tracking-tight text-ink"
              >
                {block.text}
              </h3>
            );
          case "ul":
            return (
              <ul key={index} className="list-disc space-y-2 pl-5 text-muted">
                {block.items.map((item) => (
                  <li key={item}>{renderTextWithCitations(item)}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={index} className="list-decimal space-y-2 pl-5 text-muted">
                {block.items.map((item) => (
                  <li key={item}>{renderTextWithCitations(item)}</li>
                ))}
              </ol>
            );
          case "example":
            return (
              <aside
                key={index}
                className="rounded-sm border border-rule bg-field px-4 py-4 sm:px-5"
              >
                <p className="text-sm font-medium tracking-wide text-ink uppercase">
                  {block.title}
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-muted">
                  {block.body.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </aside>
            );
          case "callout":
            return (
              <p
                key={index}
                className="border-l-2 border-accent pl-4 text-ink"
              >
                {renderTextWithCitations(block.text)}
              </p>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

export function ArticleSources({ sources }: { sources: ArticleSource[] }) {
  if (sources.length === 0) {
    return null;
  }

  return (
    <section className="mt-14 border-t border-rule pt-10">
      <h2 className="font-display text-2xl tracking-tight">Sources</h2>
      <ol className="mt-6 list-decimal space-y-4 pl-5 text-sm leading-7 text-muted">
        {sources.map((source) => (
          <li key={source.id} id={`source-${source.id}`}>
            <p>
              {source.url ? (
                <a
                  href={source.url}
                  className="text-accent hover:text-accent-hover"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {source.citation}
                </a>
              ) : (
                source.citation
              )}
            </p>
            {source.note ? <p className="mt-1">{source.note}</p> : null}
          </li>
        ))}
      </ol>
    </section>
  );
}
