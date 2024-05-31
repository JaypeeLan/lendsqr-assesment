import SingleUser from "@/app/dashboard/users/[id]/page";
import { render, screen } from "@testing-library/react";

describe("SingleUser Component", () => {
  it("renders user details correctly when user data is available", () => {
    // Mock user data
    const mockUser = {
      _id: "1",
      Personal_information: {
        full_name: "John Doe",
        phone_number: "1234567890",
        email_address: "johndoe@example.com",
        bnv: "123456789",
        gender: "Male",
        marital_status: "Single",
        children: "None",
        type_of_residence: "Apartment",
        Date_joined: "2023-01-01",
        Username: "johndoe",
        Organization: "Org1",
        Status: "active",
      },
      Education_and_Employment: {
        level_of_education: "Bachelors",
        employment_status: "Employed",
        sector_of_employment: "Tech",
        Duration_of_employment: "2 years",
        office_email: "john.doe@org1.com",
        Monthly_income: "2000",
        loan_repayment: "200",
      },
      Socials: {
        Twitter: "@johndoe",
        Facebook: "johndoe",
        Instagram: "@johndoe",
      },
      Guarantor: [
        {
          full_name: "Jane Smith",
          Phone_number: "0987654321",
          email_address: "jane.smith@example.com",
          relationship: "Friend",
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
