import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "./Button";
export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Safwan",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Azhar",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Fardeen",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Jassir",
};
