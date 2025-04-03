import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  label: string;
  children: ReactNode;
  className?: string;
  isRequired?: boolean;
}

const FormLabelWrapper: FC<Props> = ({
  className,
  children,
  label,
  isRequired,
}) => (
  <div
    className={twMerge(
      "grid md:grid-cols-[200px_1fr] gap-2 md:gap-4",
      className,
    )}
  >
    <span>
      {label}
      {isRequired && <span className="pl-1 text-xl">*</span>}
    </span>
    {children}
  </div>
);

export default FormLabelWrapper;
