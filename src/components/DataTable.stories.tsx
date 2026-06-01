import type { Meta, StoryObj } from "@storybook/react";
import { DataTable } from "./DataTable";
import type { Column } from "./DataTable";

const meta: Meta = {
  title: "Components/DataTable",
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

type User = {
  id: number;
  name: string;
  role: string;
  status: string;
};

const users: User[] = [
  { id: 1, name: "Alice Johnson", role: "Engineer", status: "Active" },
  { id: 2, name: "Bob Smith", role: "Designer", status: "Inactive" },
  { id: 3, name: "Carol White", role: "PM", status: "Active" },
  { id: 4, name: "Dan Brown", role: "Engineer", status: "Active" },
  { id: 5, name: "Eve Davis", role: "Designer", status: "Active" },
  { id: 6, name: "Frank Miller", role: "Engineer", status: "Inactive" },
  { id: 7, name: "Grace Lee", role: "PM", status: "Active" },
];

const columns: Column<User>[] = [
  { key: "id", header: "ID", width: "60px" },
  { key: "name", header: "Name" },
  { key: "role", header: "Role" },
  {
    key: "status",
    header: "Status",
    render: (val) => (
      <span
        style={{
          padding: "2px 8px",
          borderRadius: "var(--radius-full)",
          fontSize: "var(--font-size-xs)",
          fontWeight: 600,
          backgroundColor:
            val === "Active"
              ? "var(--color-success)"
              : "var(--color-secondary)",
          color: val === "Active" ? "white" : "var(--color-text-primary)",
        }}
      >
        {String(val)}
      </span>
    ),
  },
];

export const Default: Story = {
  render: () => <DataTable data={users} columns={columns} pageSize={5} />,
};

export const WithPagination: Story = {
  render: () => <DataTable data={users} columns={columns} pageSize={3} />,
};

export const Empty: Story = {
  render: () => (
    <DataTable data={[]} columns={columns} emptyMessage="No users found" />
  ),
};

export const WithoutSearch: Story = {
  render: () => <DataTable data={users} columns={columns} searchable={false} />,
};
