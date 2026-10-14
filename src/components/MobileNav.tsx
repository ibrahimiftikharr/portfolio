"use client";

import Link from "next/link";
import { navItems, site, type NavKey } from "@/data/content";
import {
  IconArrowUpRight,
  IconClose,
  NavIcon,
} from "./icons";

export function MobileNav({
  open,
  active,
  onClose,
}: {
  open: boolean;
  active: NavKey;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-white animate-nav-in lg:hidden">
      <div className="mesh-bg absolute inset-x-0 bottom-0 h-[38%] opacity-80 pointer-events-none" />
      <div className="relative flex h-[76px] items-center justify-between border-b border-border px-5">
        <Link href="/" onClick={onClose} className="text-[22px] font-medium">
          {site.brand}
        </Link>
        <button
          type="button"
          aria-label="Close menu"
          onClick={onClose}
          className="flex size-11 items-center justify-center rounded-xl border border-border bg-white"
        >
          <IconClose />
        </button>
      </div>

      <div className="relative px-6 pt-6">
        <p className="text-[28px] font-medium leading-none">{site.name}</p>
        <p className="mt-3 text-[14px] text-muted">
          {site.role} · {site.location}
        </p>

        <nav className="mt-8 flex flex-col gap-2" aria-label="Mobile">
          {navItems.map((item) => {
            const isActive = item.key === active;
            return (
              <Link
                key={item.key}
                href={item.href}
                onClick={onClose}
                className={`flex h-12 items-center gap-3 rounded-[var(--radius-nav)] px-3.5 text-[15px] ${
                  isActive
                    ? "bg-active-bg text-active-fg font-medium ring-1 ring-[#ddd4ff]"
                    : "text-[#52525b]"
                }`}
              >
                <NavIcon name={item.icon} />
                <span className="flex-1">{item.label}</span>
                {isActive ? (
                  <span className="size-1.5 rounded-full bg-active-dot" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <a
          href={site.email}
          className="mt-10 inline-flex h-11 items-center gap-2 rounded-xl border border-border bg-white px-4 text-[14px] font-medium"
        >
          <IconArrowUpRight size={18} />
          Contact me
        </a>
        <p className="mt-4 text-[12px] text-muted-soft">{site.copyright}</p>
      </div>
    </div>
  );
}
