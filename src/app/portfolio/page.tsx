import Image from "next/image";
import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { SectionHeading } from "@/components/SectionHeading";
import { IconArrowUpRight } from "@/components/icons";
import { projects } from "@/data/content";

export default function PortfolioPage() {
  return (
    <AppShell active="portfolio" breadcrumb="Portfolio">
      <SectionHeading
        eyebrow="PORTFOLIO / SELECTED WORK"
        title="Selected work"
        description="Six projects: ByAcre Rollator Page, Dabster Craft Shop, Insting Loan Mobile App, ByAcre Product Size Guide Design, RentMates, and Order Placement Extension."
      />

      <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3 animate-fade-up-delay">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/portfolio/${project.slug}`}
            className="solid-card group overflow-hidden rounded-[var(--radius-card)] transition-transform hover:-translate-y-0.5"
          >
            <div className="relative aspect-[355/252] bg-[#efecea] overflow-hidden">
              <Image
                src={project.cardImage}
                alt={project.title}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 1280px) 50vw, 355px"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between text-[12px] text-muted-soft">
                <span>{project.category}</span>
                <span>{project.year}</span>
              </div>
              <h2 className="mt-3 text-[22px] font-medium tracking-tight">
                {project.title}
              </h2>
              <p className="mt-2 text-[14px] leading-relaxed text-muted line-clamp-3">
                {project.description}
              </p>
              <div className="mt-5 flex items-center justify-between text-[14px]">
                <span>View project</span>
                <IconArrowUpRight size={18} className="text-link-accent" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      <p className="mt-8 text-[12px] text-[#333333]">
        Screenshots and metrics come from the project files. Search numbers for
        Dabster Craft Shop come from Google Site Kit.
      </p>
    </AppShell>
  );
}
