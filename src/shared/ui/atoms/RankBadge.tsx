type Props = { value: number };

export const RankBadge: React.FC<Props> = ({ value }) => {
  return (
    <div className="absolute left-3 top-3 flex h-12 w-12 items-center justify-center rounded-full bg-black/70 text-lg font-bold text-white">
      {value}
    </div>
  );
};