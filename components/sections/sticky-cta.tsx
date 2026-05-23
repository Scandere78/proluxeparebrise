import { Phone } from "lucide-react";

export function StickyCtaMobile() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 hidden gap-[10px] border-t border-white/8 bg-navy/[0.96] p-3 backdrop-blur-xl max-[720px]:flex">
      <a href="tel:0123456789" className="btn btn-ghost flex-1 px-2 py-[14px] text-[12px]">
        <Phone className="h-[14px] w-[14px]" />
        Appeler
      </a>
      <a href="#rdv" className="btn btn-primary flex-1 px-2 py-[14px] text-[12px]">
        Prendre RDV
      </a>
    </div>
  );
}
