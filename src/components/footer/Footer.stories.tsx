import React from "react"
import type { Story } from "@storybook/react"

import Footer from "./Footer"

export default {
  title: "Footer",
  component: Footer,
}

type FooterProps = React.ComponentProps<typeof Footer>

const Template: Story<FooterProps> = args => <Footer {...args} />

export const Default = Template.bind({})
