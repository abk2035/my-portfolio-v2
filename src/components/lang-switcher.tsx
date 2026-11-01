"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LANGS = [
  { code: "en", label: "EN", aria: "English" },
  { code: "fr", label: "FR", aria: "Français" },
] as const;

export function LangSwitcher({ lang }: { lang: string }) {
  const pathname = usePathname();
  const rest = pathname.replace(/^\/(fr|en)/, "");

  return (
    <div className="ml-auto flex rounded-full border border-border p-0.5">
      {LANGS.map((l) => {
        const active = l.code === lang;
        return (
          <Link
            key={l.code}
            href={`/${l.code}${rest}`}
            aria-label={l.aria}
            aria-current={active ? "true" : undefined}
            hrefLang={l.code}
            className={`flex min-h-9 min-w-11 items-center justify-center rounded-full px-3 text-[13px] font-medium ${
              active ? "bg-lime text-background" : "text-muted"
            }`}
          >
            {l.label}
          </Link>
        );
      })}
    </div>
  );
}
