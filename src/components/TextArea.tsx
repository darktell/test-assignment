import cn from "classnames";
import { useField } from "formik";
import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  name: string;
  placeholder?: string;
  isDisabled?: boolean;
  containerClassName?: string;
}

const TextArea: FC<Props> = ({
  isDisabled,
  containerClassName,
  name,
  placeholder,
}) => {
  const [field, { error, touched }] = useField(name);

  const showError = touched && !!error && !isDisabled;

  return (
    <div className={twMerge("w-full", containerClassName)}>
      <textarea
        className={cn(
          "max-h-[200px] min-h-[80px] rounded-lg w-full border outline-none hover:border-primary p-2",
          { "border-alert": showError },
        )}
        placeholder={placeholder}
        rows={4}
        {...field}
      />
      {showError && <span className="text-sm text-alert">{error}</span>}
    </div>
  );
};

export default TextArea;
