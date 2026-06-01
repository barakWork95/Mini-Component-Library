import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from "./Input";

describe("Input", () => {
  it("renders placeholder", () => {
    render(<Input placeholder="Type here..." />);
    expect(screen.getByPlaceholderText("Type here...")).toBeInTheDocument();
  });

  it("renders label", () => {
    render(<Input label="Email" />);
    expect(screen.getByText("Email")).toBeInTheDocument();
  });

  it("renders helper text", () => {
    render(<Input helperText="Must be 8 characters" />);
    expect(screen.getByText("Must be 8 characters")).toBeInTheDocument();
  });

  it("renders error message instead of helper text", () => {
    render(<Input helperText="Helper" error="This is required" />);
    expect(screen.getByText("This is required")).toBeInTheDocument();
    expect(screen.queryByText("Helper")).not.toBeInTheDocument();
  });

  it("is disabled when disabled prop is passed", () => {
    render(<Input disabled />);
    expect(screen.getByRole("textbox")).toBeDisabled();
  });

  it("calls onChange when typing", () => {
    const onChange = vi.fn();
    render(<Input onChange={onChange} />);
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "hello" },
    });
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it("renders controlled value", () => {
    render(<Input value="controlled" onChange={vi.fn()} />);
    expect(screen.getByDisplayValue("controlled")).toBeInTheDocument();
  });
});
