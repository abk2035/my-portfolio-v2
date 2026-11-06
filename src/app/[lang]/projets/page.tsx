import { notFound } from "next/navigation";
import { ProjectsExplorer, type ProjectItem } from "@/components/projects-explorer";
import { getDictionary, hasLocale } from "@/lib/i18n";

export async function generateMetadata({ params }: PageProps<"/[lang]/projets">) {
  const { lang } = await params;
  return { title: lang === "en" ? "Projects" : "Projets" };
}

export default async function ProjectsPage({ params }: PageProps<"/[lang]/projets">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const { projects: t } = getDictionary(lang);

  return (
    <main className="mx-auto w-full max-w-[1080px] px-5 pb-12 pt-10 md:px-8 md:py-[72px]">
      <section className="mb-10 max-w-[720px]">
        <h1 className="mb-5 text-[32px] font-semibold leading-[1.1] tracking-[-0.03em] md:text-[44px]">
          {t.h1}
        </h1>
        <p className="text-[17px] text-muted">{t.intro}</p>
      </section>

      <ProjectsExplorer lang={lang} items={t.items as ProjectItem[]} kinds={t.kinds} filterLabel={t.filterLabel} />
    </main>
  );
}
