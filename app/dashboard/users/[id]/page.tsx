"use client";
import useFetchData from "@/hooks/useFetch";
import { useEffect } from "react";

// Define TypeScript types for the data
interface PersonalInformation {
  full_name: string;
  phone_number: string;
  email_address: string;
  bnv: string;
  gender: string;
  marital_status: string;
  children: string;
  type_of_residence: string;
  Date_joined: string;
  Username: string;
  Organization: string;
  Status: string;
}

interface EducationAndEmployment {
  level_of_education: string;
  employment_status: string;
  sector_of_employment: string;
  Duration_of_employment: string;
  office_email: string;
  Monthly_income: string;
  loan_repayment: string;
}

interface Socials {
  Twitter: string;
  Facebook: string;
  Instagram: string;
}

interface Guarantor {
  full_name: string;
  Phone_number: string;
  email_address: string;
  relationship: string;
}

export interface Data {
  _id: string;
  Personal_information: PersonalInformation;
  Education_and_Employment: EducationAndEmployment;
  Socials: Socials;
  Guarantor: Guarantor[];
}

type ParamsProp = {
  params: {
    id: string;
  };
};

const SingleUser = ({ params }: ParamsProp) => {
  const { data, isLoading, isError } = useFetchData(
    "https://run.mocky.io/v3/a7c18c6d-e2f0-4626-a9d9-501915cfd50e"
  );

  useEffect(() => {
    if (data) {
      console.log(data); // Log the fetched data
      const singleItem = data.find((item: Data) => item._id === params.id); // Modify the condition as needed
      console.log(singleItem);
    }
  }, [data, params.id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return <div>SingleUser</div>;
};

export default SingleUser;
