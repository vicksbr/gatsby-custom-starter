import React from "react"
import type { Story } from "@storybook/react"

import Nav from "./Nav"

export default {
  title: "Nav",
  component: Nav,
}

type NavProps = React.ComponentProps<typeof Nav>

const Template: Story<NavProps> = args => <Nav {...args} />

export const Default = Template.bind({})
