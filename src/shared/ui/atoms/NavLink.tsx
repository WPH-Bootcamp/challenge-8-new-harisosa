import * as React from "react";

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  active?: boolean;
};

export const NavLink: React.FC<Props> = ({ active, className = "", ...props }) => {
  return (
    <a
      className={[
        "text-md transition",
        active ? "text-white" : "text-white/70 hover:text-white",
        className,
      ].join(" ")}
      {...props}
    />
  );
};
