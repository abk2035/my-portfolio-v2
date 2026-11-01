import { Mail } from "lucide-react";
import Link from "next/link";
import type { Dictionary } from "@/lib/i18n";
import { GithubIcon, LinkedinIcon } from "./icons";
import { LangSwitcher } from "./lang-switcher";

export const SOCIALS = {
  github: "https://github.com/abk2035",
  linkedin: "https://linkedin.com/in/borele-kengne-8b6914241",
  email: "mailto:kengneborele@gmail.com",
};

export function Footer({ lang, t }: { lang: string; t: Dictionary["common"] }) {
  const nav = [
    { href: `/${lang}`, label: t.navHome },
    { href: `/${lang}/projets`, label: t.navProjects },
    { href: `/${lang}/cv`, label: t.navCv },
  ];

  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto max-w-[1080px] px-5 pb-8 pt-10 md:px-8 md:pb-10 md:pt-12">
        <div className="flex flex-wrap items-start gap-8 md:gap-12">
          <nav aria-label={t.explore}>
            <h4 className="mb-3.5 text-sm font-semibold">{t.explore}</h4>
            <div className="flex flex-col gap-2 text-sm text-muted">
              {nav.map((n) => (
                <Link key={n.href} href={n.href} className="lk">
                  {n.label}
                </Link>
              ))}
            </div>
          </nav>

          <nav aria-label={t.findMe}>
            <h4 className="mb-3.5 text-sm font-semibold">{t.findMe}</h4>
            <div className="flex flex-col gap-2 text-sm text-muted">
              <a href={SOCIALS.github} className="lk inline-flex items-center gap-2">
                <GithubIcon className="flex-none" /> GitHub
              </a>
              <a href={SOCIALS.linkedin} className="lk inline-flex items-center gap-2">
                <LinkedinIcon className="flex-none" /> LinkedIn
              </a>
              <a href={SOCIALS.email} className="lk inline-flex items-center gap-2">
                <Mail size={16} className="flex-none" aria-hidden /> Email
              </a>
            </div>
          </nav>

          <LangSwitcher lang={lang} />
        </div>
        <p className="mt-10 text-[13px] text-muted">{t.copyright}</p>
      </div>
    </footer>
  );
}
