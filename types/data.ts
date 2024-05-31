interface PersonalInformation {
  full_name: string;
  phone_number: string;
  email_address: string;
  bvn: string;
  gender: string;
  marital_status: string;
  children: string;
  type_of_residence: string;
  date_joined: string;
  username: string;
  organization: string;
  status: "active" | "inactive" | "pending" | "blacklisted";
  account_name: string;
  account_balance: string;
  tier: number;
}

interface EducationAndEmployment {
  level_of_education: string;
  employment_status: string;
  sector_of_employment: string;
  duration_of_employment: string;
  office_email: string;
  monthly_income: string;
  loan_repayment: string;
  date_joined: string;
  username: string;
  organization: string;
  status: "active" | "inactive" | "pending" | "blacklisted";
}

interface Socials {
  twitter: string;
  facebook: string;
  instagram: string;
  date_joined: string;
  username: string;
  organization: string;
  status: "active" | "inactive" | "pending" | "blacklisted";
}

interface Guarantor {
  full_name: string;
  phone_number: string;
  email_address: string;
  relationship: string;
  date_joined: string;
  username: string;
  organization: string;
  status: "active" | "inactive" | "pending" | "blacklisted";
}

export interface Data {
  _id: string;
  personal_information: PersonalInformation;
  education_and_employment: EducationAndEmployment;
  socials: Socials;
  guarantor: Guarantor[];
}
