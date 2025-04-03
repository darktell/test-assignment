import * as Yup from "yup";

import { Option } from "@/components/Select/utils";

export const VALIDATION_SCHEMA = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  assignment_description: Yup.string().required("Required"),
  github_repo_url: Yup.string()
    .url("Please enter a valid URL (e.g. https://example.com)")
    .required("Required"),
  candidate_level: Yup.object().required("Required"),
});

export const INITIAL_VALUES = {
  name: "",
  email: "",
  assignment_description: "",
  github_repo_url: "",
  candidate_level: undefined,
};

export interface FormValue {
  name: string;
  email: string;
  assignment_description: string;
  github_repo_url: string;
  candidate_level: Option;
}
