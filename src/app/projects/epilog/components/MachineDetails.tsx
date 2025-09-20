import { motion, AnimatePresence } from "framer-motion";
import React from "react";

export default function MachineDetails({ machineNode, selectedMachine }: any) {
  return (
    <AnimatePresence>
      {machineNode && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="rounded-2xl bg-white border border-neutral-200 shadow-sm p-4 max-w-xl"
        >
          <h1 className="text-xl font-semibold">{selectedMachine}</h1>
          <p className="text-sm text-neutral-600 mt-1">
            {machineNode.description}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
