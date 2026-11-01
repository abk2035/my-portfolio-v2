import { ArrowUpRight, Download } from "lucide-react";
import { notFound } from "next/navigation";
import { SOCIALS } from "@/components/footer";
import { getDictionary, hasLocale } from "@/lib/i18n";

export async function generateMetadata({ params }: PageProps<"/[lang]/cv">) {
  const { lang } = await params;
  return { title: lang === "en" ? "Resume" : "CV" };
}

const label = "font-mono text-[13px] text-lime";

export default async function CvPage({ params }: PageProps<"/[lang]/cv">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const { cv: t } = getDictionary(lang);

  return (
    <main className="mx-auto w-full max-w-[1080px] px-5 pb-12 pt-10 md:px-8 md:py-[72px]">
      <section className="max-w-[720px]">
        <h1 className="mb-5 text-[32px] font-semibold leading-[1.1] tracking-[-0.03em] md:text-[44px]">
          {t.h1}
        </h1>
        <p className="mb-7 text-[17px] text-muted">{t.intro}</p>
        <a
          href="/cv/CV_Arnold_Kengne.pdf"
          download
          className="inline-flex min-h-11 items-center gap-2 rounded-full bg-lime px-5 text-sm font-medium text-lime-text transition-opacity hover:opacity-85"
        >
          <Download size={16} aria-hidden />
          {t.download}
        </a>
      </section>

      <div className="mt-12 flex flex-wrap items-start gap-12 md:mt-16 md:gap-16">
        {/* 01 Expérience */}
        <section aria-labelledby="exp-title" className="flex min-w-0 basis-full flex-col md:flex-[1_1_480px]">
          <div id="exp-title" className={`${label} mb-2`}>
            01 | {t.expLabel}
          </div>
          {t.experience.map((e) => (
            <article key={`${e.date}-${e.role}`} className="border-t border-border py-7">
              <div className="mb-2 font-mono text-[13px] text-muted">{e.date}</div>
              <h2 className="text-xl font-semibold leading-[1.3] tracking-tight">{e.role}</h2>
              <div className="mb-3.5 mt-0.5 text-[15px] text-lime">{e.org}</div>
              <ul className="flex flex-col gap-2.5">
                {e.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-3.5 text-muted">
                    <span className="mt-[11px] size-1.5 flex-none rounded-full bg-lime" aria-hidden />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <aside className="flex w-full min-w-0 basis-full flex-col gap-10 md:max-w-[380px] md:flex-[0_1_380px] md:gap-12">
          {/* 02 Éducation */}
          <section aria-labelledby="edu-title">
            <div id="edu-title" className={`${label} mb-4`}>
              02 | {t.eduLabel}
            </div>
            <div className="flex flex-col gap-3">
              {t.education.map((d) => (
                <div key={d.date} className="rounded-2xl border border-border bg-card px-5 py-[18px]">
                  <div className="mb-1.5 font-mono text-xs text-muted">{d.date}</div>
                  <div className="text-base font-semibold leading-[1.35]">{d.title}</div>
                  <div className="mt-1 text-sm text-muted">{d.school}</div>
                </div>
              ))}
            </div>
          </section>

          {/* 03 Certifications */}
          <section aria-labelledby="cert-title">
            <div id="cert-title" className={`${label} mb-4`}>
              03 | {t.certLabel}
            </div>
            <div className="flex flex-col gap-1 rounded-2xl border border-border bg-card px-5 py-[18px]">
              <div className="text-base font-semibold">AWS Certified Cloud Practitioner</div>
              <div className="text-sm text-muted">Amazon Web Services</div>
            </div>
            <a href={SOCIALS.linkedin} className="lk mt-4 inline-flex items-center gap-1.5 text-sm font-medium">
              {t.certMore}
              <ArrowUpRight size={14} className="flex-none" aria-hidden />
            </a>
          </section>
        </aside>
      </div>
    </main>
  );
}
