import Image from "next/image";
import { AppShell } from "@/components/AppShell";
import { SectionHeading } from "@/components/SectionHeading";
import { IconArrowUpRight, NavIcon } from "@/components/icons";
import { awards } from "@/data/content";

export default function AwardsPage() {
  return (
    <AppShell active="awards" breadcrumb="Awards">
      <SectionHeading
        eyebrow="AWARDS / SELECTED RECOGNITION"
        title="Recognition and craft"
        description="Academic merit certificates and competition recognition from COMSATS University Islamabad and GDGoC CUI, shown from the award documents I have."
      />

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3 animate-fade-up-delay">
        {awards.map((award) => (
          <article
            key={`${award.title}-${award.year}`}
            className="solid-card overflow-hidden rounded-[var(--radius-card)]"
          >
            <a
              href={award.pdf}
              target="_blank"
              rel="noreferrer"
              className="relative block aspect-[4/3] bg-[#f3f4f6]"
            >
              <Image
                src={award.image}
                alt={award.title}
                fill
                className="object-contain p-3"
                sizes="(max-width: 1280px) 50vw, 355px"
              />
            </a>
            <div className="p-6">
              <div className="flex items-center justify-between">
                <NavIcon name="award" className="text-active-fg" size={20} />
                <span className="text-[12px] text-muted-soft">{award.year}</span>
              </div>
              <h2 className="mt-3 text-[20px] font-medium tracking-tight">
                {award.title}
              </h2>
              <p className="mt-2 text-[13px] font-medium text-[#3f3f46]">
                {award.awardName}
              </p>
              <p className="mt-2 text-[13px] leading-relaxed text-muted">
                {award.details}
              </p>
              <a
                href={award.pdf}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-[14px] text-active-fg"
              >
                View document
                <IconArrowUpRight size={16} />
              </a>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-8 text-[12px] text-muted-soft">
        Award details are taken from the supplied certificates and competition
        documents in the assets folder.
      </p>
    </AppShell>
  );
}
