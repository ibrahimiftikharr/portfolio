export function SectionHeading({
  eyebrow,
  title,
  description,
  className = "",
}: {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div className={`animate-fade-up ${className}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="display-title mt-2 text-[32px] lg:text-[40px]">
        {title}
      </h1>
      <p className="body-copy mt-3 max-w-[720px] text-[15px] lg:text-[16px]">
        {description}
      </p>
    </div>
  );
}
