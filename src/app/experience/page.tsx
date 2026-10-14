import Image from "next/image";
import { AppShell } from "@/components/AppShell";
import { SectionHeading } from "@/components/SectionHeading";
import { experience } from "@/data/content";

export default function ExperiencePage() {
  return (
    <AppShell active="experience" breadcrumb="Experience">
      <SectionHeading
        eyebrow="EXPERIENCE / 2022 TO PRESENT"
        title="Work and education"
        description="Work roles and education from my CV, with company logos for easier scanning."
      />

      <div className="mt-10 relative animate-fade-up-delay">
        <div className="absolute left-[27px] top-6 bottom-6 w-px bg-border hidden sm:block" />
        <div className="flex flex-col gap-8">
          {experience.map((item) => (
            <article
              key={`${item.role}-${item.dates}`}
              className="sm:pl-[68px] relative"
            >
              <div className="absolute left-0 top-6 hidden sm:flex size-[54px] items-center justify-center rounded-2xl border border-border bg-white shadow-sm overflow-hidden z-10">
                <Image
                  src={item.logo}
                  alt={`${item.organization} logo`}
                  width={54}
                  height={54}
                  className="object-contain p-1.5"
                />
              </div>

              <div className="solid-card rounded-[var(--radius-card)] p-6 sm:p-8 lg:p-9">
                <div className="flex items-start gap-4 min-w-0">
                  <div className="sm:hidden flex size-12 shrink-0 items-center justify-center rounded-xl border border-border bg-white overflow-hidden">
                    <Image
                      src={item.logo}
                      alt=""
                      width={48}
                      height={48}
                      className="object-contain p-1"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[13px] font-medium text-muted-soft">
                      {item.dates}
                    </p>
                    <h2 className="mt-2 text-[20px] lg:text-[24px] font-medium tracking-tight leading-snug">
                      {item.role}
                    </h2>
                    <p className="mt-2 text-[15px] font-medium text-active-fg">
                      {item.organization}
                    </p>
                    <p className="mt-1 text-[13px] text-muted">{item.location}</p>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 border-t border-border pt-6">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-[15px] leading-relaxed text-[#111111]"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-active-dot" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>

      <p className="mt-10 text-[12px] text-muted-soft">
        Full CV:{" "}
        <a href="/docs/ibrahim-cv.pdf" className="text-active-fg hover:opacity-80">
          open PDF
        </a>
      </p>
    </AppShell>
  );
}
