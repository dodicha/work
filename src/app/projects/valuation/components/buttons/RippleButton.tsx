import { useState } from "react";

interface Ripple {
  x: number;
  y: number;
  size: number;
  id: number;
}

interface RippleButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function RippleButton({
  children,
  onClick,
  className = "",
}: RippleButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const createRipple = (e: React.PointerEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);

    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const newRipple: Ripple = {
      x,
      y,
      size,
      id: Date.now(),
    };

    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);
  };

  return (
    <button
      onPointerDown={createRipple}
      onClick={onClick}
      className={`relative overflow-hidden ${className}`}
    >
      {ripples.map((r) => (
        <span
          key={r.id}
          className="ripple"
          style={{
            width: r.size,
            height: r.size,
            left: r.x,
            top: r.y,
          }}
        />
      ))}
      {children}
    </button>
  );
}
