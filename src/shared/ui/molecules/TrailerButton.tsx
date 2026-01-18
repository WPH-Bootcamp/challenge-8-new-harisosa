import React from "react";
import { Button } from "../atoms/Button";
import { Icon } from "../atoms/Icon";

export const TrailerButton: React.FC<{ onClick?: () => void; disabled?: boolean , className?: string}> = ({
  onClick,
  disabled,
  className
}) => {
  return (
    <Button
      variant="primary"
      onClick={onClick}
      disabled={disabled}
      className={`${className} h-11 w-fit rounded-full px-5 text-sm`}
    >
      Watch Trailer
      <span className="ml-2 grid h-6 w-6 place-items-center rounded-full bg-(--color-primary)">
        <Icon name="play" className="h-6 w-6 text-(--button-primary)" />
      </span>
    </Button>
  );
};
