"use client";

import useFetchData from "@/hooks/useFetch";

const Dashboard = () => {
  const { data, isLoading, isError } = useFetchData(
    "https://run.mocky.io/v3/22a8b085-4688-4974-8d78-7bcab02119f2"
  );

  // useEffect(() => {
  //   if (data) {
  //     console.log(data); // Log the fetched data
  //   }
  // }, [data]);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (isError) {
  //   return <div>Error fetching data</div>;
  // }

  return (
    <div>
      <p>Dashboard</p>
    </div>
  );
};

export default Dashboard;
