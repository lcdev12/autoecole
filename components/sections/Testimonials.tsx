import { Star } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { testimonials } from '@/lib/siteConfig'

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionWrapper className="text-center mb-14">
          <span className="inline-block text-brand-blue text-sm font-semibold uppercase tracking-wider mb-3">
            Avis eleves
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-text mb-4">
            Ils ont obtenu leur permis avec nous
          </h2>
        </SectionWrapper>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <SectionWrapper key={item.author} delay={index * 0.1}>
              <article className="h-full rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={`${item.author}-${i}`} className="w-4 h-4 fill-brand-orange text-brand-orange" />
                  ))}
                </div>
                <p className="text-sm text-brand-muted leading-relaxed mb-4">{item.text}</p>
                <p className="text-sm font-semibold text-brand-text">{item.author}</p>
              </article>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
