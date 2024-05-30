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
        { title: "Full Name", value: data?.Personal_information?.full_name },
        {
          title: "Phone Number",
          value: data?.Personal_information?.phone_number,
        },
        {
          title: "Email Address",
          value: data?.Personal_information?.email_address,
        },
        { title: "Bvn", value: data?.Personal_information?.bnv },
        { title: "Gender", value: data?.Personal_information?.gender },
        {
          title: "Marital status",
          value: data?.Personal_information?.marital_status,
        },
        {
          title: "Children",
          value: data?.Personal_information?.children,
        },
        {
          title: "loan repayment",
          value: "40,000",
        },
      ],
    },
    {
      title: "Education and Employment",
      info: [
        {
          title: "Level of education",
          value: data?.Education_and_Employment?.level_of_education,
        },
        {
          title: "Employment status",
          value: data?.Education_and_Employment?.employment_status,
        },
        {
          title: "Sector of employment",
          value: data?.Education_and_Employment?.sector_of_employment,
        },
        {
          title: "Duration of employment",
          value: data?.Education_and_Employment?.Duration_of_employment,
        },
        {
          title: "Office email",
          value: data?.Education_and_Employment?.office_email,
        },
        {
          title: "Monthly income",
          value: "₦200,000.00 - ₦400,000.00",
        },
        {
          title: "Loan repayment",
          value: "40,000",
        },
      ],
    },
    {
      title: "Socials",
      info: [
        {
          title: "Twitter",
          value: data?.Socials.Twitter,
        },
        {
          title: "Instagram",
          value: data?.Socials.Instagram,
        },
        {
          title: "Facebook",
          value: data?.Socials.Facebook,
        },
      ],
    },
    ...data.Guarantor.map((guarantor, index) => ({
      title: `Guarantor ${index + 1}`,
      info: [
        { title: "Full Name", value: guarantor.full_name },
        { title: "Phone Number", value: guarantor.Phone_number },
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
