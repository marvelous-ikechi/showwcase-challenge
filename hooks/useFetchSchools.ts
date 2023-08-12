import { useQuery } from "@tanstack/react-query";

async function fetchSchools(query: string) {
  const response = await fetch(
    `/api/fetchSchools?name=${encodeURIComponent(query)}`
  );
  const data = await response.json();
  return data ?? [];
}

export const useFetchSchools = (query: string) => {
  return useQuery(["schools", query], () => fetchSchools(query));
};
