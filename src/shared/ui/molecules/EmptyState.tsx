import React from "react";
import { Button } from "../atoms/Button";

type EmptyStateAction =
  | {
      label: string;
      onClick: () => void;
      variant?: "primary" | "custom";
      className?: string;
    }
  | undefined;

type Props = {
  icon?: React.ReactNode;

  title: string;
  description?: string;
  action?: EmptyStateAction;
  align?: "center" | "left";
  size?: "md" | "lg";
  fullHeight?: boolean;

  className?: string;
};

export const EmptyState: React.FC<Props> = ({
  icon,
  title,
  description,
  action,
  align = "center",
  size = "lg",
  fullHeight = true,
  className,
}) => {
  return (
    <div
      className={[
        "mx-auto w-full max-w-5xl px-4 sm:px-6 md:px-8",
        fullHeight ? "min-h-[60vh] grid place-items-center" : "",
        className ?? "",
      ].join(" ")}
    >
      <div
        className={[
          align === "center" ? "text-center" : "text-left",
          "grid place-items-center",
          size === "lg" ? "gap-3" : "gap-2",
        ].join(" ")}
      >
        {icon && <div className="mb-2 sm:mb-3">{icon}</div>}

        <h2 className="text-[clamp(1.1rem,2.2vw,1.45rem)] font-extrabold text-white">
          {title}
        </h2>

        {description && (
          <p className="max-w-md text-[clamp(0.9rem,1.5vw,1rem)] text-white/55">
            {description}
          </p>
        )}

        {action && (
          <div className="mt-4 sm:mt-5 w-full flex justify-center">
            <Button
              variant={action.variant ?? "primary"}
              onClick={action.onClick}
              className={[
                "h-12 sm:h-13 rounded-full text-sm sm:text-base",
                // responsive width (ga patok keras)
                "w-full sm:w-[clamp(14rem,30vw,22rem)]",
                action.className ?? "",
              ].join(" ")}
            >
              {action.label}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
