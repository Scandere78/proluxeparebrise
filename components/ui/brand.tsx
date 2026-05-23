import Image from "next/image";
import { cn } from "@/lib/utils";

export function BrandMark({ className, size = 40 }: { className?: string; size?: number }) {
  return (
    <Image
      src="/logo.png"
      alt="Proluxe Pare Brise"
      width={size}
      height={size}
      priority
      className={cn("flex-shrink-0 object-contain", className)}
    />
  );
}

export function Brand({
  className,
  showText = true,
}: {
  className?: string;
  showText?: boolean;
}) {
  return (
    <a href="#hero" className={cn("flex items-center gap-2.5", className)} aria-label="Proluxe Pare Brise — Accueil">
      <BrandMark />
      {showText && (
        <div className="font-display italic font-black uppercase leading-[0.95] text-white text-[22px] tracking-[-0.005em]">
          PROLUXE
          <small className="block text-[13px] text-red mt-[2px]">PARE BRISE</small>
        </div>
      )}
    </a>
  );
}
