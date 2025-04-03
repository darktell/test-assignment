"use client";

import { useField } from "formik";
import { FC, useCallback } from "react";
import ReactSelect, { Options, SingleValue } from "react-select";

import { getStyles, Option } from "./utils";

interface Props {
  name: string;
  placeholder?: string;
  options: Options<Option>;
  className?: string;
  isDisabled?: boolean;
}

const Select: FC<Props> = ({ name, options, isDisabled, placeholder }) => {
  const [{ value }, { error, touched }, { setValue }] = useField(name);

  const onChange = useCallback(
    (option: SingleValue<Option | Option[]>) => {
      setValue(option);
    },
    [setValue],
  );
  const isApiError = !options?.length;
  const showError = Boolean(touched && error) || !options?.length;

  return (
    <div>
      <ReactSelect
        value={value}
        styles={getStyles(showError)}
        options={options}
        placeholder={isApiError ? "No options" : placeholder}
        onChange={onChange}
        isDisabled={isDisabled || isApiError}
      />
      {showError && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
};

export default Select;
