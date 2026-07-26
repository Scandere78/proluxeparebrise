import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

/** « G » Google officiel, 4 couleurs — en SVG pour rester net à toute taille. */
export function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden className={cn("h-6 w-6", className)}>
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  );
}

export function Stars({ className }: { className?: string }) {
  return (
    <span aria-hidden className={cn("tracking-[1px] text-star", className)}>
      ★★★★★
    </span>
  );
}

/** Pastille de réassurance « Avis clients Google », cliquable vers la fiche. */
export function GoogleBadge({ className }: { className?: string }) {
  return (
    <a
      href={SITE.google.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Avis clients Google — ${SITE.google.rating} sur 5 pour ${SITE.google.count} avis`}
      className={cn(
        "inline-flex items-center gap-3 rounded-full bg-white px-5 py-[10px] shadow-[0_12px_30px_rgba(5,42,68,0.35)] transition-transform hover:-translate-y-0.5",
        className
      )}
    >
      <GoogleG className="h-6 w-6 flex-shrink-0" />
      <span className="flex flex-col items-start leading-none">
        <span className="flex items-center gap-2">
          <Stars className="text-[13px]" />
          <span className="font-sans text-[13px] font-extrabold text-blue-ink">
            {SITE.google.rating}
          </span>
        </span>
        <span className="mt-[5px] text-[9px] font-bold uppercase tracking-[0.14em] text-ink-mute">
          Avis clients · {SITE.google.count} avis
        </span>
      </span>
    </a>
  );
}
