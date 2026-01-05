interface ArtistCardProps {
  name: string;
  role: string;
  imageUrl?: string;
  isHeadliner?: boolean;
}

const ArtistCard = ({ name, role, isHeadliner = false }: ArtistCardProps) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-xl bg-gradient-card border border-border transition-all duration-500 hover:border-primary/50 hover:shadow-glow ${
        isHeadliner ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80" />
      
      <div className="relative p-6 md:p-8 h-full flex flex-col justify-end min-h-[200px]">
        <span className="text-xs uppercase tracking-widest text-primary mb-2">
          {role}
        </span>
        <h3
          className={`font-display tracking-wide text-foreground group-hover:text-gradient-primary transition-all duration-300 ${
            isHeadliner ? "text-4xl md:text-6xl" : "text-2xl md:text-3xl"
          }`}
        >
          {name}
        </h3>
        
        <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500" />
      </div>
    </div>
  );
};

export default ArtistCard;
