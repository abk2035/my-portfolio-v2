"use client";

import Link from "next/link";
import { useState } from "react";

type Kind = "product" | "mission" | "concept";

export type ProjectItem = {
  slug: string;
  kind: Kind;
  initials: string;
  name: string;
  desc: string;
  tags: string[];
  detail: boolean;
};

type Props = {
  lang: string;
  items: ProjectItem[];
  kinds: Record<"all" | Kind, string>;
  filterLabel: string;
};

const FILTERS = ["all", "product", "mission", "concept"] as const;

export function ProjectsExplorer({ lang, items, kinds, filterLabel }: Props) {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("all");

  const count = (k: (typeof FILTERS)[number]) =>
    k === "all" ? items.length : items.filter((p) => p.kind === k).length;
  const visible = items.filter((p) => filter === "all" || p.kind === filter);

  return (
    <>
      <div role="group" aria-label={filterLabel} className="mb-8 flex flex-wrap gap-2.5">
        {FILTERS.map((k) => {
          const on = filter === k;
          return (
            <button
              key={k}
              type="button"
              aria-pressed={on}
              onClick={() => setFilter(k)}
              className={`inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full border px-4 text-sm font-medium ${
                on ? "border-foreground bg-foreground text-background" : "border-border text-foreground"
              }`}
            >
              {kinds[k]}
              <span className="font-mono text-xs opacity-70">{count(k)}</span>
            </button>
          );
        })}
      </div>

      <div className="flex flex-wrap gap-5">
        {visible.map((p) => (
          <article
            key={p.slug}
            className="flex min-w-0 basis-full flex-col gap-4 rounded-[20px] border border-border bg-card p-5 transition-colors hover:border-lime md:flex-[1_1_440px] md:p-6"
          >
            <div className="flex items-center gap-3.5">
              <div
                aria-hidden
                className="flex size-[52px] flex-none items-center justify-center rounded-[14px] border border-border bg-background font-mono text-base font-medium text-lime"
              >
                {p.initials}
              </div>
              <div className="min-w-0">
                <div className="inline-block rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-muted">
                  {kinds[p.kind]}
                </div>
                <h2 className="mt-1 text-[22px] font-semibold leading-tight tracking-tight [overflow-wrap:anywhere]">
                  {p.detail ? (
                    <Link href={`/${lang}/projets/${p.slug}`} className="lk">
                      {p.name}
                    </Link>
                  ) : (
                    p.name
                  )}
                </h2>
              </div>
            </div>
            <p className="text-muted">{p.desc}</p>
            <div className="mt-auto flex flex-wrap gap-2">
              {p.tags.map((tag) => (
                <span key={tag} className="inline-block rounded-full border border-border bg-background px-3 py-[3px] text-[13px]">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
