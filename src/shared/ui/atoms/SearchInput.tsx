import * as React from "react";
import { Icon } from "./Icon";
import { Button } from "./Button";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  wrapperClassName?: string;
};

export const SearchInput: React.FC<Props> = ({
  wrapperClassName = "",
  className = "",
  value = "",
  onChange,
  ...props
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const hasValue = String(value).length > 0;

  const clearInput = () => {
    if (!onChange) return;

    onChange({
      target: { value: "" },
    } as React.ChangeEvent<HTMLInputElement>);

    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div
      className={
        "relative flex items-center h-14 rounded-2xl bg-black/30 px-4 ring-1 ring-white/10 backdrop-blur " +
        wrapperClassName
      }
    >
      {/* Search icon */}
      <Icon
        name="search"
        className="pointer-events-none absolute left-4 h-5 w-5 text-white/60"
      />

      {/* Input */}
      <input
        ref={inputRef}
        value={value}
        onChange={onChange}
        className={
          "w-full bg-transparent pl-8 pr-9 text-sm text-white placeholder:text-white/50 outline-none " +
          className
        }
        {...props}
      />

      {/* Clear button */}
      {hasValue && (
        <Button
          variant="icon"
          onClick={clearInput}
          className="w-5 h-5 p-1.5"
          aria-label="Clear search"
        >
          <Icon name="close" className="w-3 h-3" />
        </Button>
      )}
    </div>
  );
};
