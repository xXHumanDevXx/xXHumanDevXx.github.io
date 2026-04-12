import { Link } from "react-router-dom";
import GlowOrb from "@/components/GlowOrb";
import CursorGlow from "@/components/CursorGlow";
import AnimatedSection from "@/components/AnimatedSection";
import gameVoidDash from "@/assets/game-void-dash.jpg";
import gameSpaceAssault from "@/assets/game-space-assault.jpg";
import gameDogeBlast from "@/assets/game-doge-blast.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden noise flex flex-col items-center justify-center py-20 px-6 relative">
      <CursorGlow />
      <GlowOrb className="top-20 -left-20 animate-drift" size={500} delay={0} />
      <GlowOrb className="bottom-20 right-10 animate-drift-reverse" size={400} delay={1.5} />

      <AnimatedSection variant="fade-up">
        <h1 className="font-heading text-4xl md:text-6xl font-bold text-center mb-16">
          <span className="gradient-text animate-text-shimmer">My Games</span>
        </h1>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
        <AnimatedSection variant="fade-left" delay={0}>
          <Link to="/game/void-dash" className="block glass rounded-3xl overflow-hidden group hover:glow transition-all duration-500 hover:-translate-y-2 hover:border-primary/30">
            <div className="relative overflow-hidden">
              <img src={gameVoidDash} alt="Void Dash" loading="lazy" width={1376} height={768} className="w-full aspect-video object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
            </div>
            <div className="p-6">
              <h3 className="font-heading text-2xl font-semibold group-hover:gradient-text transition-all duration-500">Void Dash</h3>
              <p className="font-body text-sm text-muted-foreground mt-1">Play Now →</p>
            </div>
          </Link>
        </AnimatedSection>

        <AnimatedSection variant="fade-right" delay={200}>
          <Link to="/game/space-assault" className="block glass rounded-3xl overflow-hidden group hover:glow transition-all duration-500 hover:-translate-y-2 hover:border-primary/30">
            <div className="relative overflow-hidden">
              <img src={gameSpaceAssault} alt="Space Assault" loading="lazy" width={1376} height={768} className="w-full aspect-video object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
            </div>
            <div className="p-6">
              <h3 className="font-heading text-2xl font-semibold group-hover:gradient-text transition-all duration-500">Space Assault</h3>
              <p className="font-body text-sm text-muted-foreground mt-1">Play Now →</p>
            </div>
          </Link>
        </AnimatedSection>

        <AnimatedSection variant="fade-left" delay={400}>
          <Link to="/game/doge-blast" className="block glass rounded-3xl overflow-hidden group hover:glow transition-all duration-500 hover:-translate-y-2 hover:border-primary/30">
            <div className="relative overflow-hidden">
              <img src={gameDogeBlast} alt="Doge Blast" loading="lazy" width={1376} height={768} className="w-full aspect-video object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
            </div>
            <div className="p-6">
              <h3 className="font-heading text-2xl font-semibold group-hover:gradient-text transition-all duration-500">Doge Blast</h3>
              <p className="font-body text-sm text-muted-foreground mt-1">Play Now →</p>
            </div>
          </Link>
        </AnimatedSection>

        <AnimatedSection variant="fade-right" delay={600}>
          <div className="glass rounded-3xl overflow-hidden flex items-center justify-center aspect-video relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
            <div className="text-center relative z-10">
              <span className="font-heading text-3xl md:text-4xl font-bold text-muted-foreground/40">Coming Soon</span>
              <p className="font-body text-sm text-muted-foreground/30 mt-2">Stay tuned...</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Index;
