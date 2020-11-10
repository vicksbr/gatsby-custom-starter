import React from "react"
import type { Story } from "@storybook/react"

import Section from "./Section"

export default {
  title: "Section",
  component: Section,
}

type SectionProps = React.ComponentProps<typeof Section>

const Template: Story<SectionProps> = args => <Section {...args} />

export const Default = Template.bind({})
