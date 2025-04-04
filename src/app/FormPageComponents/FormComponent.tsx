"use client";

import { Form, FormikProvider, useFormik } from "formik";
import Cookies from "js-cookie";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { FC, ReactNode, useState } from "react";
import { toast } from "react-hot-toast";

import { candidatesApi } from "@/api/candidates";
import { RESPONSE_STATUS } from "@/api/types";
import Button from "@/components/Button";
import FormLabelWrapper from "@/components/FormLabelWrapper";
import { Option } from "@/components/Select/utils";
import { ShimmerBlock } from "@/components/Shimmer";
import TextArea from "@/components/TextArea";
import TextInput from "@/components/TextInput";

import { FormValue, INITIAL_VALUES, VALIDATION_SCHEMA } from "./utils";

const Select = dynamic(() => import("@/components/Select/Select"), {
  ssr: false,
  loading: () => <ShimmerBlock className="w-full h-[48px] pl-2" />,
});

interface Props {
  levelOptions: Option[];
  formLabel: ReactNode;
}

const FormComponent: FC<Props> = ({ levelOptions, formLabel }) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: VALIDATION_SCHEMA,
    onSubmit: (values: FormValue) => {
      setIsLoading(true);

      candidatesApi
        .sendAssignment({
          ...values,
          candidate_level: values.candidate_level.value,
        })
        .then(({ status, errors, message }) => {
          if (status === RESPONSE_STATUS.SUCCESS) {
            toast.success(message);

            Cookies.set(
              "USER_INFO",
              JSON.stringify({
                name: values.name,
                email: values.email,
                level: values.candidate_level.value,
              }),
              {
                expires: 1,
                path: "/thank-you",
              },
            );

            router.push("/thank-you");
          } else if (errors?.length) {
            errors.forEach((error) => {
              toast.error(error);
            });
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
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
            disabled={isLoading}
          >
            Submit Assigment
          </Button>
        </Form>
      </FormikProvider>
    </div>
  );
};

export default FormComponent;
