import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Portfolio } from "./portfolio"

export default {
  title: "Portfolio",
  component: Portfolio,
} as ComponentMeta<typeof Portfolio>

export const Template: ComponentStory<typeof Portfolio> = (args) => (
  <Portfolio {...args} />
)

export const myPortfolio = Template.bind({})
myPortfolio.args = {
  totalValue: "2.90%",
  ytdValue: "20.50%",
  irrValue: "6.70%",
  annualizedValue: "9.20%",
  itdValue: "7,395,361",
  mainIrrValue: "6.50%",
}
