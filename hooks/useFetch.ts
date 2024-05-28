import { useEffect } from "react";
import useSWR from "swr";

const useFetchData = (url: string) => {
  const { data, error } = useSWR(url, async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  });

  useEffect(() => {
    if (error) {
      console.error("Error fetching data:", error);
    }
  }, [error]);

  return {
    data,
    isLoading: !data && !error,
    isError: error,
  };
};

export default useFetchData;
