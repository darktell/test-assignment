import cn from "classnames";
import { useField } from "formik";
import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: string;
  label?: string;
  isDisabled?: boolean;
  containerClassName?: string;
  className?: string;
}

const TextInput: FC<Props> = ({
  name,
  isDisabled,
  label,
  containerClassName,
  className,
  ...props
}) => {
  const [field, { error, touched }] = useField(name);
  const showError = touched && !!error && !isDisabled;

  return (
    <div className={twMerge("w-full", containerClassName)}>
      <input
        // id={id}
        type="text"
        className={cn(
          twMerge(
            "rounded-lg w-full border outline-none border-gray dark:bg-black2 py-2 px-3 focus:border-primary hover:border-primary",
            className,
          ),
          {
            "border-red-500 focus:border-red-500 hover:border-red-500":
              showError,
          },
        )}
        {...field}
        disabled={isDisabled}
      />
      {showError && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
};

export default TextInput;
