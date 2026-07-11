import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Impact } from "@/components/impact"
import { WhyPragma } from "@/components/why-pragma"
import { Quote } from "@/components/quote"
import { CTA } from "@/components/cta"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <Services />
        <Impact />
        <WhyPragma />
        <Quote />
        <CTA />
      </main>
      <SiteFooter />
    </>
  )
}
