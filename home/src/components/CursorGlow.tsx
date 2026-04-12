import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const down = () => setClicking(true);
    const up = () => setClicking(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, []);

  return (
    <>
      {/* Glow */}
      <div
        className="pointer-events-none fixed z-50 rounded-full mix-blend-screen"
        style={{
          width: 400,
          height: 400,
          left: pos.x - 200,
          top: pos.y - 200,
          background:
            "radial-gradient(circle, hsl(239 84% 67% / 0.15), hsl(260 70% 60% / 0.08), transparent 70%)",
          transition: "left 0.15s ease-out, top 0.15s ease-out",
        }}
      />
      {/* Custom cursor dot */}
      <div
        className="pointer-events-none fixed z-[9999] rounded-full border-2 border-primary"
        style={{
          width: clicking ? 16 : 24,
          height: clicking ? 16 : 24,
          left: pos.x - (clicking ? 8 : 12),
          top: pos.y - (clicking ? 8 : 12),
          transition: "width 0.15s, height 0.15s, left 0.08s ease-out, top 0.08s ease-out",
          boxShadow: "0 0 12px hsl(239 84% 67% / 0.6)",
        }}
      />
      <div
        className="pointer-events-none fixed z-[9999] rounded-full bg-primary"
        style={{
          width: 6,
          height: 6,
          left: pos.x - 3,
          top: pos.y - 3,
          transition: "left 0.03s linear, top 0.03s linear",
        }}
      />
    </>
  );
}
