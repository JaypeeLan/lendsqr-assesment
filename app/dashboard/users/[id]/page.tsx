"use client";
import { CustomButton } from "@/components";
import { Data } from "@/types/data";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GeneralTab } from "./tabs";

type ParamsProp = {
  params: {
    id: string;
  };
};

const SingleUser = ({ params }: ParamsProp) => {
  const tabs = [
    "General Details",
    "Documents",
    "Bank Details",
    "Loans",
    "Savings",
    "App and System",
  ];
  const [activeTab, setActiveTab] = useState(0);
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

  // handle unlikely err
  if (!user) {
    return <p>USER NOT FOUND!</p>;
  }

  return (
    <>
      <div className="userDetails">
        <Link href={"/dashboard/users"} className="userDetails-backBtn">
          <img src="/icons/back-arrow.svg" alt="back" />
          <span>Back to users</span>
        </Link>
        {/* ---- */}
        <div className="userDetails-action">
          <h2 className="userDetails-title">User Details</h2>

          <div className="userDetails-action__btns">
            <CustomButton type="button" size="md">
              Blacklist user
            </CustomButton>
            <CustomButton type="button" size="md">
              Activate user
            </CustomButton>
          </div>
        </div>
        {/* ---- */}

        <div className="userDetails-profile">
          <div>
            {/* photo and id */}
            <div>
              <img
                src="/imgs/profile-photo.png"
                alt="profile photo"
                width={100}
                height={100}
              />
              <div>
                <p className="userDetails-title">
                  {user.Personal_information.full_name}
                </p>
                <span> LSQFf587g90</span>
              </div>
            </div>
            {/* user tier */}
            <div>
              <p>User's tier</p>
              <div>
                <img
                  src="/icons/filled-star.svg"
                  alt="star"
                  width={16}
                  height={16}
                />
                <img
                  src="/icons/empty-star.svg"
                  alt="star"
                  width={16}
                  height={16}
                />
                <img
                  src="/icons/empty-star.svg"
                  alt="star"
                  width={16}
                  height={16}
                />
              </div>
            </div>

            {/* user acct details */}
            <div>
              <p className="userDetails-title">₦200,000.00</p>
              <p>9912345678/Providus Bank</p>
            </div>
          </div>

          {/*  */}

          <div className="userDetails-tabs">
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={`tab ${index === activeTab ? "active" : ""}`}
                onClick={() => setActiveTab(index)}
              >
                {tab}
              </div>
            ))}
          </div>
        </div>

        {/* end user profile */}
      </div>

      {/* user tabs */}
      <div className="userDetails-info">
        {activeTab == 0 && <GeneralTab data={user} />}
      </div>
    </>
  );
};

export default SingleUser;
