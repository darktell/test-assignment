import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import { twMerge } from "tailwind-merge";

const PRIMARY_STYLE =
  "text-white hover:text-primary bg-primary border border-primary hover:bg-white dark:hover:bg-black2 rounded-lg py-2 px-6 text-sm font-medium cursor-pointer";

export type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  className?: string;
};

const Button: FC<Props> = ({ className, ...props }) => {
  return (
    <button
      {...props}
      className={twMerge(
        "disabled:cursor-not-allowed",
        PRIMARY_STYLE,
        className,
      )}
      type={props?.type || "button"}
    >
      {props.children}
    </button>
  );
};

export default Button;
