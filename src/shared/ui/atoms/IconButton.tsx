import type { ButtonHTMLAttributes, ReactNode } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export const IconButton: React.FC<Props> = ({ children, className = "", ...props }) => {
  return (
    <button
      {...props}
      className={`${className} flex h-12 w-12 items-center justify-center rounded-full 
        bg-black/60 text-white backdrop-blur hover:bg-black/80 transition disabled:opacity-40 disabled:hover:bg-black/60`}
    >
      {children}
    </button>
  );
};