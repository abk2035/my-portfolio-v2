import { ArrowUpRight, Mail } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { SOCIALS } from "@/components/footer";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { SkillGroups } from "@/components/skills";
import { getDictionary, hasLocale } from "@/lib/i18n";

const EMAIL = SOCIALS.email.replace("mailto:", "");

const SKILLS = {
  languages: ["Python", "JavaScript", "TypeScript", "Java"],
  frameworks: ["FastAPI", "Node.js", "Spring Boot", "React.js", "Next.js", "Flutter", "Tailwind CSS"],
  devops: ["Docker", "Kubernetes", "Jenkins", "AWS", "GitHub Actions", "Terraform"],
  data: ["Power BI", "Excel", "Copilot", "ChatGPT", "Claude AI"],
} as const;

const sectionLabel = "mb-3 font-mono text-[13px] text-lime";
const h2 = "mb-3.5 text-2xl font-semibold tracking-tight md:text-[28px]";
const socialBtn =
  "lk flex h-11 items-center justify-center rounded-full border border-border bg-card transition-colors hover:border-lime";

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const { home: t } = getDictionary(lang);

  const groups = (Object.keys(SKILLS) as (keyof typeof SKILLS)[]).map((k) => ({
    title: t.skillTitles[k],
    items: [...SKILLS[k]],
  }));

  return (
    <main className="mx-auto flex w-full max-w-[1080px] flex-wrap items-start gap-12 px-5 pb-12 pt-10 md:gap-16 md:px-8 md:py-[72px]">
      {/* Colonne gauche */}
      <div className="flex min-w-0 basis-full flex-col gap-10 md:flex-[1_1_480px] md:gap-14">
        <section>
          <h1 className="mb-5 text-[32px] font-semibold leading-[1.1] tracking-[-0.03em] md:mb-7 md:text-[44px]">
            {t.h1}
          </h1>
          {t.bio.map((p) => (
            <p key={p} className="mb-[18px] text-[17px] text-muted">
              {p}
            </p>
          ))}
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-semibold tracking-tight text-lime">{t.milestonesTitle}</h2>
          <ul className="flex flex-col gap-3.5">
            {t.milestones.map((m) => (
              <li key={m} className="flex items-start gap-3.5 text-muted">
                <span className="mt-[11px] size-1.5 flex-none rounded-full bg-lime" aria-hidden />
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-t border-border pt-10">
          <div className={sectionLabel}>01 | {t.s1Label}</div>
          <h2 className={h2}>{t.s1Title}</h2>
          <p className="text-muted">{t.s1Text}</p>
        </section>

        <section className="border-t border-border pt-10">
          <div className={sectionLabel}>02 | {t.s2Label}</div>
          <h2 className={h2}>{t.s2Title}</h2>
          <p className="text-muted">{t.s2Text}</p>
        </section>
      </div>

      {/* Colonne droite */}
      <aside className="flex w-full min-w-0 basis-full flex-col gap-10 md:max-w-[380px] md:flex-[0_1_380px] md:gap-12">
        {/* Photo : cadre incliné de 35° derrière, fond toujours noir, bordure citron */}
        <div className="relative mx-auto my-12 aspect-[511/446] w-[72%] md:my-11 md:w-full">
          <div
            aria-hidden
            className="absolute inset-0 z-0 rotate-35 rounded-[20px] border-2 border-lime bg-card"
          />
          <Image
            src="/images/portrait-cutout.png"
            alt="Arnold Kengne"
            width={511}
            height={446}
            priority
            className="relative z-[1] block size-full rounded-[20px] border-2 border-lime bg-[#0a0a0b] object-cover"
          />
        </div>

        <section>
          <h3 className="mb-3.5 text-base font-semibold">{t.followTitle}</h3>
          <div className="flex flex-wrap gap-2.5">
            <a href={SOCIALS.linkedin} aria-label="LinkedIn" title="LinkedIn" className={`${socialBtn} w-11`}>
              <LinkedinIcon width={20} height={20} />
            </a>
            <a href={SOCIALS.github} aria-label="GitHub" title="GitHub" className={`${socialBtn} w-11`}>
              <GithubIcon width={20} height={20} />
            </a>
            <a
              href={SOCIALS.email}
              aria-label="Email"
              title="Email"
              className={`${socialBtn} max-w-full gap-2.5 pl-3.5 pr-[18px] text-sm font-medium [overflow-wrap:anywhere]`}
            >
              <Mail size={20} className="flex-none" aria-hidden />
              {EMAIL}
            </a>
          </div>
        </section>

        <section>
          <div className={`${sectionLabel} mb-4`}>03 | {t.s3Label}</div>
          <SkillGroups groups={groups} />
        </section>

        <section>
          <div className={`${sectionLabel} mb-4`}>04 | {t.s4Label}</div>
          <div className="flex flex-col gap-1 rounded-2xl border border-border bg-card px-5 py-[18px]">
            <div className="text-base font-semibold">AWS Certified Cloud Practitioner</div>
            <div className="text-sm text-muted">Amazon Web Services · {t.certMeta}</div>
          </div>
          <a href={SOCIALS.linkedin} className="lk mt-4 inline-flex items-center gap-1.5 text-sm font-medium">
            {t.certMore}
            <ArrowUpRight size={14} className="flex-none" aria-hidden />
          </a>
        </section>
      </aside>
    </main>
  );
}
