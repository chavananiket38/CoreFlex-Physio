import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { whatsappLink, defaultWhatsappMessage } from "../data/site";

export default function WhatsAppFloat() {
  const [hint, setHint] = useState(false);

  return (
    <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2">
      <AnimatePresence>
        {hint && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className="hidden sm:block rounded-xl bg-ink text-paper text-[13px] font-medium px-3.5 py-2 shadow-lift"
          >
            Chat with us on WhatsApp
          </motion.div>
        )}
      </AnimatePresence>
      <motion.a
        href={whatsappLink(defaultWhatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setHint(true)}
        onMouseLeave={() => setHint(false)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        className="relative flex h-13 w-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift"
        style={{ height: 52, width: 52 }}
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
        <MessageCircle size={25} strokeWidth={2} className="relative" />
      </motion.a>
    </div>
  );
}
