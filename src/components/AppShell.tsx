"use client";

import { useState } from "react";
import { navItems, site, type NavKey } from "@/data/content";
import { Sidebar } from "./Sidebar";
import { MobileNav } from "./MobileNav";
import { LocalTime } from "./LocalTime";
import { BackLink } from "./BackLink";
import { IconMenu } from "./icons";

export function AppShell({
  active,
  breadcrumb,
  children,
  fitViewport = false,
  back,
}: {
  active: NavKey;
  breadcrumb: string;
  children: React.ReactNode;
  /** Keep About (and similar) within one desktop viewport with no page scroll */
  fitViewport?: boolean;
  back?: { href: string; label: string };
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const current =
    navItems.find((item) => item.key === active)?.label ?? "About Me";

  return (
    <div
      className={`mesh-bg ${
        fitViewport ? "h-dvh overflow-y-auto lg:overflow-hidden" : "min-h-dvh"
      }`}
    >
      <Sidebar active={active} />
      <MobileNav
        open={menuOpen}
        active={active}
        onClose={() => setMenuOpen(false)}
      />

      <div
        className={`lg:pl-[var(--sidebar-width)] flex flex-col ${
          fitViewport ? "min-h-dvh lg:h-dvh lg:overflow-hidden" : "min-h-dvh"
        }`}
      >
        <header className="sticky top-0 z-40 flex h-[var(--mobile-topbar-height)] shrink-0 items-center justify-between gap-3 px-5 lg:hidden border-b border-white/40 bg-[rgba(247,246,248,0.88)] backdrop-blur-md">
          <div className="flex min-w-0 items-center gap-2">
            {back ? <BackLink href={back.href} label={back.label} compact /> : null}
            <span className="truncate text-[20px] font-medium tracking-tight">
              {site.brand}
            </span>
          </div>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="inline-flex h-9 items-center gap-2 rounded-xl border border-border bg-white/90 px-3 text-[13px] font-medium"
          >
            <span>{current}</span>
            <IconMenu size={18} />
          </button>
        </header>

        <div className="sticky top-0 z-40 hidden lg:flex h-[var(--topbar-height)] shrink-0 items-center justify-between gap-4 px-10 border-b border-white/50 bg-[rgba(247,246,248,0.86)] backdrop-blur-md">
          <div className="flex min-w-0 items-center gap-3">
            {back ? <BackLink href={back.href} label={back.label} compact /> : null}
            <p className="truncate text-[13px] text-muted">
              {site.name} / {breadcrumb}
            </p>
          </div>
          <LocalTime />
        </div>

        <main
          className={`flex-1 px-5 lg:px-10 ${
            fitViewport
              ? "min-h-0 overflow-y-auto py-3 lg:py-4 flex flex-col"
              : "pb-10 pt-5 lg:pt-6 lg:pb-10"
          }`}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
