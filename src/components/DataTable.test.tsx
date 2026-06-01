import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { DataTable } from "./DataTable";
import type { Column } from "./DataTable";

type User = { id: number; name: string; role: string };

const data: User[] = [
  { id: 1, name: "Alice", role: "Engineer" },
  { id: 2, name: "Bob", role: "Designer" },
  { id: 3, name: "Carol", role: "PM" },
];

const columns: Column<User>[] = [
  { key: "id", header: "ID" },
  { key: "name", header: "Name" },
  { key: "role", header: "Role" },
];

describe("DataTable", () => {
  it("renders all rows", () => {
    render(<DataTable data={data} columns={columns} />);
    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.getByText("Bob")).toBeInTheDocument();
    expect(screen.getByText("Carol")).toBeInTheDocument();
  });

  it("renders column headers", () => {
    render(<DataTable data={data} columns={columns} />);
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Role")).toBeInTheDocument();
  });

  it("shows empty message when no data", () => {
    render(
      <DataTable data={[]} columns={columns} emptyMessage="Nothing here" />
    );
    expect(screen.getByText("Nothing here")).toBeInTheDocument();
  });

  it("filters rows based on search input", () => {
    render(<DataTable data={data} columns={columns} />);
    fireEvent.change(screen.getByPlaceholderText("Search..."), {
      target: { value: "Alice" },
    });
    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.queryByText("Bob")).not.toBeInTheDocument();
  });

  it("sorts by column when header clicked", () => {
    render(<DataTable data={data} columns={columns} />);
    fireEvent.click(screen.getByText("Name"));
    const rows = screen.getAllByRole("row");
    expect(rows[1]).toHaveTextContent("Alice");
  });

  it("hides search when searchable is false", () => {
    render(<DataTable data={data} columns={columns} searchable={false} />);
    expect(screen.queryByPlaceholderText("Search...")).not.toBeInTheDocument();
  });
});
