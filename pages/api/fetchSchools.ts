import { useQuery } from "@tanstack/react-query";

async function fetchSchools(query: string) {
  const response = await fetch(
    `http://universities.hipolabs.com/search?name=${query}`
  );
  const data = await response.json();
  return data ?? [];
}

export const useFetchSchools = (query: string) => {
  return useQuery(["schools", query], () => fetchSchools(query));
};
