import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const games: Record<string, { title: string; url: string }> = {
  "void-dash": {
    title: "Void Dash",
    url: "https://xxhumandevxx.github.io/codespace/projects/games/void_dash.htm",
  },
  "space-assault": {
    title: "Space Assault",
    url: "https://xxhumandevxx.github.io/codespace/projects/games/space_assault.html",
  },
  "doge-blast": {
    title: "Doge Blast",
    url: "https://xxhumandevxx.github.io/codespace/projects/games/doge_blast.html",
  },
};

const Game = () => {
  const { slug } = useParams<{ slug: string }>();
  const game = slug ? games[slug] : null;

  if (!game) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <p className="font-heading text-2xl text-muted-foreground">Game not found</p>
      </div>
    );
  }

  return (
    <div className="h-screen bg-background text-foreground flex flex-col overflow-hidden noise">
      {/* Top Menu Bar */}
      <nav className="glass border-b border-border/50 px-6 py-3 flex items-center gap-4 z-50 shrink-0">
        <Link
          to="/"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="font-body text-sm">Back to Games</span>
        </Link>
        <div className="h-4 w-px bg-border" />
        <span className="font-heading text-sm font-semibold gradient-text animate-text-shimmer">
          {game.title}
        </span>
      </nav>

      {/* Game iFrame */}
      <iframe
        src={game.url}
        title={game.title}
        className="flex-1 w-full border-none"
        allow="fullscreen; autoplay"
      />
    </div>
  );
};

export default Game;
