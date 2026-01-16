import React from "react";

type Props = {
  name: string;
  role: string;
  photoUrl?: string;
};

export const PersonCard: React.FC<Props> = ({ name, role, photoUrl }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="h-26 w-17.25 overflow-hidden rounded-[14px] border border-white/10 bg-white/5">
        {photoUrl ? (
          <img className="h-full w-full object-cover" src={photoUrl} alt={name} loading="lazy" />
        ) : (
          <div className="h-full w-full bg-white/10" />
        )}
      </div>

      <div className="min-w-0">
        <div className="truncate text-[14px] font-bold text-white">{name}</div>
        <div className="truncate text-[12px] text-white/70">{role}</div>
      </div>
    </div>
  );
};
