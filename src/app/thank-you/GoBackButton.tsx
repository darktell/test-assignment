"use client";

import { useRouter } from "next/navigation";

import Button from "@/components/Button";

const GoBackButton = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.push("/");
  };

  return (
    <Button
      className="w-full md:w-auto md:mx-auto block md:mt-6 mt-4"
      onClick={handleGoBack}
    >
      Go Back
    </Button>
  );
};

export default GoBackButton;
