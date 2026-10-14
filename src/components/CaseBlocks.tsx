import Image from "next/image";
import type { CaseBlock } from "@/data/content";

function SectionHeading({ title }: { title: string }) {
  return (
    <h2 className="text-[18px] lg:text-[22px] font-medium tracking-tight text-[#111111]">
      {title}
    </h2>
  );
}

function ImageFigure({
  src,
  alt,
  heading,
  body,
}: {
  src: string;
  alt: string;
  heading?: string;
  body?: string;
}) {
  // Reserve sticky topbar + heading + gap so both stay in view; image fills the rest.
  const frameMaxH = heading
    ? "max-h-[calc(100dvh-var(--mobile-topbar-height)-1.25rem)] lg:max-h-[calc(100dvh-var(--topbar-height)-1.25rem)]"
    : "max-h-[calc(100dvh-var(--mobile-topbar-height)-1.25rem)] lg:max-h-[calc(100dvh-var(--topbar-height)-1.25rem)]";
  const imageMaxH = heading
    ? "max-h-[calc(100dvh-var(--mobile-topbar-height)-3.75rem)] lg:max-h-[calc(100dvh-var(--topbar-height)-3.75rem)]"
    : "max-h-[calc(100dvh-var(--mobile-topbar-height)-1.5rem)] lg:max-h-[calc(100dvh-var(--topbar-height)-1.5rem)]";

  return (
    <div className="w-full">
      <figure className={`flex w-full flex-col items-start ${frameMaxH}`}>
        {heading ? (
          <div className="shrink-0">
            <SectionHeading title={heading} />
          </div>
        ) : null}
        <div
          className={`w-fit max-w-full min-h-0 overflow-hidden rounded-lg shadow-[0_10px_32px_rgba(17,17,17,0.14),0_3px_10px_rgba(17,17,17,0.07)] ${
            heading ? "mt-2" : ""
          }`}
        >
          <Image
            src={src}
            alt={alt}
            width={1800}
            height={1200}
            sizes="(max-width: 1024px) 100vw, calc(100vw - 256px - 5rem)"
            className={`block h-auto w-auto max-w-full rounded-lg object-left ${imageMaxH}`}
          />
        </div>
      </figure>
      {body ? (
        <p className="mt-2.5 max-w-[72ch] text-[15px] leading-relaxed text-[#111111]">
          {body}
        </p>
      ) : null}
    </div>
  );
}

export function CaseBlocks({ blocks }: { blocks: CaseBlock[] }) {
  return (
    <div className="mt-6 flex flex-col gap-7 lg:gap-8">
      {blocks.map((block, index) => {
        if (block.type === "text") {
          return (
            <section key={index} className="max-w-[72ch]">
              {block.eyebrow ? (
                <p className="eyebrow text-[#333333]">{block.eyebrow}</p>
              ) : null}
              <SectionHeading title={block.title} />
              <p className="mt-2.5 text-[15px] leading-relaxed text-[#111111]">
                {block.body}
              </p>
            </section>
          );
        }

        if (block.type === "list") {
          return (
            <section key={index} className="max-w-[72ch]">
              <SectionHeading title={block.title} />
              <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-[#111111]">
                {block.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-active-dot" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          );
        }

        if (block.type === "image") {
          return (
            <ImageFigure
              key={index}
              src={block.src}
              alt={block.alt}
              heading={block.heading}
              body={block.body}
            />
          );
        }

        if (block.type === "split") {
          return (
            <section
              key={index}
              className={`grid gap-6 lg:grid-cols-2 lg:gap-8 ${
                block.reverse ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <ImageFigure
                src={block.image.src}
                alt={block.image.alt}
                heading={block.image.heading}
              />
              <div className="flex flex-col justify-center max-w-[60ch]">
                {block.text.eyebrow ? (
                  <p className="eyebrow text-[#333333]">{block.text.eyebrow}</p>
                ) : null}
                <SectionHeading title={block.text.title} />
                <p className="mt-2.5 text-[15px] leading-relaxed text-[#111111]">
                  {block.text.body}
                </p>
              </div>
            </section>
          );
        }

        const stacked = block.layout !== "grid";

        return (
          <section key={index} className="space-y-7">
            {block.title ? <SectionHeading title={block.title} /> : null}
            <div
              className={
                stacked
                  ? "flex flex-col gap-7"
                  : "grid gap-6 sm:grid-cols-2"
              }
            >
              {block.items.map((item) => (
                <ImageFigure
                  key={item.src}
                  src={item.src}
                  alt={item.alt}
                  heading={item.heading}
                />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
