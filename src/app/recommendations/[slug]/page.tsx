import { Suspense } from "react";
import { notFound } from "next/navigation";
import { AppShell } from "@/components/AppShell";
import {
  getRecommendation,
  recommendations,
} from "@/data/content";

export function generateStaticParams() {
  return recommendations.map((item) => ({ slug: item.slug }));
}

function LetterFallback() {
  return (
    <div className="animate-pulse max-w-[1104px]">
      <div className="h-3 w-48 rounded bg-black/10" />
      <div className="mt-3 h-8 w-80 max-w-full rounded bg-black/10" />
      <div className="mt-8 h-[60vh] w-full rounded-2xl bg-black/5" />
    </div>
  );
}

async function LetterContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const letter = getRecommendation(slug);
  if (!letter) notFound();

  return (
    <div className="animate-fade-up max-w-[1104px]">
      <div>
        <p className="eyebrow">RECOMMENDATION LETTER</p>
        <h1 className="mt-2 text-[28px] lg:text-[36px] font-medium tracking-tight leading-[1.15]">
          {letter.title}
        </h1>
        <p className="mt-3 text-[15px] text-muted">
          {letter.name} · {letter.role}
        </p>
        <p className="mt-4 max-w-[65ch] text-[15px] leading-relaxed text-muted">
          {letter.summary}
        </p>
      </div>

      <div className="mt-8 overflow-hidden rounded-[var(--radius-card)] solid-card">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3 text-[13px] text-muted">
          <span>{letter.filename}</span>
          <a
            href={letter.pdf}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-active-fg hover:underline"
          >
            Open PDF
          </a>
        </div>
        <iframe
          title={`${letter.name} recommendation PDF`}
          src={`${letter.pdf}#view=FitH`}
          className="h-[75vh] w-full bg-[#f3f4f6]"
        />
      </div>
    </div>
  );
}

export default function RecommendationLetterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <AppShell
      active="recommendations"
      breadcrumb="Recommendations"
      back={{ href: "/recommendations", label: "Back to Recommendations" }}
    >
      <Suspense fallback={<LetterFallback />}>
        <LetterContent params={params} />
      </Suspense>
    </AppShell>
  );
}
