import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center py-20">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="w-12 h-12 border-4 border-istm-600 border-t-transparent rounded-full"
      />
      <p className="mt-4 text-istm-600 font-medium">Chargement…</p>
    </div>
  );
}