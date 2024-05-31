import useSWR from "swr";

const useFetchData = (url: string) => {
  const { data, error } = useSWR(url, async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  });

  return {
    data,
    isLoading: !data && !error,
    isError: error,
  };
};

export default useFetchData;
