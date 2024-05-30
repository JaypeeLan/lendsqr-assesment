// Table.tsx

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

interface TableProps {
  data: Data[];
  headers: Array<{
    label: string;
    icon?: string;
  }>;
  onIconClick: (headerLabel: string) => void;
  onActionClick: (item: Data) => void;
}

const Table = ({ data, headers, onIconClick, onActionClick }: TableProps) => {
  const getHeaderValue = (item: Data, headerLabel: string) => {
    const propertyName = headerLabel.replace(/\s+/g, "_").toLowerCase();

    const normalizeObject = (obj: any) =>
      Object.keys(obj).reduce((acc, key) => {
        acc[key.toLowerCase()] = obj[key];
        return acc;
      }, {} as Record<string, any>);

    const normalizedPersonalInfo = normalizeObject(item.Personal_information);
    const normalizedEducationAndEmployment = normalizeObject(
      item.Education_and_Employment
    );
    const normalizedSocials = normalizeObject(item.Socials);
    const normalizedGuarantor = normalizeObject(item.Guarantor[0]);

    const searchNormalizedObject = (obj: Record<string, any>, key: string) => {
      const foundKey = Object.keys(obj).find((k) => k.includes(key));
      return foundKey ? obj[foundKey] : "";
    };

    return (
      searchNormalizedObject(normalizedPersonalInfo, propertyName) ||
      searchNormalizedObject(normalizedEducationAndEmployment, propertyName) ||
      searchNormalizedObject(normalizedSocials, propertyName) ||
      searchNormalizedObject(normalizedGuarantor, propertyName) ||
      ""
    );
  };

  return (
    <table className="custom-table">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>
              {header.label}
              {header.icon && (
                <span
                  className="header-icon"
                  onClick={() => onIconClick(header.label)}
                >
                  <img src="/icons/filter.svg" alt="filter" />
                </span>
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            {headers.map((header, index) => (
              <td key={index}>{getHeaderValue(item, header.label)}</td>
            ))}
            <td>
              <button onClick={() => onActionClick(item)}>
                <img src="/icons/options.svg" alt="options" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
