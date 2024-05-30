"use client";
import { Table } from "@/components";

import useFetchData from "@/hooks/useFetch";
import { Data } from "@/types/data";
import Image from "next/image";
import { useEffect } from "react";

const USERSINFO = [
  {
    icons: "users",
    data: "users",
    value: 2453,
  },
  {
    icons: "active-users",
    data: "active users",
    value: 2453,
  },
  {
    icons: "users-with-loans",
    data: "users with loan",
    value: 12453,
  },
  {
    icons: "users-with-savings",
    data: "users with savings",
    value: 102453,
  },
];

const User = () => {
  const tableHeaders = [
    { label: "organization", icon: "filter" },
    { label: "Username", icon: "filter" },
    { label: "email", icon: "filter" },
    { label: "Phone number", icon: "filter" },
    { label: "Date joined", icon: "filter" },
    { label: "Status", icon: "filter" },
  ];

  const { data, isLoading, isError } = useFetchData(
    "https://run.mocky.io/v3/a7c18c6d-e2f0-4626-a9d9-501915cfd50e"
  );

  useEffect(() => {
    if (data) {
      console.log(data); // Log the fetched data
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }
  const formattedNumber = (num: number) => new Intl.NumberFormat().format(num);
  const handleIconClick = (headerLabel: string) => {
    // Handle icon click based on header label
    console.log(`Icon clicked for header: ${headerLabel}`);
  };

  const handleActionClick = (item: Data) => {
    // You may need to cast `item` to `Data` if you need to access other properties

    console.log(`Action clicked for item with ID ${item._id}`);
  };

  return (
    <div className="usersPage">
      <h2 className="usersPage-title">Users</h2>
      <div className="usersPage-info">
        {USERSINFO.map((info) => (
          <div className="usersPage-info__card" key={info.data}>
            <Image
              src={`/icons/${info.icons}.svg`}
              alt={info.data}
              width={40}
              height={40}
            />

            <p>{info.data}</p>
            <p className="h2">{formattedNumber(info.value)}</p>
          </div>
        ))}
      </div>

      {/* ---- */}
      <div className="usersPage-table">
        <Table
          data={data}
          headers={tableHeaders}
          onIconClick={handleIconClick}
          onActionClick={handleActionClick}
        />
      </div>
    </div>
  );
};

export default User;
