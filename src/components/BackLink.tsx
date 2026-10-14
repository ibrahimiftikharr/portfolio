import Link from "next/link";
import { IconArrowLeft } from "./icons";

export function BackLink({
  href,
  label,
  compact = false,
}: {
  href: string;
  label: string;
  compact?: boolean;
}) {
  if (compact) {
    return (
      <Link
        href={href}
        className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-[rgba(91,75,204,0.35)] bg-active-bg px-2.5 text-[12px] font-medium text-active-fg shadow-sm transition-colors hover:bg-[#e4dcff]"
      >
        <IconArrowLeft size={15} />
        <span className="hidden sm:inline">{label}</span>
        <span className="sm:hidden">Back</span>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="inline-flex h-11 items-center gap-2 rounded-xl border border-[rgba(91,75,204,0.35)] bg-active-bg px-4 text-[14px] font-medium text-active-fg transition-colors hover:bg-[#e4dcff]"
    >
      <IconArrowLeft size={18} />
      {label}
    </Link>
  );
}
