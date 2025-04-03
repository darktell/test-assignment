"use client";

import { Form, FormikProvider, useFormik } from "formik";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { FC, ReactNode } from "react";
import * as Yup from "yup";

import Button from "@/components/Button";
import FormLabelWrapper from "@/components/FormLabelWrapper";
import { Option } from "@/components/Select/utils";
import { ShimmerBlock } from "@/components/Shimmer";
import TextArea from "@/components/TextArea";
import TextInput from "@/components/TextInput";

const Select = dynamic(() => import("@/components/Select/Select"), {
  ssr: false,
  loading: () => <ShimmerBlock className="w-full h-[48px] pl-2" />,
});

const VALIDATION_SCHEMA = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  assignment_description: Yup.string().required("Required"),
  github_repo_url: Yup.string()
    .url("Please enter a valid URL (e.g. https://example.com)")
    .required("Required"),
  candidate_level: Yup.object().required("Required"),
});

const INITIAL_VALUES = {
  name: "",
  email: "",
  assignment_description: "",
  github_repo_url: "",
  candidate_level: undefined,
};

interface Props {
  levelOptions: Option[];
  formLabel: ReactNode;
}

interface FormValue {
  name: string;
  email: string;
  assignment_description: string;
  github_repo_url: string;
  candidate_level: Option[];
}

const FormComponent: FC<Props> = ({ levelOptions, formLabel }) => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: VALIDATION_SCHEMA,
    onSubmit: (values: FormValue) => {
      console.log(values);
      //router.push("/thank-you");
    },
  });

  return (
    <div className="md:rounded-xl bg-white p-4 md:p-8 w-full md:max-w-[700px]">
      {formLabel}

      <FormikProvider value={formik}>
        <Form className="space-y-4" onSubmit={formik.handleSubmit}>
          <FormLabelWrapper label="Name" isRequired>
            <TextInput name="name" />
          </FormLabelWrapper>

          <FormLabelWrapper label="Email" isRequired>
            <TextInput name="email" />
          </FormLabelWrapper>

          <FormLabelWrapper label="Assignment Description" isRequired>
            <TextArea name="assignment_description" />
          </FormLabelWrapper>

          <FormLabelWrapper label="GitHub Repository URL" isRequired>
            <TextInput name="github_repo_url" />
          </FormLabelWrapper>

          <FormLabelWrapper label="Candidate  Level" isRequired>
            <Select
              options={levelOptions}
              name="candidate_level"
              placeholder="Select level"
            />
          </FormLabelWrapper>

          <Button
            className="w-full md:w-auto md:mx-auto block md:mt-6 mt-4"
            type="submit"
          >
            Submit Assigment
          </Button>
        </Form>
      </FormikProvider>
    </div>
  );
};

export default FormComponent;
