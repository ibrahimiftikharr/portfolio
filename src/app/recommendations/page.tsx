import Image from "next/image";
import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { SectionHeading } from "@/components/SectionHeading";
import { IconArrowUpRight } from "@/components/icons";
import { recommendations } from "@/data/content";

export default function RecommendationsPage() {
  return (
    <AppShell active="recommendations" breadcrumb="Recommendations">
      <SectionHeading
        eyebrow={`RECOMMENDATIONS / ${recommendations.length} LETTERS`}
        title="Words from collaborators"
        description="Recommendation letters from faculty at COMSATS University Islamabad. You can read each one as a PDF."
      />

      <div className="mt-8 grid gap-5 md:grid-cols-2 animate-fade-up-delay">
        {recommendations.map((letter) => (
          <Link
            key={letter.slug}
            href={`/recommendations/${letter.slug}`}
            className="solid-card group overflow-hidden rounded-[var(--radius-card)] transition-transform hover:-translate-y-0.5"
          >
            <div className="relative aspect-[4/5] bg-[#f3f4f6]">
              <Image
                src={letter.previewImage}
                alt={`${letter.name} recommendation letter`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-6">
              <span className="inline-flex rounded-full bg-[#f3f4f6] px-2.5 py-1 text-[11px] text-muted">
                {letter.tag}
              </span>
              <h2 className="mt-3 text-[20px] font-medium tracking-tight">
                {letter.title}
              </h2>
              <p className="mt-2 text-[15px] font-medium">{letter.name}</p>
              <p className="mt-1 text-[13px] text-muted">{letter.role}</p>
              <div className="mt-5 flex items-center justify-between text-[14px]">
                <span>Read letter</span>
                <IconArrowUpRight size={18} className="text-link-accent" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </AppShell>
  );
}
