"use client";

import { useEffect, useState } from "react";
import { IconMapPin } from "./icons";
import { site } from "@/data/content";

function formatTime(date: Date) {
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: site.timezone,
  });
}

export function LocalTime({ className = "" }: { className?: string }) {
  const [time, setTime] = useState("...");

  useEffect(() => {
    const tick = () => setTime(formatTime(new Date()));
    tick();
    const id = window.setInterval(tick, 30000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div
      className={`flex items-center gap-2 text-[13px] text-muted ${className}`}
    >
      <IconMapPin className="text-muted" />
      <span>{site.location}</span>
      <span className="size-[7px] rounded-full bg-[#ef4444]" aria-hidden />
      <span>{time}</span>
    </div>
  );
}
