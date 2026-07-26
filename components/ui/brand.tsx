import Image from "next/image";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/site";

export function BrandMark({ className, size = 46 }: { className?: string; size?: number }) {
  return (
    <Image
      src="/logo.png"
      alt={SITE.legalName}
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
  markSize = 46,
}: {
  className?: string;
  showText?: boolean;
  markSize?: number;
}) {
  return (
    <a
      href="#hero"
      className={cn("flex items-center gap-2.5", className)}
      aria-label={`${SITE.legalName} — Accueil`}
    >
      <BrandMark size={markSize} />
      {showText && (
        <div className="font-display italic font-black uppercase leading-[0.95] text-white text-[22px] tracking-[-0.005em]">
          {SITE.name}
          <small className="block text-[11px] text-red mt-[2px] tracking-[0.02em]">
            {SITE.tagline}
          </small>
        </div>
      )}
    </a>
  );
}
