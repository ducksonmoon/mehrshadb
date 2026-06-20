"use client";

import Image from "next/image";
import { useState } from "react";
import { withBasePath } from "@/lib/base-path";
import { site } from "@/lib/site-data";

type ProfilePhotoProps = {
  size?: "sm" | "md";
};

const sizes = {
  sm: "h-20 w-20",
  md: "h-24 w-24 sm:h-28 sm:w-28",
} as const;

function InitialsPlaceholder({ size = "md" }: ProfilePhotoProps) {
  const initials = site.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full border border-border bg-[#edeae3] font-mono text-sm tracking-wide text-muted ${sizes[size]}`}
      aria-label={`Photo placeholder for ${site.name}`}
    >
      {initials}
    </div>
  );
}

export function ProfilePhoto({ size = "md" }: ProfilePhotoProps) {
  const [failed, setFailed] = useState(false);

  if (!site.photo) {
    return null;
  }

  if (failed) {
    return <InitialsPlaceholder size={size} />;
  }

  const dimension = size === "sm" ? 80 : 112;

  return (
    <Image
      src={withBasePath(site.photo)}
      alt={`Photo of ${site.name}`}
      width={dimension}
      height={dimension}
      priority
      className={`shrink-0 rounded-full border border-border object-cover ${sizes[size]}`}
      onError={() => setFailed(true)}
    />
  );
}
