import React from "react";
import { Icon, type IconName } from "../../ui/atoms/Icon";

type Props = {
  iconName: IconName;
  label: string;
  value: string;
  iconClassName?: string;
};

export const MetaCard: React.FC<Props> = ({ iconName, label, value, iconClassName }) => {
  return (
    <div className="rounded-[14px] border border-white/10 bg-black/45 px-4 py-4.5 text-center lg:w-69">
      <div className="mb-2 flex justify-center opacity-90 ">
        <Icon name={iconName} className={`${iconClassName} w-7.5`}  />
      </div>
      <div className="mb-1 text-[13px] text-white/70">{label}</div>
      <div className="text-[16px] font-bold text-white">{value}</div>
    </div>
  );
};
