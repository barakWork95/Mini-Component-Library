import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { ButtonGroup } from "./ButtonGroup";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "ghost",
        "danger",
        "warning",
        "success",
        "info",
        "ai",
      ],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { children: "Primary Button", variant: "primary" },
};

export const Secondary: Story = {
  args: { children: "Secondary Button", variant: "secondary" },
};

export const Ghost: Story = {
  args: { children: "Ghost Button", variant: "ghost" },
};

export const Danger: Story = {
  args: { children: "Danger Button", variant: "danger" },
};

export const Warning: Story = {
  args: { children: "Warning Button", variant: "warning" },
};

export const Success: Story = {
  args: { children: "Success Button", variant: "success" },
};

export const AI: Story = {
  args: { children: "✨ Generate with AI", variant: "ai" },
};

export const Loading: Story = {
  args: { children: "Saving...", loading: true },
};

export const Disabled: Story = {
  args: { children: "Disabled", disabled: true },
};

export const AsLink: Story = {
  args: {
    as: "a",
    href: "https://google.com",
    target: "_blank",
    children: "Open Link",
    variant: "ghost",
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

export const Group: Story = {
  render: () => (
    <ButtonGroup variant="secondary" size="sm">
      <Button>Left</Button>
      <Button>Center</Button>
      <Button>Right</Button>
    </ButtonGroup>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="success">Success</Button>
      <Button variant="info">Info</Button>
      <Button variant="ai">✨ AI</Button>
    </div>
  ),
};
