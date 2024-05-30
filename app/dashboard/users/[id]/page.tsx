"use client";
import { CustomButton } from "@/components";
import { Data } from "@/types/data";
import { useEffect, useState } from "react";

type ParamsProp = {
  params: {
    id: string;
  };
};

const SingleUser = ({ params }: ParamsProp) => {
  const [user, setUser] = useState<Data | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("selectedUser");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      if (parsedUser._id === params.id) {
        setUser(parsedUser);
      }
    }
  }, [params.id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="details">
      <div className="">
        <img src="/icons/back-arrow.svg" alt="back" />
        <span>Back to users</span>
      </div>
      {/* ---- */}
      <div>
        <h2 className="usersPage-title">User Details</h2>

        <div className="actionBtns">
          <CustomButton type="button">Blacklist user</CustomButton>
          <CustomButton type="button">Activate user</CustomButton>
        </div>
      </div>
      {/* ---- */}
      {/* 
      <div>
        <p>{user.Personal_information.full_name}</p>
        <p>{user.Personal_information.phone_number}</p>
        <p>{user.Personal_information.email_address}</p>
        <p>{user.Personal_information.bnv}</p>
        <p>{user.Personal_information.gender}</p>
        <p>{user.Personal_information.marital_status}</p>
        <p>{user.Personal_information.children}</p>
        <p>{user.Personal_information.type_of_residence}</p>
      </div> */}
    </div>
  );
};

export default SingleUser;
