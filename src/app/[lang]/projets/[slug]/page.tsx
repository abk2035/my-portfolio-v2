import { ArrowLeft, ArrowUpRight, Code } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale, locales } from "@/lib/i18n";

type Detail = {
  badge: string;
  badgeStatus: string;
  pitch: string;
  aboutLabel: string;
  about: string[];
  featuresLabel: string;
  features: string[];
  modulesLabel: string;
  modules: { name: string; desc?: string }[];
  stackLabel: string;
  stack: string[];
  infoLabel: string;
  info: { k: string; v: string }[];
};

// Liens externes par projet (à renseigner quand les URL sont connues).
const LINKS: Record<string, { visit?: string; code?: string }> = {
  // Adresse provisoire : pas encore déployé sur le serveur de l'entreprise.
  "armurerie-belibi": { visit: "https://armureriebelibi.vercel.app" },
};

const label = "font-mono text-[13px] text-lime";
const bullet = "mt-[11px] size-1.5 flex-none rounded-full bg-lime";

function details(lang: "fr" | "en") {
  return getDictionary(lang).projectDetails as Record<string, Detail>;
}

export function generateStaticParams() {
  return locales.flatMap((lang) => Object.keys(details(lang)).map((slug) => ({ lang, slug })));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/projets/[slug]">) {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) return {};
  const item = getDictionary(lang).projects.items.find((p) => p.slug === slug);
  return item ? { title: item.name, description: details(lang)[slug]?.pitch } : {};
}

export default async function ProjectPage({ params }: PageProps<"/[lang]/projets/[slug]">) {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const item = dict.projects.items.find((p) => p.slug === slug);
  const t = details(lang)[slug];
  if (!item || !t) notFound();

  const links = LINKS[slug] ?? {};
  const modulesHaveDesc = t.modules.every((m) => m.desc);

  return (
    <main className="mx-auto w-full max-w-[1080px] px-5 pb-12 pt-8 md:px-8 md:pb-[72px] md:pt-12">
      <Link
        href={`/${lang}/projets`}
        className="lk inline-flex min-h-11 items-center gap-2 text-sm font-medium text-muted"
      >
        <ArrowLeft size={16} aria-hidden />
        {dict.projectUi.back}
      </Link>

      {/* Hero */}
      <section className="mt-6 max-w-[760px]">
        <div
          aria-hidden
          className="mb-6 flex size-[72px] items-center justify-center rounded-[20px] border border-border bg-card font-mono text-2xl font-medium text-lime"
        >
          {item.initials}
        </div>
        <div className="mb-3.5 flex flex-wrap items-center gap-2.5">
          <span className="inline-block rounded-full border border-border px-3 py-0.5 text-[13px] font-medium text-muted">
            {t.badge}
          </span>
          <span className="inline-block rounded-full border border-border px-3 py-0.5 text-[13px] font-medium text-muted">
            {t.badgeStatus}
          </span>
        </div>
        <h1 className="text-[34px] font-semibold leading-[1.05] tracking-[-0.03em] md:text-5xl">{item.name}</h1>
        <p className="mb-7 mt-[18px] text-[19px] text-muted">{t.pitch}</p>
        {(links.visit || links.code) && (
          <div className="flex flex-wrap gap-3">
            {links.visit && (
              <a
                href={links.visit}
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-lime px-5 text-sm font-medium text-lime-text transition-opacity hover:opacity-85"
              >
                {dict.projectUi.visit}
                <ArrowUpRight size={14} aria-hidden />
              </a>
            )}
            {links.code && (
              <a
                href={links.code}
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-card px-5 text-sm font-medium transition-opacity hover:opacity-85"
              >
                <Code size={16} aria-hidden />
                {dict.projectUi.code}
              </a>
            )}
          </div>
        )}
      </section>

      <div className="mt-10 flex flex-wrap items-start gap-10 md:mt-14 md:gap-16">
        {/* Colonne gauche */}
        <div className="flex min-w-0 basis-full flex-col gap-10 md:flex-[1_1_480px] md:gap-12">
          <section>
            <div className={`${label} mb-3`}>01 | {t.aboutLabel}</div>
            {t.about.map((p) => (
              <p key={p} className="mb-4 text-[17px] text-muted">
                {p}
              </p>
            ))}
          </section>

          <section className="border-t border-border pt-10">
            <div className={`${label} mb-4`}>02 | {t.featuresLabel}</div>
            <ul className="flex flex-col gap-3.5">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-3.5 text-muted">
                  <span className={bullet} aria-hidden />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="border-t border-border pt-10">
            <div className={`${label} mb-4`}>03 | {t.modulesLabel}</div>
            {modulesHaveDesc ? (
              <div className="flex flex-wrap gap-3">
                {t.modules.map((m) => (
                  <div
                    key={m.name}
                    className="min-w-0 flex-[1_1_200px] rounded-2xl border border-border bg-card px-[18px] py-4"
                  >
                    <div className="text-base font-semibold">{m.name}</div>
                    <div className="mt-1 text-sm text-muted">{m.desc}</div>
                  </div>
                ))}
              </div>
            ) : (
              <ul className="flex flex-col gap-3.5 rounded-2xl border border-border bg-card px-[22px] py-5">
                {t.modules.map((m) => (
                  <li key={m.name} className="flex items-center gap-3.5 font-medium">
                    <span className="size-1.5 flex-none rounded-full bg-lime" aria-hidden />
                    {m.name}
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>

        {/* Colonne droite */}
        <aside className="flex w-full min-w-0 basis-full flex-col gap-8 md:max-w-[340px] md:flex-[0_1_340px] md:gap-10">
          <section>
            <h2 className="mb-3.5 text-base font-semibold text-lime">{t.stackLabel}</h2>
            <div className="flex flex-wrap gap-2">
              {t.stack.map((s) => (
                <span key={s} className="inline-block rounded-full border border-border bg-card px-3 py-1 text-[13px]">
                  {s}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-3.5 text-base font-semibold text-lime">{t.infoLabel}</h2>
            <dl className="rounded-2xl border border-border bg-card px-5 py-1">
              {t.info.map((i) => (
                <div
                  key={i.k}
                  className="flex justify-between gap-4 border-b border-border py-3.5 text-sm last:border-b-0"
                >
                  <dt className="text-muted">{i.k}</dt>
                  <dd className="text-right font-medium">{i.v}</dd>
                </div>
              ))}
            </dl>
          </section>
        </aside>
      </div>
    </main>
  );
}
