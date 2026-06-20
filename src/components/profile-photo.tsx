"use client";

import Image from "next/image";
import { useState } from "react";
import { withBasePath } from "@/lib/base-path";
import { site } from "@/lib/site-data";

function InitialsPlaceholder() {
  const initials = site.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <div
      className="flex h-28 w-28 shrink-0 items-center justify-center rounded-lg border border-border bg-[#edeae3] font-mono text-sm tracking-wide text-muted"
      aria-label={`Photo placeholder for ${site.name}`}
    >
      {initials}
    </div>
  );
}

export function ProfilePhoto() {
  const [failed, setFailed] = useState(false);

  if (!site.photo) {
    return null;
  }

  if (failed) {
    return <InitialsPlaceholder />;
  }

  return (
    <Image
      src={withBasePath(site.photo)}
      alt={`Photo of ${site.name}`}
      width={112}
      height={112}
      priority
      className="h-28 w-28 shrink-0 rounded-lg border border-border object-cover"
      onError={() => setFailed(true)}
    />
  );
}
