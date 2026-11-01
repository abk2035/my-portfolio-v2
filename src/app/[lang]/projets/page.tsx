import { hasLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default async function Page({ params }: PageProps<"/[lang]/projets">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return (
    <main className="mx-auto w-full max-w-[1080px] px-5 py-10 md:px-8 md:py-[72px]">
      <h1 className="text-[32px] font-semibold tracking-tight md:text-[44px]">
        {lang === "fr" ? "Projets" : "Projects"}
      </h1>
    </main>
  );
}
