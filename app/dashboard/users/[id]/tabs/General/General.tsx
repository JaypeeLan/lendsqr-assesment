import { formatCurrency } from "@/helpers/transformNumber";
import { Data } from "@/types/data";

const Item = ({ title, value }: { title: string; value: string }) => {
  return (
    <div className="display-card">
      <p>{title}</p>
      <span>{value}</span>
    </div>
  );
};

const General = ({ data }: { data: Data }) => {
  const USER_GENERAL_INFO = [
    {
      title: "Personal Information",
      info: [
        { title: "Full Name", value: data?.personal_information?.full_name },
        {
          title: "Phone Number",
          value: data?.personal_information?.phone_number,
        },
        {
          title: "Email Address",
          value: data?.personal_information?.email_address,
        },
        { title: "Bvn", value: data?.personal_information?.bvn },
        { title: "Gender", value: data?.personal_information?.gender },
        {
          title: "Marital status",
          value: data?.personal_information?.marital_status,
        },
        {
          title: "Children",
          value: data?.personal_information?.children,
        },
      ],
    },
    {
      title: "Education and Employment",
      info: [
        {
          title: "Level of education",
          value: data?.education_and_employment?.level_of_education,
        },
        {
          title: "Employment status",
          value: data?.education_and_employment?.employment_status,
        },
        {
          title: "Sector of employment",
          value: data?.education_and_employment?.sector_of_employment,
        },
        {
          title: "Duration of employment",
          value: data?.education_and_employment?.duration_of_employment,
        },
        {
          title: "Office email",
          value: data?.education_and_employment?.office_email,
        },
        {
          title: "Monthly income",
          value: data?.education_and_employment?.monthly_income
            ? formatCurrency(data?.education_and_employment?.monthly_income)
            : "",
        },
        {
          title: "Loan repayment",
          value: data?.education_and_employment?.loan_repayment
            ? formatCurrency(data?.education_and_employment?.loan_repayment)
            : "",
        },
      ],
    },
    {
      title: "Socials",
      info: [
        {
          title: "Twitter",
          value: data?.socials.twitter,
        },
        {
          title: "Instagram",
          value: data?.socials.instagram,
        },
        {
          title: "Facebook",
          value: data?.socials.facebook,
        },
      ],
    },
    ...data.guarantor.map((guarantor, index) => ({
      title: `Guarantor ${index + 1}`,
      info: [
        { title: "Full Name", value: guarantor.full_name },
        { title: "Phone Number", value: guarantor.phone_number },
        { title: "Email Address", value: guarantor.email_address },
        { title: "Relationship", value: guarantor.relationship },
      ],
    })),
  ];

  return (
    <div className="general">
      {USER_GENERAL_INFO.map((info) => (
        <div className="general-personal" key={info.title}>
          <h2 className="general-personal__title">{info.title}</h2>
          <div className="general-personal__card">
            {info.info.map((info) => (
              <Item key={info.title} title={info.title} value={info.value} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default General;
