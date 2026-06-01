# Component Library — Mini Design System

A production-ready React component library built with TypeScript, Tailwind CSS, and CSS Variables. Features a full theming system, compound components, polymorphic `as` prop, and Storybook documentation.

## Tech Stack

![React](https://img.shields.io/badge/React-18-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-CSS-teal) ![Storybook](https://img.shields.io/badge/Storybook-10-ff4785) ![Vitest](https://img.shields.io/badge/Vitest-tested-green)

## Installation

```bash
npm install component-library
```

## Quick Start

```tsx
import { ThemeProvider, Button, Input, Modal } from "component-library";

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <Button variant="primary">Hello World</Button>
    </ThemeProvider>
  );
}
```

## Components

### Button

Supports 8 variants, 3 sizes, loading state, polymorphic `as` prop, and `Button.Group`.

```tsx
// Variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>
<Button variant="warning">Warning</Button>
<Button variant="success">Success</Button>
<Button variant="info">Info</Button>
<Button variant="ai">✨ AI</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// States
<Button loading>Saving...</Button>
<Button disabled>Disabled</Button>

// Polymorphic — renders as <a> with full TypeScript support
<Button as="a" href="https://example.com" target="_blank">
  Link Button
</Button>

// Group — children inherit variant and size
<Button.Group variant="secondary" size="sm">
  <Button>Left</Button>
  <Button>Center</Button>
  <Button>Right</Button>
</Button.Group>
```

### Input

Controlled/uncontrolled input with label, helper text, and error state.

```tsx
<Input label="Email" placeholder="you@example.com" />
<Input label="Username" helperText="At least 3 characters" />
<Input label="Password" error="Password is required" />
<Input label="Disabled" disabled />

// Controlled
const [value, setValue] = useState('')
<Input
  label="Search"
  value={value}
  onChange={(e) => setValue(e.target.value)}
  helperText={`${value.length} characters`}
/>
```

### Select

Compound component pattern with `Select.Option`.

```tsx
<Select label="Framework" onChange={(value) => console.log(value)}>
  <Select.Option value="react">React</Select.Option>
  <Select.Option value="vue">Vue</Select.Option>
  <Select.Option value="svelte" disabled>
    Svelte (coming soon)
  </Select.Option>
</Select>
```

### Modal

Portal-based modal with focus trap, ESC to close, and backdrop click.

```tsx
const [open, setOpen] = useState(false)

<Button onClick={() => setOpen(true)}>Open</Button>

<Modal open={open} onClose={() => setOpen(false)} title="Edit Profile" size="md">
  <Input label="Name" placeholder="Your name" />
  <Button onClick={() => setOpen(false)}>Save</Button>
</Modal>
```

### Toast

Context-based notification system with auto-dismiss.

```tsx
// Wrap your app
<ToastProvider>
  <App />
</ToastProvider>;

// Use anywhere
const { addToast } = useToast();

addToast("Saved!", "success");
addToast("Something went wrong", "error");
addToast("Please review", "warning");
addToast("Update available", "info");

// Persistent (no auto-dismiss)
addToast("This stays", "info", 0);
```

### DataTable

Generic, fully typed table with sorting, filtering, and pagination.

```tsx
type User = { id: number; name: string; role: string }

const columns: Column<User>[] = [
  { key: 'id', header: 'ID' },
  { key: 'name', header: 'Name' },
  { key: 'role', header: 'Role' },
  {
    key: 'status',
    header: 'Status',
    render: (val) => <Badge>{String(val)}</Badge>
  }
]

<DataTable
  data={users}
  columns={columns}
  pageSize={10}
  searchable
/>
```

## Theming

All components use CSS Variables — override them globally or per-component.

```tsx
// Dark/Light mode toggle
const { theme, toggleTheme } = useTheme()
<Button onClick={toggleTheme}>Toggle {theme}</Button>

// Custom theme overrides
<ThemeProvider
  defaultTheme="light"
  overrides={{ primary: '#ff6b6b', bg: '#1a1a2e' }}
>
  <App />
</ThemeProvider>
```

### CSS Variables

```css
:root {
  --color-primary: #6366f1;
  --color-danger: #ef4444;
  --color-success: #22c55e;
  --color-warning: #f59e0b;
  --color-bg: #ffffff;
  --color-surface: #f8fafc;
  --color-border: #e2e8f0;
  --radius-md: 8px;
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07);
}
```

## Development

```bash
# Start dev server
npm run dev

# Run Storybook
npm run storybook

# Run tests
npm test

# Build library
npm run build:lib
```

## Architecture Decisions

- **CSS Variables over Tailwind config** — runtime theming without rebuild
- **Compound components** — `Button.Group`, `Select.Option` for ergonomic APIs
- **Polymorphic `as` prop** — render any HTML element with full TypeScript inference
- **`forwardRef` on all components** — integrates with form libraries
- **Context-based state** — Toast and ButtonGroup share state without prop drilling
