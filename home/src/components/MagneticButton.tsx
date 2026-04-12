import { useRef, useState, ReactNode, MouseEvent } from "react";

export default function MagneticButton({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const [transform, setTransform] = useState("translate(0,0)");

  const handleMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
    setTransform(`translate(${x}px, ${y}px)`);
  };

  return (
    <button
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setTransform("translate(0,0)")}
      className={className}
      style={{ transform, transition: "transform 0.25s cubic-bezier(0.33,1,0.68,1)" }}
    >
      {children}
    </button>
  );
}
