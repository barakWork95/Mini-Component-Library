import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Modal } from "./Modal";
import { Button } from "./Button";
import { Input } from "./Input";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Basic: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal open={open} onClose={() => setOpen(false)} title="Basic Modal">
          <p style={{ color: "var(--color-text-primary)" }}>
            Press ESC or click outside to close.
          </p>
        </Modal>
      </>
    );
  },
};

export const WithForm: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Form Modal</Button>
        <Modal open={open} onClose={() => setOpen(false)} title="Edit Profile">
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <Input label="Name" placeholder="Your name" />
            <Input label="Email" placeholder="you@example.com" />
            <div
              style={{
                display: "flex",
                gap: "8px",
                justifyContent: "flex-end",
              }}
            >
              <Button variant="ghost" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setOpen(false)}>Save</Button>
            </div>
          </div>
        </Modal>
      </>
    );
  },
};

export const SmallSize: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Small Modal</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Confirm"
          size="sm"
        >
          <p style={{ color: "var(--color-text-primary)" }}>Are you sure?</p>
          <div style={{ display: "flex", gap: "8px", marginTop: "1rem" }}>
            <Button variant="danger" size="sm" onClick={() => setOpen(false)}>
              Delete
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setOpen(false)}>
              Cancel
            </Button>
          </div>
        </Modal>
      </>
    );
  },
};

export const LargeSize: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Large Modal</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Large Modal"
          size="lg"
        >
          <p style={{ color: "var(--color-text-primary)" }}>
            This is a large modal with more space for content.
          </p>
        </Modal>
      </>
    );
  },
};
