import { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import GoBackButton from "@/app/thank-you/GoBackButton";

export const metadata: Metadata = {
  title: "Thank you!",
  description: "Thank you for submission page",
};

interface USER_COOKIE {
  name?: string;
  email?: string;
  level?: string;
}

const ThankYouPage = async () => {
  const cookieStore = await cookies();
  let userInfo: USER_COOKIE;

  try {
    userInfo = JSON.parse(cookieStore.get("USER_INFO")?.value || "");
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("error parsing USER_INFO:", error);
    redirect("/");
  }

  const { level, name, email } = userInfo || {};

  if (!level || !name || !email) {
    redirect("/");
  }

  return (
    <div className="min-h-dvh flex flex-col gap-6 items-center justify-center w-full">
      <div className="md:rounded-xl bg-white p-4 md:p-8 w-full md:max-w-[600px]">
        <p className="text-center">
          <span>
            {name}, thank you for submitting your assignment! At the {level}{" "}
            level, we will send a confirmation email to your email address:{" "}
            {email}.
          </span>
        </p>
        <GoBackButton />
      </div>
    </div>
  );
};

export default ThankYouPage;
