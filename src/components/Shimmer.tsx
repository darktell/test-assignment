import cn from "classnames";
import { ReactNode } from "react";

interface Props {
  className?: string;
  children?: ReactNode;
}

export const ShimmerBlock = ({ className }: Props) => {
  return (
    <div
      aria-hidden
      role="presentation"
      className={cn(
        "animate-pulse bg-gray-600/10 rounded-md flex items-center border border-gray-600/10",
        className,
      )}
    >
      Loading...
    </div>
  );
};
