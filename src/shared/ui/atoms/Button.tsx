import * as React from "react";

type Variant = "primary" | "ghost";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

export const Button: React.FC<Props> = ({
  variant = "ghost",
  className = "",
  ...props
}) => {
  const base =
    "cursor-pointer inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-white/20";

  const variants: Record<Variant, string> = {
    primary: "bg-(--button-primary) text-white hover:brightness-110",
    ghost:
      "bg-white/5 text-white hover:bg-white/10 ring-1 ring-white/10",
  };

  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />;
};
