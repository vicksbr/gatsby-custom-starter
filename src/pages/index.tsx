import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section"
import Hero from "../components/Hero"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <section>Recursos</section>
    <section>Perfis</section>
    <section>Testimonial</section>
    <section style={{ backgroundColor: "yellow" }}>
      Formulario
      <form>
        <label>input</label>
        <input />
      </form>
    </section>
    <section>Preços e planos</section>
    <Section>Custom Section</Section>
  </Layout>
)

export default IndexPage
