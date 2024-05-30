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
  Status: "active" | " inactive" | "pending" | "blacklisted";
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
