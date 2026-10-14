import Image from "next/image";
import { AppShell } from "@/components/AppShell";
import {
  IconGitHub,
  IconInstagram,
  IconLinkedIn,
} from "@/components/SocialIcons";
import { site } from "@/data/content";

function SocialIcon({
  icon,
  color,
}: {
  icon: "github" | "linkedin" | "instagram";
  color: string;
}) {
  if (icon === "github") {
    return <IconGitHub className="size-3.5" style={{ color }} />;
  }
  if (icon === "linkedin") {
    return <IconLinkedIn className="size-3.5" style={{ color }} />;
  }
  return <IconInstagram className="size-3.5" style={{ color }} />;
}

export default function AboutPage() {
  return (
    <AppShell active="about" breadcrumb="About Me">
      <div className="grid gap-3.5 lg:grid-cols-2 lg:min-h-[min(680px,calc(100dvh-var(--topbar-height)-3.5rem))] animate-fade-up">
        <section className="about-intro-card rounded-[28px] px-7 py-7 lg:px-9 lg:py-9 flex flex-col">
          <h1 className="about-headline max-w-[22ch]">{site.aboutHeadline}</h1>
          <p className="about-body mt-4 max-w-[42ch]">{site.aboutBody}</p>
          <a href={site.email} className="about-contact-btn mt-6">
            CONTACT ME
          </a>
          <div className="mt-8 lg:mt-auto lg:pt-10 flex flex-wrap items-center gap-5 lg:gap-6">
            {site.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-[13px] text-[#333333] hover:opacity-70 transition-opacity"
              >
                <SocialIcon icon={social.icon} color={social.color} />
                <span>{social.label}</span>
              </a>
            ))}
          </div>
        </section>

        <section className="relative min-h-[320px] lg:min-h-full overflow-hidden rounded-[28px] bg-[#f3f3f3] animate-fade-up-delay">
          <Image
            src="/images/profile.png"
            alt={`${site.fullName} portrait`}
            fill
            priority
            quality={100}
            unoptimized
            className="object-cover object-[center_20%]"
            sizes="(max-width: 1024px) 100vw, 560px"
          />
        </section>
      </div>
    </AppShell>
  );
}
