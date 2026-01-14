import { Icon } from "../atoms/Icon";

export const LogoBrand = () => {
  return (
    <div className="flex items-center gap-2">
      <Icon name="logo" className="h-6 w-6 text-white" />
      <span className="text-lg font-bold text-white">Movie</span>
    </div>
  );
};
