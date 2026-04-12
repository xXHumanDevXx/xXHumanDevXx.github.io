const GlowOrb = ({ className = "", size = 300, delay = 0 }: { className?: string; size?: number; delay?: number }) => {
  return (
    <div
      className={`absolute rounded-full blur-3xl opacity-20 animate-pulse-glow pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        background: 'radial-gradient(circle, hsl(239 84% 67% / 0.6), hsl(260 70% 60% / 0.3), transparent)',
        animationDelay: `${delay}s`,
      }}
    />
  );
};

export default GlowOrb;
