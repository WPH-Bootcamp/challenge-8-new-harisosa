type ChipProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export const Chip: React.FC<ChipProps> = ({ children, className = "", onClick }) => {
  return (
    <span onClick={onClick}
      className={`${className} 
        flex h-12 w-12 items-center justify-center rounded-full 
        bg-black/60 text-white backdrop-blur
        transition-all duration-200
        hover:bg-white/10
        hover:ring-1 hover:ring-white/40
        hover:shadow-[0_0_12px_rgba(255,255,255,0.15)]
        active:scale-95
        disabled:opacity-40 disabled:hover:bg-black/60
      `}
    >
      {children}
    </span>
  );
};
