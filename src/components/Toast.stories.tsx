import type { Meta, StoryObj } from "@storybook/react";
import { ToastProvider } from "./ToastProvider";
import { useToast } from "../hooks/useToast";
import { Button } from "./Button";

const meta: Meta = {
  title: "Components/Toast",
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj;

function ToastDemo() {
  const { addToast } = useToast();
  return (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      <Button
        variant="success"
        onClick={() => addToast("Saved successfully!", "success")}
      >
        Success
      </Button>
      <Button
        variant="danger"
        onClick={() => addToast("Something went wrong", "error")}
      >
        Error
      </Button>
      <Button
        variant="warning"
        onClick={() => addToast("Please review this", "warning")}
      >
        Warning
      </Button>
      <Button
        variant="info"
        onClick={() => addToast("New update available", "info")}
      >
        Info
      </Button>
    </div>
  );
}

export const AllVariants: Story = {
  render: () => <ToastDemo />,
};

export const Persistent: Story = {
  render: () => {
    function PersistentDemo() {
      const { addToast } = useToast();
      return (
        <Button
          onClick={() => addToast("This stays until dismissed", "info", 0)}
        >
          Show Persistent Toast
        </Button>
      );
    }
    return (
      <ToastProvider>
        <PersistentDemo />
      </ToastProvider>
    );
  },
};
