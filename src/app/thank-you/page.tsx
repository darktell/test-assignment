import { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Thank you!",
  description: "Thank you for submission page",
};

const ThankYouPage = async () => {
  const cookieStore = await cookies();
  let userInfo;

  try {
    userInfo = JSON.parse(cookieStore.get("USER_INFO")?.value || "");
  } catch (error) {
    console.error("Ошибка парсинга куки USER_INFO:", error);
    redirect("/");
  }

  if (!userInfo) {
    redirect("/"); // ✅ Редирект, если куки пустые или невалидные
  }

  return (
    <div className="min-h-dvh flex items-center justify-center w-full">
      thank you
    </div>
  );
};

export default ThankYouPage;
