import React from "react"
import type { Story } from "@storybook/react"

import Hero from "./Hero"

export default {
  title: "Hero",
  component: Hero,
}

type HeroProps = React.ComponentProps<typeof Hero>

const Template: Story<HeroProps> = args => <Hero {...args} />

export const Default = Template.bind({})
