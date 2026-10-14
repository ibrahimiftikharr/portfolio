"use client";

import Link from "next/link";
import { navItems, site, type NavKey } from "@/data/content";
import { IconArrowUpRight, IconMapPin, NavIcon } from "./icons";

export function Sidebar({ active }: { active: NavKey }) {
  return (
    <aside className="hidden lg:flex fixed inset-y-0 left-0 z-30 w-[var(--sidebar-width)] flex-col border-r border-border bg-sidebar px-6 py-6">
      <Link href="/" className="text-[26px] font-medium tracking-tight leading-none">
        {site.brand}
      </Link>

      <div className="mt-6 border-t border-border pt-4">
        <p className="text-[16px] font-medium leading-none">{site.name}</p>
        <p className="mt-1.5 text-[13px] text-muted">{site.role}</p>
      </div>

      <nav className="mt-6 flex flex-col gap-1.5" aria-label="Primary">
        {navItems.map((item) => {
          const isActive = item.key === active;
          return (
            <Link
              key={item.key}
              href={item.href}
              className={`group flex h-12 items-center gap-3 rounded-[var(--radius-nav)] px-3.5 text-[14px] transition-colors ${
                isActive
                  ? "bg-active-bg text-active-fg font-medium"
                  : "text-[#3f3f46] hover:bg-[#f6f5f8]"
              }`}
            >
              <NavIcon
                name={item.icon}
                className={isActive ? "text-active-fg" : "text-[#52525b]"}
              />
              <span className="flex-1">{item.label}</span>
              {isActive ? (
                <span className="size-1.5 rounded-full bg-active-dot" />
              ) : null}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto pt-8">
        <div className="flex items-center gap-2 text-[13px] text-muted">
          <IconMapPin />
          <span>{site.location}</span>
        </div>
        <a
          href={site.email}
          className="mt-4 inline-flex h-11 items-center gap-2 rounded-xl border border-border bg-white px-4 text-[14px] font-medium transition-colors hover:bg-[#fafafa]"
        >
          <IconArrowUpRight size={18} />
          Contact me
        </a>
        <p className="mt-4 text-[12px] text-muted-soft">{site.copyright}</p>
      </div>
    </aside>
  );
}
