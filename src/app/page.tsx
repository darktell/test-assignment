import type { Metadata } from "next";

import { candidatesApi } from "@/api/candidates";
import FormLabel from "@/app/FormPageComponents/FormLabel";

import FormComponent from "./FormPageComponents/FormComponent";

export const metadata: Metadata = {
  title: "Submission form",
  description: "Submission form for new candidate",
};

const IndexPage = async () => {
  const levelsData = await candidatesApi.fetchLevels();

  const levelOptions =
    levelsData?.levels?.map((name: string) => ({
      label: name,
      value: name,
    })) || [];

  return (
    <div className="min-h-dvh flex items-center justify-center w-full">
      <FormComponent levelOptions={levelOptions} formLabel={<FormLabel />} />
    </div>
  );
};

export default IndexPage;
