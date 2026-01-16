import React from "react";
import { Icon } from "../atoms/Icon";

export const RatingInline: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="mt-1 inline-flex items-center gap-2 text-white/80">
      <Icon name="star" className="w-5 text-yellow-400" />
      <span className="text-sm font-semibold">{text}</span>
    </div>
  );
};