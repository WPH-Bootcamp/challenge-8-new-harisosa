type Props = {
  className?: string;
};

export const Skeleton: React.FC<Props> = ({ className }) => {
  return <div className={`animate-pulse bg-white/5 ${className}`} />;
};
