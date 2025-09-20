import React from "react";

export default function Pill({
  active,
  onClick,
  children,
}: {
  active?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-4 py-2 border text-sm transition-all whitespace-nowrap 
        ${
          active
            ? "bg-neutral-900 text-white border-neutral-900"
            : "bg-white hover:bg-neutral-100 border-neutral-300"
        }`}
    >
      {children}
    </button>
  );
}
