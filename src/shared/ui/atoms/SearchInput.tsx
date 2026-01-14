import * as React from "react";
import { Icon } from "./Icon";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  wrapperClassName?: string;
};

export const SearchInput: React.FC<Props> = ({
  wrapperClassName = "",
  className = "",
  ...props
}) => {
  return (
    <div
      className={[
        "flex items-center gap-2 rounded-2xl bg-black/30 px-4 py-2 ring-1 ring-white/10 backdrop-blur h-14",
        wrapperClassName,
      ].join(" ")}
    >
      <Icon name="search" className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-white/70" />
      <input
        className={[
          "relative left-5 bg-transparent text-sm text-white placeholder:text-white/50 outline-none",
          className,
        ].join(" ")}
        {...props}
      />
    </div>
  );
};
