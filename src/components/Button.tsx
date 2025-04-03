import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import { twMerge } from "tailwind-merge";

export enum VARIANT {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  CANCEL = "cancel",
}

export const variantStyle = (value?: VARIANT) => {
  switch (value) {
    case VARIANT.PRIMARY:
      return "text-white hover:text-primary bg-primary border border-primary hover:bg-white dark:hover:bg-black2 rounded-lg py-2 px-6 text-sm font-medium";
    case VARIANT.SECONDARY:
      return "text-primary hover:text-white bg-white border border-primary hover:bg-primary rounded-lg py-2 px-6 text-sm font-medium";
    case VARIANT.CANCEL:
      return "text-white bg-gray-800 border dark:border-gray-800 border-black hover:bg-gray-700 rounded-lg py-2 px-6 text-sm font-medium";
    default:
      return "";
  }
};

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
