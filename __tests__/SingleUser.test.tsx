import SingleUser from "@/app/dashboard/users/[id]/page";
import { render, screen } from "@testing-library/react";

describe("SingleUser Component", () => {
  it("renders user details correctly when user data is available", () => {
    // Mock user data
    const mockUser = {
      _id: "1",
      personal_information: {
        full_name: "John Doe",
        phone_number: "1234567890",
        email_address: "johndoe@example.com",
        bvn: "123456789",
        gender: "Male",
        marital_status: "Single",
        children: "None",
        type_of_residence: "Apartment",
        date_joined: "2023-01-01",
        username: "johndoe",
        organization: "Org1",
        status: "active",
        account_name: "John Doe",
        account_balance: "₦150000.00",
        tier: 1,
      },
      education_and_employment: {
        level_of_education: "Bachelors",
        employment_status: "Employed",
        sector_of_employment: "Tech",
        duration_of_employment: "2 years",
        office_email: "john.doe@org1.com",
        monthly_income: "₦200000.00",
        loan_repayment: "₦20000.00",
        date_joined: "2023-01-01",
        username: "johndoe",
        organization: "Org1",
        status: "active",
      },
      socials: {
        twitter: "@johndoe",
        facebook: "johndoe",
        instagram: "@johndoe",
        date_joined: "2023-01-01",
        username: "johndoe",
        organization: "Org1",
        status: "active",
      },
      guarantor: [
        {
          full_name: "Jane Smith",
          phone_number: "0987654321",
          email_address: "jane.smith@example.com",
          relationship: "Friend",
          date_joined: "2023-01-01",
          username: "janesmith",
          organization: "Org2",
          status: "active",
        },
      ],
    };

    // Mock localStorage
    localStorage.setItem("selectedUser", JSON.stringify(mockUser));

    render(<SingleUser params={{ id: "1" }} />);
    // Assertions
    expect(
      screen.getByText("John Doe", { selector: "span" })
    ).toBeInTheDocument();
  });

  it("displays 'USER NOT FOUND!' when user data is not available", () => {
    // Render the component without user data
    render(<SingleUser params={{ id: "2" }} />);

    expect(screen.getByText("USER NOT FOUND!")).toBeInTheDocument();
  });

  it("handles missing user data gracefully", () => {
    render(<SingleUser params={{ id: "3" }} />);

    // Assertions
    expect(screen.getByText("USER NOT FOUND!")).toBeInTheDocument();
  });
});
