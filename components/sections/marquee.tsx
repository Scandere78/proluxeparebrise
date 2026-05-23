const ITEMS = [
  "Toutes assurances",
  "Toutes marques",
  "Franchise offerte",
  "Véhicule de prêt gratuit",
  "1H30 chrono",
  "RDV sous 24H",
  "150€ ou 4 pneus offerts",
];

export function MarqueeSection() {
  return (
    <div
      aria-hidden
      className="overflow-hidden border-y border-black/15 bg-red py-[14px] text-white"
    >
      <div className="flex whitespace-nowrap animate-marquee">
        <MarqueeTrack />
        <MarqueeTrack />
      </div>
    </div>
  );
}

function MarqueeTrack() {
  return (
    <div className="flex shrink-0 items-center gap-[60px] pr-[60px] display text-[22px] tracking-[0.005em]">
      {ITEMS.map((item, i) => (
        <span key={i} className="flex items-center gap-[60px]">
          {item}
          <span className="text-[14px] opacity-55">✦</span>
        </span>
      ))}
    </div>
  );
}
