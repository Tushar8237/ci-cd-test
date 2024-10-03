import { render, screen, waitFor } from "@testing-library/react";
import UserTable from "./UserTable";
import { vi } from "vitest";
import { act } from "react";
// Mocking the fetch API
global.fetch = vi.fn();

describe("UserTable Component", () => {
  beforeEach(() => {
    fetch.mockClear(); // Clear any previous mock calls
  });

//   test("should display loading message initially", async () => {
//     await act(async () => {
//       render(<UserTable />);
//     });

//     const loadingMessage = await screen.findByText(/loading users/i);
//     expect(loadingMessage).to.exist; // Chai assertion
//   });

  it("should display users after successful fetch", async () => {
    const mockUsers = [
      { id: 1, name: "John Doe", email: "john@example.com" },
      { id: 2, name: "Jane Doe", email: "jane@example.com" },
    ];

    // Mocking the fetch response
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockUsers,
    });

    // Wrap the render in act
    await act(async () => {
      render(<UserTable />);
    });

    // Wait for the user data to be fetched and rendered
    await waitFor(() => expect(screen.getByText(/john doe/i)).to.exist);
    expect(screen.getByText(/jane doe/i)).to.exist;
    expect(screen.getByText("john@example.com")).to.exist;
    expect(screen.getByText("jane@example.com")).to.exist;
  });

  it("should display error message when fetch fails", async () => {
    // Mocking a fetch failure
    fetch.mockResolvedValueOnce({
      ok: false,
    });

    // Wrap the render in act
    await act(async () => {
      render(<UserTable />);
    });

    // Wait for the error message to be displayed
    await waitFor(
      () => expect(screen.getByText(/failed to fetch users/i)).to.exist
    );
  });
});
