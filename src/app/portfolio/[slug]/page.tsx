import { Suspense } from "react";
import { notFound } from "next/navigation";
import { AppShell } from "@/components/AppShell";
import { CaseBlocks } from "@/components/CaseBlocks";
import { getProject, projects } from "@/data/content";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

function ProjectFallback() {
  return (
    <div className="animate-pulse max-w-[1280px]">
      <div className="h-3 w-40 rounded bg-black/10" />
      <div className="mt-3 h-7 w-72 max-w-full rounded bg-black/10" />
      <div className="mt-3 h-16 w-full max-w-[62ch] rounded bg-black/5" />
      <div className="mt-8 h-[50vh] w-full rounded-2xl bg-black/5" />
    </div>
  );
}

async function ProjectContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <div className="animate-fade-up max-w-[1280px]">
      <div>
        <p className="eyebrow">{project.eyebrow}</p>
        <h1 className="mt-1.5 text-[24px] lg:text-[30px] font-medium tracking-tight leading-snug">
          {project.title}
        </h1>
        <p className="mt-2.5 max-w-[62ch] text-[15px] leading-relaxed text-[#111111]">
          {project.description}
        </p>
      </div>

      <CaseBlocks blocks={project.blocks} />

      {project.note ? (
        <p className="mt-8 text-[12px] text-muted-soft">{project.note}</p>
      ) : null}
    </div>
  );
}

export default function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <AppShell
      active="portfolio"
      breadcrumb="Portfolio"
      back={{ href: "/portfolio", label: "Back to Portfolio" }}
    >
      <Suspense fallback={<ProjectFallback />}>
        <ProjectContent params={params} />
      </Suspense>
    </AppShell>
  );
}
