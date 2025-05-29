import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { Events } from '@/components/events'
import { CTA } from '@/components/cta'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Events />
      <CTA />
    </>
  )
}