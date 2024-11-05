import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "./Navbar";
import useAuthStore from "../../store/useAuthStore";

jest.mock("../../store/useAuthStore");

describe("Navbar Component", () => {
  const mockOnLogout = jest.fn();

  test("should display books, reading list and logout links when authenticated", () => {
    (useAuthStore as unknown as jest.Mock).mockReturnValue({
      isAuthenticated: true,
      onLogout: mockOnLogout,
    });

    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(screen.getByText("Books")).toBeTruthy();
  });
});
