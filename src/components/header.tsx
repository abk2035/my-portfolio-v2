"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./theme-toggle";

type Labels = {
  home: string;
  navHome: string;
  navProjects: string;
  navCv: string;
  menu: string;
  themeLabel: string;
};

export function Header({ lang, labels }: { lang: string; labels: Labels }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  const items = [
    { href: `/${lang}`, label: labels.navHome },
    { href: `/${lang}/projets`, label: labels.navProjects },
    { href: `/${lang}/cv`, label: labels.navCv },
  ];
  const isActive = (href: string) =>
    href === `/${lang}` ? pathname === href : pathname.startsWith(href);

  return (
    <header className="relative mx-auto flex w-full max-w-[1080px] items-center justify-between gap-3 px-5 pt-4 md:px-8 md:pt-6">
      <Link
        href={`/${lang}`}
        aria-label={labels.home}
        className="block size-11 flex-none overflow-hidden rounded-full border border-border bg-[#0a0a0b]"
      >
        <Image
          src="/images/portrait-cutout.png"
          alt="Arnold Kengne"
          width={88}
          height={88}
          className="size-11 object-cover object-[50%_28%]"
        />
      </Link>

      {/* Navigation principale centrée (≥ 768px) */}
      <nav
        aria-label="Navigation"
        className="absolute left-1/2 top-6 hidden h-11 -translate-x-1/2 items-center gap-0.5 rounded-full border border-border bg-card p-1 shadow-soft md:flex"
      >
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive(item.href) ? "page" : undefined}
            className={`inline-flex min-h-9 items-center rounded-full px-4 text-[15px] font-medium transition-colors hover:text-lime ${
              isActive(item.href) ? "bg-chip text-lime" : "text-muted"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-1">
        <ThemeToggle label={labels.themeLabel} />
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={labels.menu}
          className="ml-1 flex h-11 cursor-pointer items-center gap-2 rounded-full border border-border bg-card px-4 text-sm font-medium text-foreground shadow-soft md:hidden"
        >
          <Menu size={16} aria-hidden />
          {labels.menu}
        </button>
      </div>

      {open && (
        <nav
          aria-label={labels.menu}
          className="absolute right-5 top-[68px] z-10 flex min-w-[200px] flex-col gap-0.5 rounded-2xl border border-border bg-card p-2 md:hidden"
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`lk flex min-h-11 items-center rounded-[10px] px-3.5 text-[15px] font-medium ${
                isActive(item.href) ? "text-lime" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
