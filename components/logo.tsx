import React from "react";
import Image from "next/image";

export function Logo({ className = "", size = 32 }: { className?: string; size?: number }) {
  return (
    <Image
      src="/logo.svg"
      alt="Dark Chat logo"
      width={size}
      height={size}
      className={className}
      priority
    />
  );
}
