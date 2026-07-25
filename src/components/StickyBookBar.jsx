import { Link } from "react-router-dom";
import { Phone, CalendarCheck } from "lucide-react";
import { clinic } from "../data/site";

export default function StickyBookBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex sm:hidden border-t border-ink/10 bg-paper/95 backdrop-blur-md pb-[env(safe-area-inset-bottom)]">
      <a
        href={`tel:+${clinic.phoneRaw}`}
        className="flex-1 flex items-center justify-center gap-2 py-3 text-[13.5px] font-semibold text-ink border-r border-ink/10"
      >
        <Phone size={16} /> Call
      </a>
      <Link
        to="/contact"
        className="flex-[1.4] flex items-center justify-center gap-2 py-3 text-[13.5px] font-semibold bg-move text-paper"
      >
        <CalendarCheck size={16} /> Book Appointment
      </Link>
    </div>
  );
}
