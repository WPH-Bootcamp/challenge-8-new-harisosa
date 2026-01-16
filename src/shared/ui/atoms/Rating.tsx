import { Icon } from "./Icon";

type Props = { value: number }; // vote_average

export const Rating: React.FC<Props> = ({ value }) => {
  const score = Number.isFinite(value) ? value : 0;

  return (
    <div className="mt-2 flex items-center gap-2 text-md font-normal text-white/70">
      <span className="text-yellow-400 w-5">
        <Icon name="star" />
      </span>
      <span>{score.toFixed(1)}/10</span>
    </div>
  );
};