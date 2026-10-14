import {
  ArrowLeft,
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  FileText,
  LayoutGrid,
  MapPin,
  Menu,
  UserRound,
  X,
} from "lucide-react";
import type { ComponentProps } from "react";

type IconProps = ComponentProps<"svg"> & { size?: number };

const base = { strokeWidth: 1.75 } as const;

export function NavIcon({
  name,
  size = 20,
  className,
}: {
  name: "user" | "grid" | "file" | "award" | "briefcase";
  size?: number;
  className?: string;
}) {
  const props = { size, className, ...base };
  switch (name) {
    case "user":
      return <UserRound {...props} />;
    case "grid":
      return <LayoutGrid {...props} />;
    case "file":
      return <FileText {...props} />;
    case "award":
      return <Award {...props} />;
    case "briefcase":
      return <BriefcaseBusiness {...props} />;
  }
}

export function IconMapPin(props: IconProps) {
  return <MapPin size={14} {...base} {...props} />;
}

export function IconArrowUpRight(props: IconProps) {
  return <ArrowUpRight size={20} {...base} {...props} />;
}

export function IconArrowLeft(props: IconProps) {
  return <ArrowLeft size={20} {...base} {...props} />;
}

export function IconMenu(props: IconProps) {
  return <Menu size={20} {...base} {...props} />;
}

export function IconClose(props: IconProps) {
  return <X size={20} {...base} {...props} />;
}

