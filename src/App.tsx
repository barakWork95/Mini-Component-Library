import { useTheme } from "./hooks/useTheme";
import { Button } from "./components/Button";
import { DataTable } from "./components/DataTable";
import type { Column } from "./components/DataTable";

// add this data outside the component:
const users = [
  { id: 1, name: "Alice Johnson", role: "Engineer", status: "Active" },
  { id: 2, name: "Bob Smith", role: "Designer", status: "Inactive" },
  { id: 3, name: "Carol White", role: "PM", status: "Active" },
  { id: 4, name: "Dan Brown", role: "Engineer", status: "Active" },
  { id: 5, name: "Eve Davis", role: "Designer", status: "Active" },
  { id: 6, name: "Frank Miller", role: "Engineer", status: "Inactive" },
  { id: 7, name: "Grace Lee", role: "PM", status: "Active" },
];

type User = (typeof users)[number];

const userColumns: Column<User>[] = [
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

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      style={{
        backgroundColor: "var(--color-bg)",
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
      <h2 style={{ color: "var(--color-text-primary)", margin: "2rem 0 1rem" }}>
        DataTable
      </h2>
      <DataTable data={users} columns={userColumns} pageSize={4} />

      <Button
        variant="ghost"
        onClick={toggleTheme}
        style={{ marginTop: "2rem" }}
      >
        Toggle {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </Button>
    </div>
  );
}

export default App;
