import type { ReactNode } from "react";

export function MotionReveal({ children, className }: { children: ReactNode; className?: string; delay?: number }) {
  return <section className={className}>{children}</section>;
}

export function MotionCard({ children, className }: { children: ReactNode; className?: string; delay?: number }) {
  return <div className={className}>{children}</div>;
}
