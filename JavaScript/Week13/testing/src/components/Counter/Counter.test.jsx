import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { test, expect, describe, it } from "vitest";
import user from "@testing-library/user-event";

import Counter from "./Counter";

describe("Counter", () => {
  render(<Counter />);
  it("Counter renders correctly", async () => {
    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();

    const incrementButton = screen.getByRole("button", { name: "Increment" });
    expect(incrementButton).toBeInTheDocument();

    const countElement2 = screen.getByRole("heading");
    expect(countElement2).toHaveTextContent("0");

    const incrementButton2 = screen.getByRole("button", { name: "Increment" });
    await user.click(incrementButton2);
    await user.click(incrementButton2);
    expect(countElement2).toHaveTextContent("2");

    const amountInput = screen.getByRole("spinbutton");
    await user.type(amountInput, "10");
    expect(amountInput).toHaveValue(10);
    const setButton = screen.getByRole("button", { name: "Set" });
    await user.click(setButton);
    expect(countElement2).toHaveTextContent("10");
  });

  it("Tabbing is done properly or not", async () => {
    await user.tab();
    const amountInput = screen.getByRole("spinbutton");
    const setButton = screen.getByRole("button", { name: "Set" });
    const incrementButton3 = screen.getByRole("button", { name: "Increment" });
    await user.tab();
    expect(incrementButton3).toHaveFocus();
    await user.tab();
    expect(amountInput).toHaveFocus();
    await user.tab();
    expect(setButton).toHaveFocus();
  });
});
