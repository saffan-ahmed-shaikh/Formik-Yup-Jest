import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Video from "./video";

export default {
  title: "Video",
  component: Video,
} as ComponentMeta<typeof Video>;

export const Template: ComponentStory<typeof Video> = (args) => (
  <Video {...args} />
);
