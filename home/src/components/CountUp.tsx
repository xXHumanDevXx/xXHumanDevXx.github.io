import { useEffect, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const { ref, isVisible } = useScrollReveal(0.5);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, target]);

  return <span ref={ref as any}>{count}{suffix}</span>;
}
