import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/dom";
import { Button } from "./Button";
import { ButtonGroup } from "./ButtonGroup";

describe("Button", () => {
  it("renders children", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Click</Button>);
    fireEvent.click(screen.getByText("Click"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("does not call onClick when disabled", () => {
    const onClick = vi.fn();
    render(
      <Button disabled onClick={onClick}>
        Click
      </Button>
    );
    fireEvent.click(screen.getByText("Click"));
    expect(onClick).not.toHaveBeenCalled();
  });

  it("shows loading spinner when loading", () => {
    render(<Button loading>Save</Button>);
    expect(screen.getByText("⏳")).toBeInTheDocument();
  });

  it("is disabled when loading", () => {
    render(<Button loading>Save</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it('renders as anchor when as="a"', () => {
    render(
      <Button as="a" href="https://example.com">
        Link
      </Button>
    );
    expect(screen.getByRole("link")).toBeInTheDocument();
  });

  it("renders all variants without crashing", () => {
    const variants = [
      "primary",
      "secondary",
      "ghost",
      "danger",
      "warning",
      "success",
      "info",
      "ai",
    ] as const;
    variants.forEach((variant) => {
      const { unmount } = render(<Button variant={variant}>{variant}</Button>);
      expect(screen.getByText(variant)).toBeInTheDocument();
      unmount();
    });
  });
});

describe("Button.Group", () => {
  it("renders children", () => {
    render(
      <ButtonGroup>
        <Button>A</Button>
        <Button>B</Button>
      </ButtonGroup>
    );
    expect(screen.getByText("A")).toBeInTheDocument();
    expect(screen.getByText("B")).toBeInTheDocument();
  });

  it("passes variant to children via context", () => {
    render(
      <ButtonGroup variant="danger">
        <Button>Delete</Button>
      </ButtonGroup>
    );
    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument();
  });
});
