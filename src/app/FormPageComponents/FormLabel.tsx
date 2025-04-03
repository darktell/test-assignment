import NextImage from "next/image";
import { FC } from "react";

const FormLabel: FC = () => (
  <div className="flex gap-4 justify-center mb-10 mt-6">
    <div className="w-[50px] sm:w-[100px] relative">
      <NextImage src="images/next.svg" loading="eager" alt="Next logo" fill />
    </div>

    <p className="text-xl font-bold">Assignment submission</p>
  </div>
);

export default FormLabel;
