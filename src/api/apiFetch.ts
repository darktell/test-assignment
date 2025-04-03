export const BASE_URL = "https://tools.qa.ale.ai/api/tools/candidates";

export const apiFetch = async <T, K>(
  path: string,
  {
    method,
    cache,
    body,
  }: {
    method?: "GET" | "POST";
    cache?: "no-cache" | "force-cache";
    body?: K;
  },
): Promise<T | undefined> => {
  const options = {
    method,
    cache: cache || "force-cache",
    headers: {
      accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  };

  if (!!body) {
    options["body"] = JSON.stringify(body);
  }

  try {
    const res = await fetch(path, options);
    return await res.json();
  } catch (e) {}
};
