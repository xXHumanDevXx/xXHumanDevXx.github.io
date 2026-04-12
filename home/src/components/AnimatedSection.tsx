import { ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type Variant = "fade-up" | "fade-left" | "fade-right" | "zoom" | "flip" | "blur";

const variantClasses: Record<Variant, { hidden: string; visible: string }> = {
  "fade-up": {
    hidden: "opacity-0 translate-y-16",
    visible: "opacity-100 translate-y-0",
  },
  "fade-left": {
    hidden: "opacity-0 -translate-x-20",
    visible: "opacity-100 translate-x-0",
  },
  "fade-right": {
    hidden: "opacity-0 translate-x-20",
    visible: "opacity-100 translate-x-0",
  },
  zoom: {
    hidden: "opacity-0 scale-50",
    visible: "opacity-100 scale-100",
  },
  flip: {
    hidden: "opacity-0 [transform:rotateY(90deg)]",
    visible: "opacity-100 [transform:rotateY(0deg)]",
  },
  blur: {
    hidden: "opacity-0 blur-lg scale-95",
    visible: "opacity-100 blur-0 scale-100",
  },
};

export default function AnimatedSection({
  children,
  variant = "fade-up",
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  className?: string;
}) {
  const { ref, isVisible } = useScrollReveal(0.12);
  const v = variantClasses[variant];

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${isVisible ? v.visible : v.hidden} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
