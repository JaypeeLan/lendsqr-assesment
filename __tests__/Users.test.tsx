import User from "@/app/dashboard/users/page";
import useFetchData from "@/hooks/useFetch";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

jest.mock("@/hooks/useFetch");

describe("User Component", () => {
  it("renders loading state initially", () => {
    (useFetchData as jest.Mock).mockReturnValue({
      data: null,
      isLoading: true,
      isError: false,
    });

    render(<User />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
    expect(screen.queryByText("Error fetching data")).not.toBeInTheDocument();
    expect(screen.queryByText("Users")).not.toBeInTheDocument();
  });

  it("renders error state when fetching fails", () => {
    (useFetchData as jest.Mock).mockReturnValue({
      data: null,
      isLoading: false,
      isError: true,
    });

    render(<User />);
    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    expect(screen.getByText("Error fetching data")).toBeInTheDocument();
    expect(screen.queryByText("Users")).not.toBeInTheDocument();
  });

  it("renders data correctly when fetching succeeds", () => {
    const mockData = [
      {
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
      },
    ];

    (useFetchData as jest.Mock).mockReturnValue({
      data: mockData,
      isLoading: false,
      isError: false,
    });

    render(<User />);
    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    expect(screen.queryByText("Error fetching data")).not.toBeInTheDocument();
    expect(screen.getByText("Users")).toBeInTheDocument();
    expect(screen.getByText("johndoe@example.com")).toBeInTheDocument();
    expect(screen.getByText("1234567890")).toBeInTheDocument();
  });
});
