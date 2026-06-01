import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: () => (
    <div style={{ width: "280px" }}>
      <Select label="Framework" onChange={(v) => console.log(v)}>
        <Select.Option value="react">React</Select.Option>
        <Select.Option value="vue">Vue</Select.Option>
        <Select.Option value="svelte">Svelte</Select.Option>
      </Select>
    </div>
  ),
};

export const WithPlaceholder: Story = {
  render: () => (
    <div style={{ width: "280px" }}>
      <Select label="Role" placeholder="Select your role...">
        <Select.Option value="engineer">Engineer</Select.Option>
        <Select.Option value="designer">Designer</Select.Option>
        <Select.Option value="pm">Product Manager</Select.Option>
      </Select>
    </div>
  ),
};

export const WithDisabledOption: Story = {
  render: () => (
    <div style={{ width: "280px" }}>
      <Select label="Plan">
        <Select.Option value="free">Free</Select.Option>
        <Select.Option value="pro">Pro</Select.Option>
        <Select.Option value="enterprise" disabled>
          Enterprise (Coming soon)
        </Select.Option>
      </Select>
    </div>
  ),
};

export const WithError: Story = {
  render: () => (
    <div style={{ width: "280px" }}>
      <Select label="Country" error="Please select a country">
        <Select.Option value="us">United States</Select.Option>
        <Select.Option value="il">Israel</Select.Option>
        <Select.Option value="uk">United Kingdom</Select.Option>
      </Select>
    </div>
  ),
};
