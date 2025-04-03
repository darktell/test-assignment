"use client";
import { GroupBase, StylesConfig } from "react-select";

export interface Option {
  value: string;
  label: string;
}

export const getStyles = (
  showError = false,
): StylesConfig<Option, false, GroupBase<Option>> => ({
  control: (provided) => ({
    ...provided,
    backgroundColor: "transparent",
    color: "black",
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: "8px",
    boxShadow: "none",
    outline: "none",
    cursor: "pointer",
    width: "100%",
    height: "48px",
    borderColor: showError ? "#C80000" : "black",

    "&:hover": {
      borderColor: "#0da487",
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "gray",
    padding: "3px 0",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "black",
    padding: "3px 0",
  }),
  multiValue: (provided) => ({
    ...provided,
    color: "white",
    backgroundColor: "#0da487",
    borderRadius: "4px",
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: "white",
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: "8px 8px 8px 4px",
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "white",
  }),
  option: (provided) => ({
    ...provided,
    backgroundColor: "white",
    color: "black",
    cursor: "pointer",
    "&:hover": {
      color: "#0da487",
    },
    "&:active": {
      backgroundColor: "transparent",
    },
  }),
});
